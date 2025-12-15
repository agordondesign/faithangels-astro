import { useEffect } from "react";

/**
 * SwiperClient.jsx
 *
 * React client-island that dynamically imports Swiper from the local npm package
 * and initializes it in the browser. This version adds debug logging and observers
 * (ResizeObserver + MutationObserver) to help diagnose why slides may not move.
 *
 * Usage:
 *  - Render your static Swiper markup in an Astro component:
 *      <div class="swiper mySwiper">
 *        <div class="swiper-wrapper"> ... </div>
 *        <div class="swiper-pagination"></div>
 *      </div>
 *
 *  - Mount this island in the same Astro file:
 *      <SwiperClient client:load selector=".mySwiper" paginationSelector=".swiper-pagination" />
 *
 * Requirements:
 *  - Install Swiper locally: `npm install swiper`
 *
 * Props:
 *  - selector: CSS selector for the Swiper container (default ".mySwiper")
 *  - paginationSelector: CSS selector for the pagination element (default ".swiper-pagination")
 */
export default function SwiperClient({
  selector = ".mySwiper",
  paginationSelector = ".swiper-pagination",
}) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let swiperInstance = null;
    let resizeObserver = null;
    let mutationObserver = null;

    async function init() {
      console.debug("[SwiperClient] init start - selector:", selector);
      try {
        // Dynamically import Swiper and its CSS so this file is safe for SSR
        const mod = await import("swiper");
        // Import CSS (these are pure side-effect imports)
        await Promise.all([
          import("swiper/css"),
          import("swiper/css/pagination"),
        ]);

        console.debug("[SwiperClient] swiper module loaded:", mod);

        const Swiper = mod.default ?? mod.Swiper ?? null;
        const { Pagination } = mod;

        if (!Swiper) {
          console.warn(
            "[SwiperClient] Swiper constructor not found. Module shape:",
            mod,
          );
          return;
        }

        // Ensure the container exists
        const container = document.querySelector(selector);
        if (!container) {
          console.warn(
            `[SwiperClient] Swiper container not found for selector: ${selector}`,
          );
          return;
        }

        // Log some DOM diagnostics
        const slides = container.querySelectorAll(".swiper-slide");
        console.debug("[SwiperClient] found slides count:", slides.length);

        // Initialize Swiper with Pagination module
        swiperInstance = new Swiper(container, {
          modules: [Pagination],
          // Default behavior (mobile-first)
          slidesPerView: 1,
          spaceBetween: 16,
          pagination: {
            el: paginationSelector,
            clickable: true,
          },
          breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          },
        });

        console.debug("[SwiperClient] Swiper initialized:", swiperInstance);

        // If Swiper initialized, add ResizeObserver to update on container size changes
        if ("ResizeObserver" in window && container) {
          resizeObserver = new ResizeObserver(() => {
            try {
              console.debug(
                "[SwiperClient] ResizeObserver triggered - updating Swiper",
              );
              if (
                swiperInstance &&
                typeof swiperInstance.update === "function"
              ) {
                swiperInstance.update();
              }
            } catch (e) {
              console.warn(
                "[SwiperClient] error during swiper update from ResizeObserver",
                e,
              );
            }
          });
          resizeObserver.observe(container);
        }

        // MutationObserver to detect dynamic slide additions/removals which could prevent sliding
        if ("MutationObserver" in window && container) {
          mutationObserver = new MutationObserver((mutationsList) => {
            let changed = false;
            for (const m of mutationsList) {
              if (m.type === "childList") {
                changed = true;
                break;
              }
            }
            if (changed) {
              console.debug(
                "[SwiperClient] MutationObserver detected slide change - call update()",
              );
              try {
                if (
                  swiperInstance &&
                  typeof swiperInstance.update === "function"
                ) {
                  swiperInstance.update();
                }
              } catch (e) {
                console.warn(
                  "[SwiperClient] error during swiper update from MutationObserver",
                  e,
                );
              }
            }
          });
          mutationObserver.observe(
            container.querySelector(".swiper-wrapper") || container,
            {
              childList: true,
              subtree: false,
            },
          );
        }

        // Log current active index and navigation state periodically (debugging only)
        const debugInterval = setInterval(() => {
          if (!swiperInstance) {
            clearInterval(debugInterval);
            return;
          }
          try {
            console.debug("[SwiperClient] debug:", {
              activeIndex: swiperInstance.activeIndex,
              isBeginning: swiperInstance.isBeginning,
              isEnd: swiperInstance.isEnd,
              slidesLength: swiperInstance.slides?.length ?? null,
            });
          } catch (e) {
            console.debug("[SwiperClient] debug interval error", e);
          }
        }, 3000);

        // store interval on instance for cleanup
        swiperInstance.__debugInterval = debugInterval;
      } catch (err) {
        // Don't let Swiper failures break the page - log to console for debugging
        // eslint-disable-next-line no-console
        console.error(
          "[SwiperClient] Failed to initialize Swiper client island:",
          err,
        );
      }
    }

    init();

    return () => {
      // Cleanup observers and the Swiper instance
      try {
        if (resizeObserver) {
          resizeObserver.disconnect();
          resizeObserver = null;
        }
        if (mutationObserver) {
          mutationObserver.disconnect();
          mutationObserver = null;
        }
        if (swiperInstance) {
          try {
            // Clear debug interval if any
            if (swiperInstance.__debugInterval) {
              clearInterval(swiperInstance.__debugInterval);
            }
            if (typeof swiperInstance.destroy === "function") {
              swiperInstance.destroy(true, true);
            }
          } catch (e) {
            // ignore
          }
          swiperInstance = null;
        }
      } catch (e) {
        console.warn("[SwiperClient] error during cleanup:", e);
      }
    };
  }, [selector, paginationSelector]);

  // This component is a controller-only island; it renders nothing.
  return null;
}
