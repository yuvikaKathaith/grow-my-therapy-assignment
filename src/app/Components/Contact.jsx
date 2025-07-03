"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    contactTime: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email";
    }
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.message.trim()) newErrors.message = "Please tell us what brings you here";
    if (!form.contactTime.trim()) newErrors.contactTime = "Preferred time is required";
    if (!form.agree) newErrors.agree = "Consent is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Form submitted successfully!");
      // handle form submission here
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <section className="bg-[#f3f0e8] px-8 py-16 flex justify-center items-center text-xl font-ebgaramond">
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-[#c3cfc8] rounded-xl shadow-lg w-full max-w-xl p-8 text-[#1c4031]"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">
          Get In Touch
        </h2>
        <p className="text-center text-[17px] text-gray-700 mb-6">
          Simply fill out the brief fields below and we’ll be in touch with you
          soon, usually within one business day. This form is safe, private, and
          completely free.
        </p>

        <label className="block mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md mb-1"
          placeholder="Name"
        />
        {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}

        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md mb-1"
          placeholder="you@example.com"
        />
        {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}

        <label className="block mb-2">Phone</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md mb-1"
          placeholder="(555) 234-5678"
        />
        {errors.phone && <p className="text-red-500 text-sm mb-2">{errors.phone}</p>}

        <label className="block mb-2">What brings you here?</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md mb-1"
          placeholder="How can I help you?"
          rows={3}
        />
        {errors.message && <p className="text-red-500 text-sm mb-2">{errors.message}</p>}

        <label className="block mb-2">Preferred Contact Time</label>
        <input
          type="text"
          name="contactTime"
          value={form.contactTime}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md mb-1"
          placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
        />
        {errors.contactTime && (
          <p className="text-red-500 text-sm mb-2">{errors.contactTime}</p>
        )}
        <div className="flex items-start gap-2 mt-4 mb-3">
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
            className="mt-2"
          />
          <label className="text-md">
            I agree to be contacted
          </label>
        </div>
        {errors.agree && <p className="text-red-500 text-sm mb-2">{errors.agree}</p>}

        <button
          type="submit"
          className="w-full bg-[#1c4031] hover:bg-[#163227] text-white py-2 rounded-md font-semibold"
        >
          Submit
        </button>
        <p className="text-[18px] text-center text-gray-500 mt-3">
          © By clicking submit you consent to receive texts and emails from Dr. Serena Blake.
        </p>
      </form>
    </section>
  );
}