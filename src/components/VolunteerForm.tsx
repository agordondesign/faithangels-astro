import { useState } from "react";
import "../styles/global.css";
//donation form

export default function VolunteerForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("access_key", "f7f4c59f-374c-4691-99bb-ef46ae63e66a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Submitted Successfully");
      form.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-lg border border-white w-sm"
    >
      <div>
        <label className="block text-sm font-medium" htmlFor="name">
          Name
        </label>
        <input
          className="mt-1 w-full rounded-lg border border-stone-300 placeholder:text-stone-400 py-2 px-3 focus:border-stone-500 focus:outline-none"
          id="name"
          type="text"
          name="name"
          required
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium" htmlFor="email">
          Email
        </label>
        <input
          className="mt-1 w-full rounded-lg border border-stone-300 placeholder:text-stone-400 py-2 px-3 focus:border-stone-500 focus:outline-none"
          id="email"
          type="email"
          name="email"
          required
          placeholder="Your email"
        />
      </div>
      <div>
        <label className="block text-sm font-medium" htmlFor="phone">
          Phone
        </label>
        <input
          className="mt-1 w-full rounded-lg border border-stone-300 placeholder:text-stone-400 py-2 px-3 focus:border-stone-500 focus:outline-none"
          id="phone"
          type="tel"
          name="phone"
          placeholder="(123) 456-7890"
        />
      </div>
      <div>
        <label className="block text-sm font-medium" htmlFor="name">
          Organization
        </label>
        <input
          className="mt-1 w-full rounded-lg border border-stone-300 placeholder:text-stone-400 py-2 px-3 focus:border-stone-500 focus:outline-none"
          id="organization"
          type="text"
          name="organization"
          placeholder="Your organization"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">
          Which program(s) are you interested in?
        </label>
        <div className="flex flex-col gap-1 text-base">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="condition"
              value="Lifeline for a Senior"
              className="form-checkbox rounded border-stone-300 text-primary-green focus:ring-primary-green"
            />
            <span className="ml-2">Lifeline for a Senior</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="condition"
              value="Meals of Love Program"
              className="form-checkbox rounded border-stone-300 text-primary-green focus:ring-primary-green"
            />
            <span className="ml-2">Meals of Love Program</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="condition"
              value="Home Repair & Rebuilding Assistance"
              className="form-checkbox rounded border-stone-300 text-primary-green focus:ring-primary-green"
            />
            <span className="ml-2">
              Home Repair &amp; Rebuilding Assistance
            </span>
          </label>
        </div>
      </div>
      <button
        className="block w-full rounded-lg border border-primary-green bg-primary-green px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-primary-green"
        type="submit"
      >
        Send Message
      </button>
      <span className="text-xs text-primary-green">{result}</span>
    </form>
  );
}
