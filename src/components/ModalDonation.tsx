import React, { useState, useEffect } from "react";
import "../styles/global.css";
import { Button } from "@/components/ui/button";
import DonationForm from "./DonationForm";

console.log("ModalDonation component mounted");

const ModalDonation: React.FC = () => {
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
        className="py-2 px-6 h-12 shadow-md"
        onClick={openModal}
      >
        Donation Intake Form
      </Button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitle"
        >
          <div className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg">
            <div className="flex items-start justify-between">
              <h2 className="text-xl font-bold mb-4">Donation Intake Form</h2>

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
            <div className="mt-4 w-full">
              <DonationForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalDonation;
