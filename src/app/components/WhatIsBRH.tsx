"use client";

import React from "react";
import Image from "next/image";

export default function WhatIsBRH() {
  return (
    <section className="relative pt-0 pb-2 bg-white overflow-visible">
      {/* 1. Curve Wave Layer (Edge-to-edge full width background) — Laptop/Desktop only */}
      <div className="hidden lg:block w-full relative z-0 pointer-events-none overflow-hidden">
        <div className="relative w-full h-[120px] sm:h-[180px] md:h-[240px] lg:h-[320px]">
          <div className="absolute top-38 inset-0  z-0">
            <Image
              src="/Assest/blueCurve.png"
              alt="Blue Curve"
              fill
              className="object-fill w-full h-full"
              priority
            />
          </div>
          <div className="absolute inset-0 z-10">
            <Image
              src="/Assest/blackCurve.png"
              alt="Black Curve"
              fill
              className="object-fill w-full h-full"
              priority
            />
          </div>
        </div>
      </div>

      {/* 2. Main "What is BRH?" Card (Overlaps curve on desktop, clean margin on mobile/tablet) */}
      <div className="max-w-[1310px] mx-auto px-4 sm:px-6 lg:px-0 relative z-20 mt-4 sm:mt-6 lg:-mt-44">
        <div
          className="w-full rounded-[28px] sm:rounded-[40px] md:rounded-[60px] lg:rounded-[80px] p-4 sm:p-8 lg:p-12 border relative bg-[#F7FAFE]"
          style={{
            borderColor: "rgba(2, 32, 90, 0.13)",
            boxShadow: "0px 6px 32px rgba(2, 32, 90, 0.15)",
          }}
        >
          {/* Decorative Floating Accent Dots */}
          {/* Top-left Blue Dot */}
          <div
            className="absolute top-8 left-10 w-[20px] h-[20px] rounded-full"
            style={{ backgroundColor: "#79B7FA" }}
          />
          {/* Bottom-left Lavender Dot */}
          <div
            className="absolute bottom-8 left-14 w-[20px] h-[20px] rounded-full"
            style={{ backgroundColor: "rgba(123, 14, 255, 0.18)" }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Circle Logo Showcase (Figma: Outer 416px, Inner 322px) */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              {/* Outer soft circle ring */}
              <div
                className="w-[220px] h-[220px] sm:w-[290px] sm:h-[290px] lg:w-[380px] lg:h-[380px] rounded-full flex items-center justify-center relative p-4 flex-shrink-0"
                style={{ backgroundColor: "rgba(187, 209, 252, 0.15)" }}
              >
                {/* Inner white circle badge */}
                <div
                  className="w-[170px] h-[170px] sm:w-[240px] sm:h-[240px] lg:w-[320px] lg:h-[320px] rounded-full flex flex-col items-center justify-center bg-white shadow-[0px_0px_30px_3px_rgba(2,32,90,0.13)] p-4 sm:p-6 text-center"
                >
                  <div className="relative w-[100px] h-[78px] sm:w-[97px] sm:h-[108px] mb-2 flex-shrink-0">
                    <Image
                      src="/Assest/logo.png"
                      alt="BRH Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <span
                    className="font-semibold text-1xl sm:text-[26px] leading-tight tracking-tight"
                    style={{ color: "#05031C", fontFamily: "Inter, sans-serif" }}
                  >
                    BRH
                  </span>
                  <span
                    className="text-[11px]  font-normal tracking-wide text-gray-800 mt-1 whitespace-nowrap"
                    style={{ color: "#05031C", fontFamily: "Inter, sans-serif" }}
                  >
                    BUSINESS REVIEW HELPER
                  </span>
                </div>
              </div>

              {/* Right connector circle ring (Figma Ellipse 8) */}
              <div
                className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block w-[33px] h-[33px] rounded-full translate-x-4"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "4px solid #D7E6FE",
                }}
              />
            </div>

            {/* Right Content & 3 Feature Columns */}
            <div className="lg:col-span-7 flex flex-col pl-0 lg:pl-4">
              <h2
                className="text-2xl sm:text-3xl lg:text-[42px] font-bold tracking-tight leading-tight mb-2 text-center lg:text-left"
                style={{ color: "#05031C", fontFamily: "Inter, sans-serif" }}
              >
                What is BRH?
              </h2>
              <p
                className="text-[13px] sm:text-[15px] lg:text-[15px] leading-[1.6] mb-4 text-[#000000] text-center lg:text-left max-w-[565px]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                BRH (Business Review Helper) is a QR-based platform that helps
                businesses make it easier for customers to share their experience
                and leave reviews on the platforms that matter.
              </p>

              {/* 3 Feature Columns with vertical divider lines (Figma Line 3 & 4) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-3 sm:divide-x divide-blue-200/60 pt-5">
                {/* Column 1: QR Based */}
                <div className="flex flex-col items-center text-center px-2">
                  <div
                    className="w-[60px] h-[62px] sm:w-[93px] sm:h-[85px] rounded-[25px] flex items-center justify-center mb-4 shadow-xs"
                    style={{ backgroundColor: "#EFF5FE" }}
                  >
                    <div className="relative w-8 h-8">
                      <Image
                        src="/Assest/qrScanIcon.png"
                        alt="QR Based"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3
                    className="font-bold text-[16px] mb-1.5"
                    style={{ color: "#05031C" }}
                  >
                    QR Based
                  </h3>
                  <p className="text-[13px] text-gray-700 leading-snug max-w-[140px]">
                    Simple scan to start the review journey.
                  </p>
                </div>

                {/* Column 2: AI Assisted */}
                <div className="flex flex-col items-center text-center px-2 sm:pl-4">
                  <div
                    className="w-[60px] h-[62px] sm:w-[93px] sm:h-[85px] rounded-[25px] flex items-center justify-center mb-4 shadow-xs"
                    style={{ backgroundColor: "#EFF5FE" }}
                  >
                    <div className="relative w-8 h-8">
                      <Image
                        src="/Assest/sparkleDoubledIcon.png"
                        alt="AI Assisted"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3
                    className="font-bold text-[16px] mb-1.5"
                    style={{ color: "#05031C" }}
                  >
                    AI Assisted
                  </h3>
                  <p className="text-[13px] text-gray-700 leading-snug max-w-[170px]">
                    Help customers express their experience quickly.
                  </p>
                </div>

                {/* Column 3: More Reviews */}
                <div className="flex flex-col items-center text-center px-2 sm:pl-4">
                  <div
                    className="w-[60px] h-[62px] sm:w-[93px] sm:h-[85px] rounded-[25px] flex items-center justify-center mb-4 shadow-xs"
                    style={{ backgroundColor: "#EFF5FE" }}
                  >
                    <svg
                      className="w-8 h-8 text-[#3157FF]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 9.5l-2.47 1.3.47-2.75-2-1.95 2.76-.4L14 5.2l1.24 2.5 2.76.4-2 1.95.47 2.75L14 11.5z" />
                    </svg>
                  </div>
                  <h3
                    className="font-bold text-[16px] mb-1.5"
                    style={{ color: "#05031C" }}
                  >
                    More Reviews
                  </h3>
                  <p className="text-[13px] text-gray-700 leading-snug max-w-[180px]">
                    Make it easier to collect genuine feedback and grow your
                    business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
