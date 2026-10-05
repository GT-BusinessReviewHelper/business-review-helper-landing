"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CountryPhoneInput, {
  CountryItem,
  validatePhoneForCountry,
} from "../components/CountryPhoneInput";
import { CountryCode } from "libphonenumber-js";

interface ContactFormData {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  message: string;
  agreed: boolean;
}

interface FormErrors {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  message?: string;
  agreed?: string;
}

export default function ContactUsPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    message: "",
    agreed: false,
  });

  const [selectedCountry, setSelectedCountry] = useState<CountryCode>("IN");
  const [countryDialCode, setCountryDialCode] = useState<string>("+91");
  const [fieldErrors, setFieldErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.trim());
  };

  // Allows letters (incl. accented), spaces, hyphens, apostrophes — no digits
  const validateName = (name: string): boolean => {
    return /^[a-zA-ZÀ-ÖØ-öø-ÿ' -]+$/.test(name.trim());
  };

  // Prevent typing digits in name fields
  const blockNumberInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (fieldErrors[name as keyof FormErrors]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[name as keyof FormErrors];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors: FormErrors = {};

    // Email validation
    const trimmedEmail = formData.email.trim();
    if (!trimmedEmail) {
      errors.email = "Email Address is required.";
    } else if (!validateEmail(trimmedEmail)) {
      errors.email = "Please enter a valid email address (e.g., name@example.com).";
    }

    // Phone validation using libphonenumber-js
    const phoneError = validatePhoneForCountry(formData.phone, selectedCountry);
    if (phoneError) {
      errors.phone = phoneError;
    }

    // First Name validation (required)
    const trimmedFirstName = formData.firstName.trim();
    if (!trimmedFirstName) {
      errors.firstName = "First Name is required.";
    } else if (trimmedFirstName.length < 2) {
      errors.firstName = "First Name must be at least 2 characters.";
    } else if (!validateName(trimmedFirstName)) {
      errors.firstName = "First Name must contain letters only (no numbers).";
    }

    // Last Name validation (optional — validate only if provided)
    const trimmedLastName = formData.lastName.trim();
    if (trimmedLastName) {
      if (trimmedLastName.length < 2) {
        errors.lastName = "Last Name must be at least 2 characters.";
      } else if (!validateName(trimmedLastName)) {
        errors.lastName = "Last Name must contain letters only (no numbers).";
      }
    }

    // Message / Tell Us validation
    if (!formData.message.trim()) {
      errors.message = "Please tell us about your project.";
    } else if (formData.message.trim().length < 5) {
      errors.message = "Please enter at least 5 characters.";
    }

    // Checkbox agreement
    if (!formData.agreed) {
      errors.agreed = "Please agree to the terms to proceed.";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: trimmedFirstName,
          lastName: trimmedLastName,
          email: trimmedEmail,
          phone: formData.phone.trim(),
          message: formData.message.trim(),
          agreed: true,
          countryCode: selectedCountry,
          dialCode: countryDialCode,
        }),
      });

      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!response.ok || !result?.ok) {
        setSubmitError(result?.error || "Could not send your message. Please try again.");
        return;
      }

      setIsSuccess(true);
      setFormData({
        email: "",
        phone: "",
        firstName: "",
        lastName: "",
        message: "",
        agreed: false,
      });
    } catch {
      setSubmitError("Could not send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setIsSuccess(false);
    setFieldErrors({});
    setSubmitError("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FBFF] text-[#05031C] font-sans selection:bg-[#3157FF] selection:text-white">
      {/* 1. Header Navigation */}
      <Header />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* HERO SECTION — Brand Blue Gradient with perfect text contrast */}
        {/* ========================================================================= */}
        <section
          className="relative pt-16 sm:pt-20 lg:pt-24 pb-24 sm:pb-28 lg:pb-32 px-6 lg:px-16 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #02205A 0%, #1A3DB5 35%, #3157FF 65%, #4A7AFF 100%)",
          }}
        >
          {/* Top-left dark depth accent */}
          <div
            className="absolute top-0 left-0 w-[500px] h-[300px] pointer-events-none opacity-40"
            style={{
              background: "radial-gradient(ellipse at top left, rgba(2,32,90,0.9) 0%, transparent 70%)",
            }}
          />
          {/* Centre glow for vibrancy */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[260px] pointer-events-none opacity-30 blur-[80px]"
            style={{
              background: "radial-gradient(circle, rgba(140,170,255,0.6) 0%, transparent 70%)",
            }}
          />
          {/* Bottom-right fade */}
          <div
            className="absolute bottom-0 right-0 w-[400px] h-[200px] pointer-events-none opacity-25"
            style={{
              background: "radial-gradient(ellipse at bottom right, rgba(74,122,255,0.8) 0%, transparent 70%)",
            }}
          />

          <div className="max-w-[1240px] mx-auto text-center relative z-10">
            {/* Main Headline — white for maximum contrast on blue gradient */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.15] mb-5">
              Let&apos;s talk about your{" "}  Business

            </h1>

            {/* Subtitle — slightly dimmed white for hierarchy */}
            <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal" style={{ color: "rgba(255,255,255,0.75)" }}>
              Have a question about BRH or want to explore how it can fit your workflow?
              <br className="hidden sm:block" />
              We&apos;re here to help.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FLOATING CONTACT DETAILS CARDS (Bridging dark and light sections) */}
        {/* Sourced from footer: CALL US and EMAIL US with Brand Blue styling */}
        {/* ========================================================================= */}
        <div className="relative max-w-[960px] mx-auto px-6 -mt-14 sm:-mt-16 z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 justify-center">
            {/* CALL US Card */}
            <a
              href="tel:+917976143735"
              className="bg-white rounded-[22px] p-6 sm:p-7 flex items-center gap-5 shadow-[0_12px_36px_rgba(2,32,90,0.08)] border border-blue-50 transition-all duration-300 hover:shadow-[0_16px_44px_rgba(49,87,255,0.18)] hover:border-[#3157FF]/30 hover:-translate-y-1 group"
            >
              <div className="w-[52px] h-[52px] rounded-2xl bg-[#EEF2FF] flex items-center justify-center flex-shrink-0 text-[#3157FF] group-hover:bg-[#3157FF] group-hover:text-white transition-colors duration-300">
                <svg
                  className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11.5px] font-bold tracking-[0.14em] text-gray-500 uppercase mb-1">
                  CALL US
                </span>
                <span className="text-[16px] sm:text-[17px] font-bold text-[#05031C] group-hover:text-[#3157FF] transition-colors truncate">
                  +91 - 7976143735
                </span>
              </div>
            </a>

            {/* EMAIL US Card */}
            <a
              href="mailto:brh@geloratech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-[22px] p-6 sm:p-7 flex items-center gap-5 shadow-[0_12px_36px_rgba(2,32,90,0.08)] border border-blue-50 transition-all duration-300 hover:shadow-[0_16px_44px_rgba(49,87,255,0.18)] hover:border-[#3157FF]/30 hover:-translate-y-1 group"
            >
              <div className="w-[52px] h-[52px] rounded-2xl bg-[#EEF2FF] flex items-center justify-center flex-shrink-0 text-[#3157FF] group-hover:bg-[#3157FF] group-hover:text-white transition-colors duration-300">
                <svg
                  className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11.5px] font-bold tracking-[0.14em] text-gray-500 uppercase mb-1">
                  EMAIL US
                </span>
                <span className="text-[16px] sm:text-[17px] font-bold text-[#05031C] group-hover:text-[#3157FF] transition-colors truncate">
                  brh@geloratech.com
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MAIN CONVERSATION & FORM SECTION */}
        {/* ========================================================================= */}
        <section className="pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-28 px-6 lg:px-16">
          <div className="max-w-[1240px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

              {/* Left Column: Heading & Introduction */}
              <div className="lg:col-span-5 flex flex-col items-start pt-2">
                {/* Badge with Standard Blue */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF2FF] text-[#3157FF] text-[12px] font-bold tracking-wide uppercase mb-5 border border-[#3157FF]/15">
                  <span>✦</span>
                  <span>START A CONVERSATION</span>
                </div>

                {/* Main Section Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#05031C] tracking-tight leading-[1.2] mb-5">
                  We&apos; Here to Help
                </h2>

                {/* Subtitle / Description */}
                <p className="text-[15px] sm:text-[16px] text-gray-600 leading-[1.7] max-w-[460px]">
                  Whether you need product information, technical support, or
                  simply want to share your feedback, reach out to us. Every
                  conversation helps us make BRH better.
                </p>
              </div>

              {/* Right Column: 3D Flip Contact Form Card */}
              <div className="lg:col-span-7">

                {/* 3D Perspective Wrapper */}
                <div
                  className="w-full relative"
                  style={{ perspective: "1400px" }}
                >
                  <div
                    className="w-full relative transition-transform duration-700 ease-out"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: isSuccess ? "rotateY(180deg)" : "rotateY(0deg)",
                    }}
                  >

                    {/* ───────────────────────────────────────────────────────────── */}
                    {/* FRONT FACE: CONTACT FORM */}
                    {/* ───────────────────────────────────────────────────────────── */}
                    <div
                      className="w-full bg-white rounded-[24px] p-6 sm:p-8 lg:p-10 shadow-[0_12px_40px_rgba(2,32,90,0.06)] border border-gray-100"
                      style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                      }}
                    >
                      <form onSubmit={handleSubmit} noValidate className="space-y-5">

                        {/* First Name & Last Name Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                          {/* First Name (required) */}
                          <div className="flex flex-col">
                            <div className="relative">
                              <input
                                type="text"
                                id="contact-firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                onKeyDown={blockNumberInput}
                                placeholder=" "
                                autoComplete="given-name"
                                className={`w-full h-[52px] px-4 rounded-[10px] bg-[#F1F4F9] text-[#05031C] text-[14px] font-medium outline-none transition-all duration-200 border ${fieldErrors.firstName
                                  ? "border-[#E53935] bg-red-50/20"
                                  : "border-transparent focus:border-[#3157FF] focus:bg-white focus:ring-2 focus:ring-[#3157FF]/15"
                                  }`}
                              />
                              {!formData.firstName && (
                                <label
                                  htmlFor="contact-firstName"
                                  className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-[14px] text-[#05031C]/50 font-normal select-none"
                                >
                                  First Name <span className="text-[#E53935] font-bold">*</span>
                                </label>
                              )}
                            </div>
                            {fieldErrors.firstName && (
                              <span className="text-[#E53935] text-[11.5px] font-medium mt-1.5 ml-1">
                                {fieldErrors.firstName}
                              </span>
                            )}
                          </div>

                          {/* Last Name  */}
                          <div className="flex flex-col">
                            <div className="relative">
                              <input
                                type="text"
                                id="contact-lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                onKeyDown={blockNumberInput}
                                placeholder=" "
                                autoComplete="family-name"
                                className={`w-full h-[52px] px-4 rounded-[10px] bg-[#F1F4F9] text-[#05031C] text-[14px] font-medium outline-none transition-all duration-200 border ${fieldErrors.lastName
                                  ? "border-[#E53935] bg-red-50/20"
                                  : "border-transparent focus:border-[#3157FF] focus:bg-white focus:ring-2 focus:ring-[#3157FF]/15"
                                  }`}
                              />
                              {!formData.lastName && (
                                <label
                                  htmlFor="contact-lastName"
                                  className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-[14px] text-[#05031C]/50 font-normal select-none"
                                >
                                  Last Name
                                </label>
                              )}
                            </div>
                            {fieldErrors.lastName && (
                              <span className="text-[#E53935] text-[11.5px] font-medium mt-1.5 ml-1">
                                {fieldErrors.lastName}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* 50% Email Address & 50% Phone Number */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                          {/* Email Address */}
                          <div className="flex flex-col">
                            <div className="relative">
                              <input
                                type="email"
                                id="contact-email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder=" "
                                className={`w-full h-[52px] px-4 rounded-[10px] bg-[#F1F4F9] text-[#05031C] text-[14px] font-medium outline-none transition-all duration-200 border ${fieldErrors.email
                                  ? "border-[#E53935] bg-red-50/20"
                                  : "border-transparent focus:border-[#3157FF] focus:bg-white focus:ring-2 focus:ring-[#3157FF]/15"
                                  }`}
                                autoComplete="email"
                              />
                              {!formData.email && (
                                <label
                                  htmlFor="contact-email"
                                  className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-[14px] text-[#05031C]/50 font-normal select-none"
                                >
                                  Email Address <span className="text-[#E53935] font-bold">*</span>
                                </label>
                              )}
                            </div>
                            {fieldErrors.email && (
                              <span className="text-[#E53935] text-[11.5px] font-medium mt-1.5 ml-1">
                                {fieldErrors.email}
                              </span>
                            )}
                          </div>

                          {/* Phone Number with Country Code Dropdown */}
                          <div className="flex flex-col">
                            <CountryPhoneInput
                              id="contact-phone"
                              value={formData.phone}
                              onChange={(nationalNumber, _full, country: CountryItem) => {
                                setFormData((prev) => ({ ...prev, phone: nationalNumber }));
                                setSelectedCountry(country.code);
                                setCountryDialCode(country.dialCode);
                                if (fieldErrors.phone) {
                                  setFieldErrors((prev) => {
                                    const n = { ...prev };
                                    delete n.phone;
                                    return n;
                                  });
                                }
                              }}
                              selectedCountry={selectedCountry}
                              onCountryChange={(country: CountryItem) => {
                                setSelectedCountry(country.code);
                                setCountryDialCode(country.dialCode);
                              }}
                              error={fieldErrors.phone}
                              variant="contact"
                              placeholderNode={
                                <>
                                  Phone Number <span className="cpi-required">*</span>
                                </>
                              }
                            />
                          </div>
                        </div>

                        {/* Tell Us About Your Project (Message Textarea) */}
                        <div className="flex flex-col">
                          <div className="relative">
                            <textarea
                              id="contact-message"
                              name="message"
                              rows={5}
                              value={formData.message}
                              onChange={handleInputChange}
                              placeholder=" "
                              className={`w-full p-4 rounded-[10px] bg-[#F1F4F9] text-[#05031C] text-[14px] font-medium outline-none transition-all duration-200 resize-y min-h-[130px] border ${fieldErrors.message
                                ? "border-[#E53935] bg-red-50/20"
                                : "border-transparent focus:border-[#3157FF] focus:bg-white focus:ring-2 focus:ring-[#3157FF]/15"
                                }`}
                            />
                            {!formData.message && (
                              <label
                                htmlFor="contact-message"
                                className="absolute left-4 top-4 pointer-events-none text-[14px] text-[#05031C]/50 font-normal select-none"
                              >
                                Tell us how we can help <span className="text-[#E53935] font-bold">*</span>
                              </label>
                            )}
                          </div>
                          {fieldErrors.message && (
                            <span className="text-[#E53935] text-[11.5px] font-medium mt-1.5 ml-1">
                              {fieldErrors.message}
                            </span>
                          )}
                        </div>

                        {/* Terms Agreement Checkbox */}
                        <div className="flex flex-col pt-1">
                          <label className="flex items-start gap-2.5 cursor-pointer select-none">
                            <input
                              type="checkbox"
                              name="agreed"
                              checked={formData.agreed}
                              onChange={handleInputChange}
                              className="mt-1 w-4 h-4 rounded border-gray-300 text-[#3157FF] focus:ring-[#3157FF] cursor-pointer"
                            />
                            <span className="text-[12.5px] sm:text-[13px] text-gray-700 leading-snug">
                              I agree to the {" "}
                              <Link href="/privacy" className="underline text-[#3157FF] hover:text-[#1E3AB8]">
                                Privacy Policy
                              </Link>{" "}
                              and{" "}
                              <Link href="/terms" className="underline text-[#3157FF] hover:text-[#1E3AB8]">
                                Terms &amp; Conditions
                              </Link>
                              .
                            </span>
                          </label>
                          {fieldErrors.agreed && (
                            <span className="text-[#E53935] text-[11.5px] font-medium mt-1.5 ml-1">
                              {fieldErrors.agreed}
                            </span>
                          )}
                        </div>

                        {/* Submit Button (Light grey when not agreed, Brand Blue when agreed) */}
                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={!formData.agreed || isSubmitting}
                            className={`w-full h-[52px] rounded-xl font-semibold text-[15px] tracking-wide flex items-center justify-center gap-2 transition-all duration-200 ${!formData.agreed
                              ? "bg-[#E5E7EB] text-[#8C95A6] cursor-not-allowed shadow-none"
                              : "bg-[#3157FF] hover:bg-[#2045E6] active:bg-[#1A38BF] text-white shadow-md shadow-[#3157FF]/25 hover:shadow-lg hover:shadow-[#3157FF]/35 hover:scale-[1.005] active:scale-[0.995] cursor-pointer"
                              } ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                          >
                            {isSubmitting ? (
                              <span className="inline-flex items-center gap-2">
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                Sending...
                              </span>
                            ) : (
                              <>
                                <span>Send Message</span>
                                <span className="text-lg leading-none">→</span>
                              </>
                            )}
                          </button>
                          {submitError && (
                            <span className="block text-[#E53935] text-[11.5px] font-medium mt-2 ml-1">
                              {submitError}
                            </span>
                          )}
                        </div>

                      </form>
                    </div>

                    {/* ───────────────────────────────────────────────────────────── */}
                    {/* BACK FACE: SUCCESS MESSAGE (FLIPPED 180 DEGREE) */}
                    {/* Exact same height and width, centered horizontally & vertically */}
                    {/* ───────────────────────────────────────────────────────────── */}
                    <div
                      className="absolute inset-0 w-full h-full bg-white rounded-[24px] p-6 sm:p-10 shadow-[0_12px_40px_rgba(49,87,255,0.12)] border border-[#3157FF]/20 flex flex-col items-center justify-center text-center overflow-hidden"
                      style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      {/* Decorative Background Glow in Brand Blue */}
                      <div
                        className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-30 pointer-events-none blur-3xl"
                        style={{
                          background: "radial-gradient(circle, #3157FF 0%, transparent 70%)",
                        }}
                      />
                      <div
                        className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full opacity-20 pointer-events-none blur-3xl"
                        style={{
                          background: "radial-gradient(circle, #3157FF 0%, transparent 70%)",
                        }}
                      />

                      {/* Animated Success Checkmark Badge in Brand Blue */}
                      <div className="relative mb-5 sm:mb-6">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#EEF2FF] border-2 border-[#3157FF]/25 flex items-center justify-center text-[#3157FF] shadow-xl shadow-[#3157FF]/20">
                          <svg
                            className="w-10 h-10 sm:w-12 sm:h-12 text-[#3157FF]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Success Title */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#05031C] tracking-tight mb-3">
                        Message Sent Successfully!
                      </h3>

                      {/* Success Description */}
                      <p className="text-[14px] sm:text-[15px] text-gray-600 max-w-[420px] leading-relaxed mb-6">
                        Thank you for reaching out to us. We have received your inquiry
                        and our team will review your project details and get back to you soon.
                      </p>

                      {/* Send Another Message Button */}
                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="inline-flex items-center gap-2 px-6 h-[44px] rounded-xl bg-[#EEF2FF] hover:bg-[#3157FF] text-[#3157FF] hover:text-white font-semibold text-[13.5px] tracking-wide transition-all duration-200 border border-[#3157FF]/30 hover:shadow-md hover:shadow-[#3157FF]/20 cursor-pointer"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <span>Send Another Message</span>
                      </button>

                    </div>

                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
