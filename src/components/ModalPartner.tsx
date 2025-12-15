import React, { useState, useEffect } from "react";
import "../styles/global.css";
import { Button } from "@/components/ui/button";
import PartnerForm from "@/components/PartnerForm";
//modal partner form

console.log("ModalPartner component mounted");

const ModalPartner: React.FC = () => {
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
        className="py-2 px-6 h-12 w-full"
        onClick={openModal}
      >
        Join Our Mission
      </Button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitle"
        >
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg relative overflow-y-auto max-h-[90vh]">
            <div className="flex items-start justify-between">
              <h2 id="modalTitle" className="text-xl font-bold mb-4">
                Partner with Us
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
              <PartnerForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalPartner;
