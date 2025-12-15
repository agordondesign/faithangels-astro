import { useState } from "react";
import "../styles/global.css";
//contact

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("access_key", "51cca09f-c6b7-4fb2-9a57-d900b6e4a1c0");

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
      className="bg-white space-y-4 rounded-lg border border-stone-200 shadow-xl p-6 max-w-lg"
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
        <label className="block text-sm font-medium" htmlFor="message">
          Message
        </label>
        <textarea
          className="mt-1 w-full rounded-lg border border-stone-300 placeholder:text-stone-400 py-2 px-3 focus:border-stone-500 focus:outline-none"
          id="message"
          rows={4}
          name="message"
          required
          placeholder="Your message"
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
