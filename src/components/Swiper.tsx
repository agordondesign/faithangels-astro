import React, { useEffect, useRef, useState } from "react";

/**
 * Robust client-only Swiper React component
 *
 * - Dynamically imports the `swiper` package at runtime (client-only).
 * - Injects Swiper bundle CSS into the document head to avoid SSR/CSS module issues.
 * - Initializes Swiper with Pagination/Navigation/Autoplay modules when available.
 * - Provides a safe static fallback UI if initialization fails.
 *
 * Usage (in Astro):
 *   - Install swiper locally: `npm install swiper`
 *   - Mount this component as a client island: <Swiper client:load slides={[...]} />
 */

type Slide = React.ReactNode | string;

export type Props = {
  slides?: Slide[];
  className?: string;
  // Behavior
  loop?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  slidesPerView?: number;
  spaceBetween?: number;
  // Selectors (useful for namespacing multiple instances)
  paginationSelector?: string;
  prevElSelector?: string;
  nextElSelector?: string;
};

export default function Swiper({
  slides = Array.from({ length: 6 }, (_, i) => `Slide ${i + 1}`),
  className = "",
  loop = true,
  autoplay = true,
  autoplayDelay = 3000,
  slidesPerView = 1,
  spaceBetween = 16,
  paginationSelector = ".swiper-pagination",
  prevElSelector = ".swiper-button-prev",
  nextElSelector = ".swiper-button-next",
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const instanceRef = useRef<any | null>(null);
  const [failed, setFailed] = useState(false);
  const [initialized, setInitialized] = useState(false);

  // Ensure Swiper CSS bundle is present (client-side only)
  function ensureCssBundle() {
    try {
      if (typeof document === "undefined") return;
      const id = "astro-swiper-bundle-css";
      if (!document.getElementById(id)) {
        const link = document.createElement("link");
        link.id = id;
        link.rel = "stylesheet";
        // Using CDN bundle to avoid local CSS module resolution at SSR time
        link.href =
          "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css";
        link.crossOrigin = "anonymous";
        document.head.appendChild(link);
      }
    } catch (e) {
      // Non-fatal: CSS injection failed
      // eslint-disable-next-line no-console
      console.warn("[Swiper] CSS injection failed:", e);
    }
  }

  useEffect(() => {
    let mounted = true;

    async function init() {
      if (!mounted) return;
      const container = containerRef.current;
      if (!container) {
        // Nothing to do if container isn't present
        // eslint-disable-next-line no-console
        console.debug("[Swiper] container not found; abort init");
        return;
      }

      ensureCssBundle();

      try {
        // Dynamically import the library on the client
        const mod: any = await import("swiper");
        // Some builds export default, some export named Swiper
        const SwiperCtor = mod?.default ?? mod?.Swiper ?? null;
        const { Pagination, Navigation, Autoplay } = mod as any;

        // If constructor missing, fail gracefully
        if (!SwiperCtor) {
          // eslint-disable-next-line no-console
          console.warn("[Swiper] Swiper constructor not found in module:", mod);
          setFailed(true);
          return;
        }

        const modules = [Pagination, Navigation, Autoplay].filter(Boolean);

        const options: Record<string, any> = {
          modules,
          slidesPerView,
          spaceBetween,
          pagination: { el: paginationSelector, clickable: true },
          navigation: { prevEl: prevElSelector, nextEl: nextElSelector },
          loop,
          observer: true,
          observeParents: true,
        };

        if (autoplay) {
          options.autoplay = {
            delay: autoplayDelay,
            disableOnInteraction: false,
          };
        }

        // Destroy any previous instance (safe guard)
        if (
          instanceRef.current &&
          typeof instanceRef.current.destroy === "function"
        ) {
          try {
            instanceRef.current.destroy(true, true);
          } catch (_) {
            // ignore
          }
          instanceRef.current = null;
        }

        // Initialize
        // Note: some Swiper builds expect an element, others a selector. Passing the element is robust.
        const inst = new SwiperCtor(container as any, options);
        instanceRef.current = inst;

        // Small timeout to allow layout to settle, then ensure update called
        setTimeout(() => {
          try {
            inst.update?.();
          } catch (_) {
            // ignore
          }
        }, 50);

        setInitialized(true);
        // eslint-disable-next-line no-console
        console.debug("[Swiper] initialized", { inst });
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error("[Swiper] initialization failed:", err);
        setFailed(true);
      }
    }

    init();

    return () => {
      mounted = false;
      try {
        if (
          instanceRef.current &&
          typeof instanceRef.current.destroy === "function"
        ) {
          instanceRef.current.destroy(true, true);
        }
      } catch (_) {
        // ignore
      } finally {
        instanceRef.current = null;
      }
    };
    // intentionally shallow: only reinit on options change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    paginationSelector,
    prevElSelector,
    nextElSelector,
    loop,
    autoplay,
    slidesPerView,
    spaceBetween,
    autoplayDelay,
  ]);

  // Safe static fallback if initialization failed
  if (failed) {
    return (
      <div className={`swiper-fallback ${className}`} style={{ width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 12,
          }}
        >
          {slides.map((s, i) => (
            <div
              key={i}
              style={{
                background: "#444",
                color: "#fff",
                padding: 20,
                minHeight: 120,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Normal Swiper markup (will be wired client-side)
  return (
    <div
      className={`swiper-wrapper-outer ${className}`}
      style={{ width: "100%" }}
    >
      {/* The CSS bundle is injected in useEffect to avoid SSR time CSS issues. */}
      <div className="swiper mySwiper" ref={containerRef}>
        <div className="swiper-wrapper">
          {slides.map((s, idx) => (
            <div
              className="swiper-slide"
              key={idx}
              role="group"
              aria-label={typeof s === "string" ? s : `slide-${idx}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {s}
            </div>
          ))}
        </div>

        <div className="swiper-pagination" aria-hidden="false" />

        <div
          className="swiper-button-prev"
          role="button"
          aria-label="Previous slide"
        />
        <div
          className="swiper-button-next"
          role="button"
          aria-label="Next slide"
        />
      </div>

      {/* Minimal local styles so slides are visible even if Swiper CSS doesn't load immediately */}
      <style>{`
        .mySwiper { width: 100%; height: 100%; }
        .mySwiper .swiper-slide { font-size: 18px; color: #fff; background: #444; min-height: 180px; }
        /* Ensure navigation clickable area is visible even without bundle CSS */
        .swiper-button-prev, .swiper-button-next { width: 36px; height: 36px; background: rgba(0,0,0,0.25); border-radius: 6px; }
      `}</style>
    </div>
  );
}
