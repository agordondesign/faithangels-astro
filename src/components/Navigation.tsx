import { useState } from "react";
import "../styles/global.css";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { title: "Home", path: "/#home" },
    { title: "About", path: "/#about" },
    { title: "Relief", path: "/#relief" },
    { title: "Support", path: "/#support" },
    { title: "Contact", path: "/#contact" },
  ];

  return (
    <nav className="sticky top-0 left-0 border-b shadow-xl w-full pt-2 md:text-sm md:border-none z-50 bg-stone-100 px-6 lg:px-8">
      <div className="items-center px-4 max-w-[80rem] mx-auto md:flex">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="/">
            <img
              src="/svg/Faith Angels Logo V2.svg"
              alt="Logo"
              width={331.5}
              height={162.75}
              className="w-[200px] h-auto"
            />
          </a>
          <div className="md:hidden">
            <button
              className="text-primary-brown/70 hover:text-primary-brown"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              {/* Hamburger icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block flex-1 pb-3 mt-8 md:pb-0 md:mt-0">
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => (
              <li key={idx} className="hover:text-primary-green">
                <a href={item.path} className="block">
                  {item.title}
                </a>
              </li>
            ))}
            <span className="hidden w-px h-6 bg-stone-300 md:block"></span>
            <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
              <li>
                <a href="#support" className="button-class">
                  Donate
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>

      {/* Mobile Fullscreen Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-stone-100 flex flex-col justify-center items-center">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-gray-700 hover:text-primary-green text-3xl"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            {/* X icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="space-y-8 text-center">
            {navigation.map((item, idx) => (
              <li
                key={idx}
                className="text-gray-700 hover:text-primary-green text-2xl"
              >
                <a
                  href={item.path}
                  className="block"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.title}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/#support"
                className="block py-3 px-4 font-medium text-white border border-primary-green bg-primary-green hover:bg-transparent hover:text-primary-green active:bg-secondary-green active:shadow-none rounded-lg shadow text-2xl"
                onClick={() => setMenuOpen(false)}
              >
                Donate
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
