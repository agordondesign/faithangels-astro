import React, { useState, useEffect } from "react";
import "../styles/global.css";
import { Button } from "./ui/button";
import VolunteerForm from "./VolunteerForm";

type ModalType = null | "lifeline" | "meals" | "repair";

const modalTitles: Record<Exclude<ModalType, null>, string> = {
  lifeline: "Be a Lifeline for a Senior",
  meals: "Join the Meals of Love Team",
  repair: "Volunteer for Home Repair & Rebuilding",
};

export default function Volunteer() {
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
    <section className="w-full py-16 lg:py-30 bg-stone-200">
      <div className="flex flex-col gap-6 w-full max-w-[80rem] mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2>Volunteer With Us</h2>
          <h3>Become a Lifeline for a Senior in Need</h3>
          <p className="mt-6">
            Through our Community Outreach & Well-Being Program, volunteers help
            restore dignity, safety, and connection for our seniors. Join us and
            make a meaningful difference.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          {/* Lifeline for a Senior */}
          <div className="flex flex-col gap-6 justify-between w-full p-4 lg:p-6 border border-white rounded-lg bg-stone-100/50 shadow-xl">
            <div className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Lifeline for a Senior</h3>
                <p>Combat isolation. Build meaningful connections.</p>
              </div>
              <p className="text-base">
                Volunteers provide:
                <ul className="list-disc ml-4 text-base">
                  <li>Weekly check-ins (phone or in-person)</li>
                  <li>Delivery of care packages</li>
                  <li>Spiritual encouragement and companionship</li>
                  <li>Assistance with light household tasks</li>
                </ul>
              </p>
            </div>
            <Button
              type="button"
              onClick={() => setOpenModal("lifeline")}
              className="w-full"
            >
              Be a Lifeline for a Senior
            </Button>
          </div>
          {/* Meals of Love Program */}
          <div className="flex flex-col gap-6 justify-between w-full p-4 lg:p-6 border border-white rounded-lg bg-stone-100/50 shadow-xl">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Meals of Love Program</h3>
                <p>
                  Nourishing bodies and hearts with warm meals and compassion.
                </p>
              </div>
              <p className="text-base">
                We prepare and deliver hot meals to:
                <ul className="list-disc ml-4 text-base">
                  <li>Seniors living alone</li>
                  <li>Seniors with limited mobility</li>
                  <li>Seniors in disaster-affected communities</li>
                </ul>
              </p>
            </div>
            <Button
              type="button"
              onClick={() => setOpenModal("meals")}
              className="w-full"
            >
              Join the Meals of Love Team
            </Button>
          </div>
          {/* Home Repair & Rebuilding Assistance */}
          <div className="flex flex-col gap-6 justify-between w-full p-4 lg:p-6 border border-white rounded-lg bg-stone-100/50 shadow-xl">
            <div className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-xl font-medium">
                  Home Repair & Rebuilding Assistance
                </h3>
                <p>
                  Restoring safe, livable homes for seniors affected by
                  Hurricane Melissa.
                </p>
              </div>
              <p className="text-base">
                Many seniors still live in unsafe or damaged homes. Volunteers
                and partners work together to restore safety and dignity.
              </p>
              <p className="text-base">
                Activities include:
                <ul className="list-disc ml-4 text-base">
                  <li>Supporting seniors with damaged or destroyed homes</li>
                  <li>
                    Prioritizing repairs to roofing, windows, doors, plumbing,
                    and living spaces
                  </li>
                  <li>
                    Collaborating with local contractors, skilled workers, and
                    community volunteers
                  </li>
                </ul>
              </p>
            </div>
            <Button
              type="button"
              onClick={() => setOpenModal("repair")}
              className="w-full"
            >
              Volunteer for Home Repair & Rebuilding
            </Button>
          </div>
        </div>
      </div>
      {/* Modal */}
      {openModal && (
        <div
          className="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="volunteerModalTitle"
        >
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg relative overflow-y-auto max-h-[90vh]">
            <div className="flex items-start justify-between mb-4">
              <h2 id="volunteerModalTitle" className="text-xl font-bold">
                {modalTitles[openModal]}
              </h2>
              <button
                type="button"
                className="-me-4 -mt-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600 focus:outline-none"
                aria-label="Close"
                onClick={() => setOpenModal(null)}
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
            <VolunteerForm onSuccess={() => setOpenModal(null)} />
          </div>
        </div>
      )}
    </section>
  );
}
