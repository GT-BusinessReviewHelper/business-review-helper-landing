"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useToast } from "../context/ToastContext";

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  recommended?: boolean;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant: "outline" | "solid";
  icon: "gift" | "star" | "crown";
}

const PRICING_PLANS: PricingPlan[] = [
  {
    id: "free",
    name: "FREE",
    price: "₹0",
    description: "Get started with the essential BRH experience at no cost.",
    features: [
      "Basic QR Scan Analytics",
      "Basic Rating Analytics",
      "Limited Review History",
    ],
    buttonText: "Get Started",
    buttonVariant: "outline",
    icon: "gift",
  },
  {
    id: "standard",
    name: "STANDARD",
    price: "₹599",
    period: "/ Year",
    recommended: true,
    description: "Unlock more tools and settings to manage your customer review experience.",
    features: [
      "Advanced QR Scan Analytics",
      "Advanced Rating Analytics",
      "Full Review History",
    ],
    buttonText: "Choose Standard",
    buttonVariant: "solid",
    icon: "star",
  },
  {
    id: "pro",
    name: "PRO",
    price: "₹999",
    period: "/ Year",
    description: "Get the complete BRH experience with advanced features and settings.",
    features: [
      "Review Pool Management",
      "Custom Review Tone",
      "Business Profile Customization",
    ],
    buttonText: "Choose Pro",
    buttonVariant: "outline",
    icon: "crown",
  },
];

interface ComparisonRow {
  feature: string;
  free: string | boolean;
  standard: string | boolean;
  pro: string | boolean;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: "QR Scan Analytics",
    free: "Basic",
    standard: "Advanced",
    pro: "Advanced",
  },
  {
    feature: "Rating Analytics",
    free: "Basic",
    standard: "Advanced",
    pro: "Advanced",
  },
  {
    feature: "Location-wise Analytics",
    free: false,
    standard: true,
    pro: true,
  },
  {
    feature: "Review History",
    free: "Limited",
    standard: "Full",
    pro: "Full",
  },
  {
    feature: "Google Review Click Tracking",
    free: false,
    standard: true,
    pro: true,
  },
  {
    feature: "Review Copy Tracking",
    free: false,
    standard: true,
    pro: true,
  },
  {
    feature: "Review Pool Management",
    free: false,
    standard: true,
    pro: true,
  },
  {
    feature: "Custom Review Tone",
    free: false,
    standard: false,
    pro: true,
  },
  {
    feature: "Business Profile Customization",
    free: false,
    standard: false,
    pro: true,
  },
];

export default function PricingPage() {
  const { showToast } = useToast();

  const handlePlanSelect = (planName: string) => {
    showToast("coming soon!");
  };

  const renderIcon = (type: "gift" | "star" | "crown") => {
    if (type === "gift") {
      return (
        <svg
          className="w-6 h-6 text-[#3157FF]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 12 20 22 4 22 4 12" />
          <rect x="2" y="7" width="20" height="5" rx="1" />
          <line x1="12" y1="22" x2="12" y2="7" />
          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
        </svg>
      );
    }
    if (type === "star") {
      return (
        <svg
          className="w-6 h-6 text-[#3157FF]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    }
    return (
      <svg
        className="w-6 h-6 text-[#3157FF]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" />
        <circle cx="12" cy="19" r="2" />
      </svg>
    );
  };

  const renderCellContent = (val: string | boolean) => {
    if (typeof val === "boolean") {
      if (val) {
        return (
          <div className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] rounded-full bg-[#50AB84] flex items-center justify-center text-white mx-auto shadow-xs">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        );
      }
      return <span className="font-semibold text-[14px] text-[#05031C]">-</span>;
    }
    return (
      <span className="font-normal text-[13px] sm:text-[14px] text-[#05031C]">
        {val}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-[#F5F8FF] text-[#05031C] font-sans selection:bg-[#3157FF] selection:text-white flex flex-col justify-between">
      {/* 1. Header Navigation */}
      <Header />

      {/* 2. Main Content */}
      <main className="flex-1 pb-12 sm:pb-16 lg:pb-45">
        {/* ========================================================================= */}
        {/* HERO TITLE & SUBTITLE */}
        {/* ========================================================================= */}
        <section className="pt-5 sm:pt-7 lg:pt-8 pb-3 sm:pb-4 text-center px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <h1
              className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight leading-[1.2] text-[#05031C]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Choose the Plan
              <br className="hidden sm:block" /> That Works for You
            </h1>
            <p
              className="text-[13px] sm:text-[14.5px] text-gray-700 font-normal mt-2 max-w-[480px] mx-auto leading-[1.4]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Start with BRH for free and upgrade when you need more. Choose the
              plan that fits your business.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PRICING CARDS */}
        {/* ========================================================================= */}
        <section className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5 xl:gap-6 items-stretch justify-center">
            {PRICING_PLANS.map((plan) => {
              const isRecommended = plan.recommended;

              return (
                <div
                  key={plan.id}
                  className={`relative bg-white rounded-[32px] sm:rounded-[36px] p-5 sm:p-6 lg:p-6 flex flex-col justify-between transition-all duration-300 ${isRecommended
                    ? "border-[3px] lg:border-[4px] border-[#3157FF] shadow-[0px_6px_20px_rgba(49,87,255,0.2)] md:col-span-2 lg:col-span-1 max-w-[390px] lg:max-w-none mx-auto w-full"
                    : "border border-[rgba(2,32,90,0.13)] shadow-xs hover:shadow-md max-w-[390px] lg:max-w-none mx-auto w-full"
                    }`}
                >
                  {/* Recommended Pill Badge */}
                  {isRecommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#3157FF] text-white px-3.5 py-0.5 rounded-full flex items-center gap-1 shadow-md z-10">
                      <svg className="w-3 h-3 fill-current text-white" viewBox="0 0 24 24">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase">
                        Recommended
                      </span>
                    </div>
                  )}

                  {/* Card Content Top */}
                  <div>
                    {/* Top Circle Icon */}
                    <div className="w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 bg-[rgba(187,209,252,0.13)]">
                      {renderIcon(plan.icon)}
                    </div>

                    {/* Plan Name */}
                    <h2
                      className="font-semibold text-[22px] sm:text-[24px] text-[#05031C] text-center tracking-tight leading-tight"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {plan.name}
                    </h2>

                    {/* Price */}
                    <div className="text-center mt-1 sm:mt-1.5">
                      <span
                        className="font-semibold text-[30px] sm:text-[34px] text-[#3157FF] leading-none"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {plan.price}
                      </span>
                    </div>

                    {/* Billing Interval / Spacer */}
                    <div className="h-[18px] flex items-center justify-center mt-0.5">
                      {plan.period ? (
                        <span className="text-[12px] font-normal text-[#05031C]/70">
                          {plan.period}
                        </span>
                      ) : null}
                    </div>

                    {/* Top Divider Line */}
                    <div className="w-full h-[1px] bg-[rgba(0,0,0,0.12)] my-3 sm:my-3.5" />

                    {/* Description */}
                    <p className="text-[12.5px] sm:text-[13px] text-gray-800 font-normal text-center px-1 min-h-[34px] flex items-center justify-center leading-snug">
                      {plan.description}
                    </p>

                    {/* Bottom Divider Line */}
                    <div className="w-full h-[1px] bg-[rgba(0,0,0,0.12)] my-3 sm:my-3.5" />

                    {/* Features List */}
                    <div className="flex flex-col gap-2.5 mb-5 sm:mb-6">
                      {plan.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <div className="w-[18px] h-[18px] rounded-full bg-[#3157FF] flex items-center justify-center flex-shrink-0 text-white shadow-xs">
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeWidth={3}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="text-[12.5px] sm:text-[13px] text-[#05031C] font-normal leading-tight">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Button */}
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => handlePlanSelect(plan.name)}
                      className={`w-full py-2.5 sm:py-3 rounded-[50px] font-semibold text-[14.5px] sm:text-[15.5px] text-center transition-all duration-200 cursor-pointer active:scale-[0.98] ${plan.buttonVariant === "solid"
                        ? "bg-[#3157FF] text-white hover:bg-blue-600 shadow-sm hover:shadow-md"
                        : "border border-[#05031C] text-[#05031C] bg-white hover:bg-[#05031C] hover:text-white"
                        }`}
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {plan.buttonText}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* All Paid Plans Note */}
          <div className="flex items-center justify-center gap-1.5 mt-5 sm:mt-6 text-[12px] sm:text-[13px] text-[#05031C]/70">
            <svg
              className="w-3.5 h-3.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <span>All paid plans are billed anually.</span>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* COMPARE PLANS (TABLE) */}
        {/* ========================================================================= */}
        <section className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-20">
          <div className="text-center mb-6 sm:mb-8">
            <h2
              className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#05031C] tracking-tight leading-tight"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Compare Plans
            </h2>
            <p
              className="text-[13px] sm:text-[14.5px] text-gray-700 font-normal mt-2"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              See what’s included with each BRH plan.
            </p>
          </div>

          {/* Table Container Card */}
          <div className="bg-white border border-[rgba(2,32,90,0.13)] rounded-[24px] sm:rounded-[36px] overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-[rgba(2,32,90,0.13)]">
                    <th className="w-[34%] py-4 sm:py-5 px-5 sm:px-8 text-[15px] sm:text-[16px] font-semibold text-[#05031C] border-r border-[rgba(2,32,90,0.13)]">
                      Feature
                    </th>
                    <th className="w-[22%] py-4 sm:py-5 px-4 text-[15px] sm:text-[16px] font-semibold text-[#05031C] text-center border-r border-[rgba(2,32,90,0.13)]">
                      Free
                    </th>
                    <th className="w-[22%] py-4 sm:py-5 px-4 text-[15px] sm:text-[16px] font-semibold text-[#05031C] text-center border-r border-[rgba(2,32,90,0.13)]">
                      Standard
                    </th>
                    <th className="w-[22%] py-4 sm:py-5 px-4 text-[15px] sm:text-[16px] font-semibold text-[#05031C] text-center">
                      Pro
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_DATA.map((row, index) => {
                    const isLast = index === COMPARISON_DATA.length - 1;

                    return (
                      <tr
                        key={row.feature}
                        className={`transition-colors hover:bg-slate-50/50 ${!isLast ? "border-b border-[rgba(2,32,90,0.13)]" : ""
                          }`}
                      >
                        <td className="py-3 sm:py-3.5 px-5 sm:px-8 text-[13px] sm:text-[14px] font-normal text-[#05031C] border-r border-[rgba(2,32,90,0.13)]">
                          {row.feature}
                        </td>
                        <td className="py-3 sm:py-3.5 px-4 text-center border-r border-[rgba(2,32,90,0.13)]">
                          {renderCellContent(row.free)}
                        </td>
                        <td className="py-3 sm:py-3.5 px-4 text-center border-r border-[rgba(2,32,90,0.13)]">
                          {renderCellContent(row.standard)}
                        </td>
                        <td className="py-3 sm:py-3.5 px-4 text-center">
                          {renderCellContent(row.pro)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
