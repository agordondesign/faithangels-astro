import React, { useState, useEffect } from "react";
import "../styles/global.css";
import { Button } from "@/components/ui/button";
//modal sponsor form - Givebutter embed

console.log("ModalSponsor component mounted");

const ModalSponsor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    console.log("Modal open state:", isOpen);
  }, [isOpen]);

  return (
    <>
      <Button
        type="button"
        className="py-2 px-6 h-12 w-full shadow-md"
        onClick={openModal}
      >
        Sponsor a Senior
      </Button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitle"
        >
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <div className="flex items-start justify-between">
              <h2
                id="modalTitle"
                className="text-xl font-bold text-gray-900 sm:text-2xl"
              >
                Modal Title
              </h2>

              <button
                type="button"
                className="-me-4 -mt-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600 focus:outline-none"
                aria-label="Close"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-4">
              <p className="text-pretty text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi eu consectetur. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>

              <label htmlFor="Confirm" className="mt-4 block">
                <span className="text-sm font-medium text-gray-700">
                  Please type "Confirm" to complete action
                </span>

                <input
                  type="text"
                  id="Confirm"
                  className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
                />
              </label>
            </div>

            <footer className="mt-6 flex justify-end gap-2">
              <button
                type="button"
                className="rounded bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
                onClick={closeModal}
              >
                Cancel
              </button>

              <button
                type="button"
                className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                Done
              </button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalSponsor;
