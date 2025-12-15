import React from "react";
import SocialShare from "./SocialShare";
import ModalPartner from "./ModalPartner";
import GivebutterButton from "./GivebutterButton";
import GivebutterSponsor from "./GivebutterSponsor";
//import { Button } from "./ui/button";
import "../styles/global.css";
//import ModalSponsor from "./ModalSponsor";
//all custom forms and Givebutter integration

const InteractiveCards: React.FC = () => (
  <div className="relative py-16 lg:py-30 bg-stone-200 w-screen overflow-hidden">
    <section className="w-full max-w-[80rem] mx-auto px-6 lg:px-8">
      <h2 className="mb-6 lg:mb-12">How You Can Help</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4 lg:gap-4">
        {/* Card 1 */}
        <div className="group relative block bg-black rounded-lg overflow-hidden shadow-xl h-[432px]">
          <img
            alt=""
            src="/images/ina-ramos-og6jTcsXqAY-unsplash.webp"
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-40"
          />

          <div className="relative h-full p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium tracking-widest text-secondary-green uppercase">
              Donate Now
            </p>
            <p className="text-xl font-bold text-white sm:text-2xl">
              You can help
            </p>
            <div className="absolute left-0 bottom-0 w-full px-8 mb-8">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">
                  Your financial support provides immediate relief and long-term
                  recovery.
                </p>
              </div>
              <div className="mt-6">
                <GivebutterButton />
              </div>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="group relative block bg-black rounded-lg overflow-hidden shadow-xl h-[432px]">
          <img
            alt="Photo by Ina Ramos on Unsplash of a close-up of two people holding hands"
            src="/images/giuseppe-cantiello-FhLJfTG8xWM-unsplash.webp"
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-40"
          />

          <div className="relative h-full p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium tracking-widest text-secondary-green uppercase">
              Sponsor Now
            </p>
            <p className="text-xl font-bold text-white sm:text-2xl">
              Sponsor a Senior
            </p>
            <div className="absolute left-0 bottom-0 w-full px-8 mb-8">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">
                  Give meals, water, and essential supplies directly to a senior
                  in need.
                </p>
              </div>
              <div className="mt-6">
                <GivebutterSponsor />
              </div>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="group relative block bg-black rounded-lg overflow-hidden shadow-xl h-[432px]">
          <img
            alt="Photo by Kampus Production of people smiling together"
            src="/images/pexels-kampus-7551583.webp"
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-40"
          />

          <div className="relative h-full p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium tracking-widest text-secondary-green uppercase">
              Share Now
            </p>
            <p className="text-xl font-bold text-white sm:text-2xl">
              Spread the Word
            </p>
            <div className="absolute left-0 bottom-0 w-full px-8 mb-8">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">
                  Share our mission to help seniors receive the care they
                  deserve.
                </p>
              </div>
              <div className="mt-6">
                <SocialShare />
              </div>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="group relative block bg-black rounded-lg overflow-hidden shadow-xl h-[432px]">
          <img
            alt="Photo by Julia M Cameron of a close-up shot of food donations"
            src="/images/pexels-julia-m-cameron-6994962.webp"
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-40"
          />

          <div className="relative h-full p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium tracking-widest text-secondary-green uppercase">
              Connect Now
            </p>
            <p className="text-xl font-bold text-white sm:text-2xl">
              Partner With Us
            </p>
            <div className="absolute left-0 bottom-0 w-full px-8 mb-8">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">
                  Community groups, faith-based organizations, and businesses
                  are invited to join us.
                </p>
              </div>
              <div className="mt-6">
                <ModalPartner />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default InteractiveCards;
