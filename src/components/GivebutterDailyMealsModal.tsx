import React, { useState, useEffect } from "react";
import GivebutterDailyMeals from "./GivebutterDailyMeals";

const GivebutterDailyMealsModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="inline-block rounded bg-primary-brown text-white px-4 py-2"
        onClick={() => setIsOpen(true)}
      >
        Donate Daily Meals
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative flex flex-col justify-center items-center w-full max-w-md min-w-[300px] bg-white rounded-lg shadow-lg">
            <button
              aria-label="Close"
              className="absolute top-2 right-2 z-50 rounded-full p-1 text-gray-600 hover:text-gray-900 bg-white/80"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <div className="w-full flex justify-center items-center px-4 pb-4">
              <div className="w-full" style={{ minWidth: 300 }}>
                {/* @ts-ignore */}
                <GivebutterDailyMeals />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GivebutterDailyMealsModal;
