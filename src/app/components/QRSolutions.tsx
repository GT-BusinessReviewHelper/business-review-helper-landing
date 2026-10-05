"use client";

import React from "react";
import Image from "next/image";

export default function QRSolutions() {
  return (
    <section id="qr-solutions" className="pt-6 sm:pt-7 lg:pt-8 pb-10 sm:pb-12 lg:pb-16 bg-white relative scroll-mt-20">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8 lg:mb-9">
          <div className="relative inline-flex flex-col items-center">
            {/* Curve Arrow hugging the left of title & subtitle — desktop only */}
            <div className="hidden lg:block absolute -left-11 sm:-left-10 top-8.5 bottom-1 w-8 sm:w-10 flex-shrink-0 pointer-events-none">
              <Image
                src="/Assest/curveArrow.png"
                alt="Curve Arrow"
                fill
                className="object-contain object-left-center"
              />
            </div>

            {/* Title row */}
            <div className="flex items-center justify-center gap-2">
              <h2
                className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-center"
                style={{ color: "#05031C" }}
              >
                QR Solutions
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-[14px] sm:text-[15.5px] text-gray-600 mt-2 sm:mt-3 font-normal text-center">
              One Dynamic QR. Update it anytime.
            </p>
          </div>
        </div>

        {/* 2 Big Comparison Cards + Center Chain Connector */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-6 lg:gap-5 xl:gap-8">

          {/* Left Card: Dynamic QR */}
          <div className="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[430px] sm:aspect-[1.38/1] p-7 sm:p-8 md:p-9 lg:p-10 select-none flex flex-col justify-between">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/Assest/dynamicQRBg.png"
                alt="Dynamic QR Background"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="relative z-10 max-w-[310px] sm:max-w-[330px]">
              <h3
                className="text-xl sm:text-[24px] lg:text-[28px] font-bold mb-2.5 tracking-tight pt-6"
                style={{ color: "#3157FF" }}
              >
                Dynamic QR
              </h3>
              <p className="text-[12px] text-[#4B5563] leading-[1.6] mb-4 sm:mb-5 px-1">
                Create your QR code once and update its review destination whenever needed — without replacing the QR code.
              </p>

              {/* Features list */}
              <div className="flex flex-col gap-3 sm:gap-3.5">
                {[
                  "Update destination anytime",
                  "Keep the same QR code",
                  "Track scan activity",
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-3">
                    <div className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] rounded-full bg-[#3157FF] flex items-center justify-center flex-shrink-0 text-white shadow-xs">
                      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[13px] sm:text-[14px] font-semibold text-[#111827]">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3D Illustration — dynamicQR.png (positioned on top of the round pedestal) */}
            <div className="absolute bottom-[75px] md:bottom-[90px] lg:bottom-[70px] right-[35px] sm:right-[70px] md:right-[120px] lg:right-[30px] w-[85px] h-[80px] sm:w-[125px] sm:h-[120px] lg:w-[160px] lg:h-[160px] pointer-events-none">
              <Image
                src="/Assest/dynamicQR.png"
                alt="Dynamic QR Illustration"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* Center Chain Connector */}
          <div className="flex flex-col items-center justify-center text-center my-4 lg:my-0 px-2 flex-shrink-0">
            {/* Mobile / Tablet vertical arrows (Pointing UP and DOWN) */}
            <div className="flex lg:hidden flex-col items-center justify-center gap-2 mb-2">
              {/* Up arrow pointing up to Dynamic QR */}
              <div className="relative w-6 h-6 rotate-90 flex-shrink-0">
                <Image src="/Assest/leftArrow.png" alt="Up Arrow" fill className="object-contain" />
              </div>
              {/* Chain icon */}
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image src="/Assest/sameChain.png" alt="Chain Link" fill className="object-contain drop-shadow-sm" />
              </div>
              {/* Down arrow pointing down to Branded Frame */}
              <div className="relative w-6 h-6 rotate-90 flex-shrink-0">
                <Image src="/Assest/rightArrow.png" alt="Down Arrow" fill className="object-contain" />
              </div>
            </div>

            {/* Desktop horizontal arrows (Left & Right) */}
            <div className="hidden lg:flex items-center justify-center gap-2.5 sm:gap-3 mb-2.5">
              {/* Left arrow */}
              <div className="relative w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0">
                <Image src="/Assest/leftArrow.png" alt="Left Arrow" fill className="object-contain" />
              </div>
              {/* Chain icon */}
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                <Image src="/Assest/sameChain.png" alt="Chain Link" fill className="object-contain drop-shadow-sm" />
              </div>
              {/* Right arrow */}
              <div className="relative w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0">
                <Image src="/Assest/rightArrow.png" alt="Right Arrow" fill className="object-contain" />
              </div>
            </div>

            <span className="font-bold text-[14.5px] sm:text-[15.5px]" style={{ color: "#3157FF" }}>
              Same QR Code
            </span>
            <span className="text-[12px] sm:text-[13px] font-semibold text-gray-700 max-w-[115px] leading-4 text-center mt-1">
              Displayed as a branded frame
            </span>
          </div>

          {/* Right Card: Branded Frame */}
          <div className="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[490px]  sm:aspect-[1.38/1] p-7 sm:p-8 md:p-9  select-none flex flex-col justify-between">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/Assest/brandedQRBg.png"
                alt="Branded Frame Background"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="relative z-10 max-w-[310px] sm:max-w-[330px]">
              <h3
                className="text-xl sm:text-[24px] lg:text-[28px] font-bold mb-2.5 tracking-tight pt-12"
                style={{ color: "#FFA008" }}
              >
                Branded Frame
              </h3>
              <p className="text-[12px]  text-[#4B5563] leading-[1.6] mb-4 sm:mb-5 px-2">
                Use your Dynamic QR in a professional, branded frame that customers can easily scan.
              </p>

              {/* Features list */}
              <div className="flex flex-col gap-3 sm:gap-3.5">
                {[
                  "Add your logo & branding",
                  "Designed for easy placement at your business",
                  "Easy for customers to scan",
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-3">
                    <div className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] rounded-full bg-[#FFA008] flex items-center justify-center flex-shrink-0 text-white shadow-xs">
                      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[13px] sm:text-[14px] font-semibold text-[#111827]">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3D Illustration — brandedQR.png (positioned on top of the orange pedestal) */}
            <div className="absolute bottom-[116px] sm:bottom-[112px] md:bottom-[135px] lg:bottom-[110px] right-[35px] sm:right-[90px] md:right-[170px] lg:right-[40px] w-[50px] h-[70px] sm:w-[70px] sm:h-[100px] lg:w-[110px] lg:h-[110px] pointer-events-none">
              <Image
                src="/Assest/brandedQR.png"
                alt="Branded Frame Illustration"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
