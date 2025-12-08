import { useState } from "react";
import "../styles/global.css";
//partner form

export default function PartnerForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("access_key", "30bfc07a-c57e-4cb6-9daa-4334fcfcd46a");

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
          Organization Name
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
        <label className="block text-sm font-medium" htmlFor="message">
          Brief Description About Your Organization
        </label>
        <textarea
          className="mt-1 w-full rounded-lg border border-stone-300 placeholder:text-stone-400 py-2 px-3 focus:border-stone-500 focus:outline-none"
          id="message"
          rows={4}
          name="message"
          required
          placeholder="Organization Description"
        ></textarea>
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
