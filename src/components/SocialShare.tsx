import "../styles/global.css";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const SocialShare = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [copied, setCopied] = useState(false);
  const jobUrl = `https://faith-angels.com`;

  const handleCopy = () => {
    navigator.clipboard.writeText(jobUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Button
        type="button"
        className="py-2 px-6 h-12 w-full"
        onClick={() => setShowPopup(true)}
      >
        Share Our Mission
      </Button>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg p-8 shadow-lg min-w-[320px] max-w-[90vw] border border-gray-300">
            <div className="flex items-start justify-between">
              <h2 id="modalTitle" className="text-xl font-bold mb-4">
                Share Our Mission
              </h2>

              <button
                type="button"
                className="-me-4 -mt-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600 focus:outline-none"
                aria-label="Close"
                onClick={() => setShowPopup(false)}
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
            <div className="flex flex-col gap-3 mb-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  jobUrl,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-green border border-primary-green text-white text-center py-2 px-4 rounded-lg hover:bg-transparent hover:text-primary-green transition"
              >
                Share on Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  jobUrl,
                )}&text=Check+out+this+job+posting!`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-green border border-primary-green text-white text-center py-2 px-4 rounded-lg hover:bg-transparent hover:text-primary-green transition"
              >
                Share on Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  jobUrl,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-green border border-primary-green text-white text-center py-2 px-4 rounded-lg hover:bg-transparent hover:text-primary-green transition"
              >
                Share on LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-2 mb-4 border border-stone-200 rounded-lg">
              <input
                type="text text-stone-300"
                value={jobUrl}
                readOnly
                className="px-2 py-1 flex-1 h-10 focus:outline-none"
              />
              <button
                onClick={handleCopy}
                className="bg-primary-brown border border-primary-brown text-white px-3 py-1 w-[100px] h-10 rounded-lg hover:bg-transparent hover:text-primary-brown transition"
              >
                {copied ? "Copied!" : "Copy URL"}
              </button>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="hidden mt-2 px-3 py-1 rounded-lg text-sm text-stone-400 border border-stone-400 hover:border-stone-600 hover:text-stone-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SocialShare;
