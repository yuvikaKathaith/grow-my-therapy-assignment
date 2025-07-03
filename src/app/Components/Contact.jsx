"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

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
      toast.error("Please fill in all required fields.");
    } else {
      setErrors({});
      toast.success("Form submitted successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
        contactTime: "",
        agree: false,
      });
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
    <motion.section
      className="bg-[#f3f0e8] px-8 py-16 flex justify-center items-center text-xl font-ebgaramond"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white border border-[#c3cfc8] rounded-xl shadow-lg w-full max-w-xl p-8 text-[#1c4031]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-center text-[17px] text-gray-700 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Simply fill out the brief fields below and we’ll be in touch with you
          soon, usually within one business day. This form is safe, private, and
          completely free.
        </motion.p>

        {[
          { label: "Name", name: "name", type: "text", placeholder: "Name" },
          { label: "Email", name: "email", type: "email", placeholder: "you@example.com" },
          { label: "Phone", name: "phone", type: "tel", placeholder: "(555) 234-5678" },
          {
            label: "What brings you here?",
            name: "message",
            type: "textarea",
            placeholder: "How can I help you?",
            rows: 3,
          },
          {
            label: "Preferred Contact Time",
            name: "contactTime",
            type: "text",
            placeholder: "e.g., Mornings, Evenings, Weekends",
          },
        ].map(({ label, name, type, placeholder, rows }, i) => (
          <motion.div key={name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}>
            <label className="block mb-2">{label}</label>
            {type === "textarea" ? (
              <textarea
                name={name}
                value={form[name]}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md mb-1"
                placeholder={placeholder}
                rows={rows}
              />
            ) : (
              <input
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md mb-1"
                placeholder={placeholder}
              />
            )}
            {errors[name] && <p className="text-red-500 text-sm mb-2">{errors[name]}</p>}
          </motion.div>
        ))}

        {/* Checkbox */}
        <motion.div
          className="flex items-start gap-2 mt-4 mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
        >
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
            className="mt-2"
          />
          <label className="text-md">I agree to be contacted</label>
        </motion.div>
        {errors.agree && <p className="text-red-500 text-sm mb-2">{errors.agree}</p>}

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full bg-[#1c4031] hover:bg-[#163227] text-white py-2 rounded-md font-semibold"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          Submit
        </motion.button>

        <motion.p
          className="text-[18px] text-center text-gray-500 mt-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
        >
          © By clicking submit you consent to receive texts and emails from Dr. Serena Blake.
        </motion.p>
      </motion.form>
    </motion.section>
  );
}
