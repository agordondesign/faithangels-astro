import React from "react";
import "../styles/global.css";
import ModalPartner from "./ModalPartner";

export default function SpecialThanks(): JSX.Element {
  const slides = [
    {
      img: "/images/rainforest-logo.png",
      title: "Rainforest Seafoods",
      copy: "Faith Angels for Seniors sincerely thanks Rainforest Seafoods, Montego Bay, for partnering in the Community Food for Seniors Initiative, providing essential food support to seniors following Hurricane Melissa.",
      url: "https://rainforestcaribbean.com/",
      urlLabel: "rainforestcaribbean.com",
      alt: "Rainforest Seafoods logo",
    },
    {
      img: "/images/globalmedic-logo.webp",
      title: "GlobalMedic",
      copy: "Faith Angels for Seniors sincerely thanks GlobalMedic for donating 100 water filter solutions and food hampers, helping seniors in our community access clean water and essential food supplies following Hurricane Melissa.",
      url: "https://globalmedic.ca/",
      urlLabel: "globalmedic.ca",
      alt: "GlobalMedic logo",
    },
    {
      img: "/svg/ashre-logo.svg",
      title: "ASHRE Care Centre",
      copy: "Faith Angels for Seniors sincerely thanks ASHRE Care Centre for partnering in the Community Food for Seniors Initiative, supporting seniors impacted by Hurricane Melissa.",
      url: "https://www.ashrecare.com/",
      urlLabel: "ashrecare.com",
      alt: "ASHRE Care Centre logo",
    },
  ];

  return (
    <>
      <div className="hidden border-t border-stone-200 w-full" />
      <section className="py-16 lg:py-30 bg-stone-200">
        <div className="w-full lg:max-w-[80rem] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* LEFT COLUMN: Context */}
            <div className="space-y-6 w-full md:max-w-2xl lg:w-1/3">
              <h2>Special Thanks to Our Supporters</h2>
              <p>
                Faith Angels for Seniors extends heartfelt thanks to our
                partners whose generosity has made it possible to deliver
                emergency relief to seniors in Jamaica following Hurricane
                Melissa.
              </p>
              <p>
                Each contribution—large or small—helps restore dignity, safety,
                and hope to elders in our community.
              </p>

              {/* CTA and modal: keep block-level element outside <p> */}
              <p>Interested in partnering with Faith Angels?</p>
              <div className="max-w-[200px] max-h-[50px]">
                <ModalPartner />
              </div>
            </div>

            {/* RIGHT COLUMN: Partner Thank-You Cards */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
              {slides.map((s, idx) => (
                <article
                  key={idx}
                  className="rounded-xl bg-white border border-stone-300 p-6 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-[50px] w-full rounded-lg flex items-center justify-center">
                      <img
                        src={s.img}
                        className="h-auto w-auto max-w-[200px] max-h-[50px]"
                        alt={s.alt}
                      />
                    </div>
                  </div>

                  <p className="mt-4 text-base">{s.copy}</p>

                  <span className="text-primary-green hover:text-secondary-green text-sm">
                    <a href={s.url} target="_blank" rel="noopener noreferrer">
                      {s.urlLabel}
                    </a>
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
