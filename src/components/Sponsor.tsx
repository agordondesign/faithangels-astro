import React, { useState, useEffect } from "react";
import "../styles/global.css";
import GivebutterDailyMeals from "./GivebutterDailyMeals";
import GivebutterFoodHamper from "./GivebutterFoodHamper";
import GivebutterHygieneCareKit from "./GivebutterHygieneCareKit";
import { Button } from "./ui/button";

type ModalType = null | "meals" | "hamper" | "hygiene";

export default function Sponsor(): JSX.Element {
  const [openModal, setOpenModal] = useState<ModalType>(null);

  useEffect(() => {
    if (openModal) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [openModal]);

  return (
    <section>
      <div className="relative flex w-full h-auto overflow-hidden bg-primary-green">
        {/* Content column */}
        <div className="flex flex-col h-auto w-screen py-16 lg:py-30 px-6 lg:px-8 mx-auto z-10">
          <div className="relative flex flex-col gap-1 w-full max-w-[80rem] mx-auto">
            <div className="w-full lg:max-w-1/2 lg:px-8">
              <h2 className="text-white">Sponsor a Senior</h2>
              <p className="mt-6 text-white">
                Too many seniors lack basic hygiene items, incontinence
                supplies, and everyday essentials needed for dignity and
                comfort. Your contribution ensures they are seen, supported, and
                never forgotten.
              </p>
              <p className="mt-4 text-white">
                With Sponsor a Senior, you can provide a monthly CarePath
                Essentials Kit that delivers immediate, meaningful impact.
              </p>
            </div>

            <div className="w-full xl:max-w-5/6 lg:px-8">
              <ul className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <li className="flex flex-col justify-between h-full bg-white/80 border border-white/80 py-6 px-4 rounded-lg backdrop-blur-sm shadow-xl">
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">Daily Hot Meals</h3>
                    <Button
                      className="w-full"
                      onClick={() => setOpenModal("meals")}
                    >
                      Help Feed Seniors Daily
                    </Button>
                    <p className="text-base">
                      Many elders lost their kitchens or no longer have the
                      strength to cook. Your support helps Faith Angels for
                      Seniors provide warm, nourishing meals to those who need
                      them most.
                    </p>
                  </div>
                </li>

                <li className="flex flex-col justify-between h-full bg-white/80 border border-white/80 py-6 px-4 rounded-lg backdrop-blur-sm shadow-xl">
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">Food Hamper</h3>
                    <Button
                      className="w-full"
                      onClick={() => setOpenModal("hamper")}
                    >
                      Give a Food Hamper to a Senior
                    </Button>
                    <p className="text-base">
                      Instead of sending groceries, you can sponsor a hamper
                      that Faith Angels assembles and distributes directly to
                      seniors in need. Your sponsorship ensures a senior has
                      reliable food support during this difficult time.
                    </p>
                  </div>
                </li>

                <li className="flex flex-col justify-between h-full bg-white/80 border border-white/80 py-6 px-4 rounded-lg backdrop-blur-sm shadow-xl">
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">Hygiene Care Kit</h3>
                    <Button
                      className="w-full"
                      onClick={() => setOpenModal("hygiene")}
                    >
                      Sponsor a Hygiene Care Kit
                    </Button>
                    <p className="text-base">
                      Faith Angels is working to supply 500 Hygiene Care Kits
                      each month to restore dignity and basic comfort for
                      vulnerable seniors. Your sponsorship helps ensure seniors
                      receive the essentials they rely on daily.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Background image column (right) */}
        <div className="absolute flex flex-col lg:flex-row left-0 w-screen z-0">
          <div className="w-full lg:w-1/2 mx-auto" />
          <div className="w-full lg:w-1/2 h-[450px] lg:h-screen overflow-hidden">
            {/* Use a plain <img> so the TSX component is self-contained; ResponsiveImage optimizations can be added later */}
            <img
              src="/images/shimo-yann-7nTFrV1xQGE-unsplash.avif"
              alt="Volunteer helping a senior"
              className="w-full h-full object-cover object-center block opacity-20 lg:opacity-100 grayscale lg:grayscale-0"
            />
          </div>
        </div>
      </div>

      {/* Single Modal for all Givebutter widgets */}
      {openModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative flex flex-col justify-center items-center w-full max-w-md min-w-[300px]">
            <button
              aria-label="Close"
              className="absolute top-2 right-6 z-50 rounded-full p-1 text-gray-600 hover:text-gray-900 "
              onClick={() => setOpenModal(null)}
            >
              ✕
            </button>
            <div className="w-full flex justify-center items-center">
              <div className="w-full" style={{ minWidth: 300 }}>
                {openModal === "meals" && <GivebutterDailyMeals />}
                {openModal === "hamper" && <GivebutterFoodHamper />}
                {openModal === "hygiene" && <GivebutterHygieneCareKit />}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
