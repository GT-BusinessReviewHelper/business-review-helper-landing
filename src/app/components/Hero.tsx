"use client";

import Image from "next/image";
import { useToast } from "../context/ToastContext";

export default function Hero() {
  const { showToast } = useToast();

  return (
    <section id="hero" className="relative overflow-visible pt-3 pb-0 lg:pt-5 lg:pb-10 bg-white scroll-mt-20">
      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-6 flex flex-col items-start z-10 py-1">
            {/* Pill Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border shadow-xs"
              style={{
                backgroundColor: "#EEF2FF",
                borderColor: "rgba(49, 87, 255, 0.15)",
              }}
            >
              <div className="relative w-4 h-4 flex-shrink-0">
                <Image
                  src="/Assest/signleSparkle.png"
                  alt="Sparkle"
                  fill
                  className="object-contain"
                />
              </div>
              <span
                className="text-[11px] font-semibold tracking-wider uppercase"
                style={{ color: "#3157FF", fontFamily: "Inter, sans-serif" }}
              >
                QR-POWERED REVIEW SOLUTION
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-[30px] sm:text-[36px] lg:text-[44px] font-bold tracking-tight leading-[1.12] mb-3"
              style={{ color: "#05031C", fontFamily: "Inter, sans-serif" }}
            >
              Turn Every Customer
              <br />
              Experience Into a
              <br />
              <span style={{ color: "#3157FF" }}>Review</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-[13px] sm:text-[15px] leading-[22px] mb-4 text-[#000000] max-w-[430px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              BRH helps businesses collect genuine customer feedback through
              simple QR-powered review journeys.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-7">
              {/* Get Started Button */}
              <button
                type="button"
                onClick={() => showToast("Coming Soon")}
                className="inline-flex items-center justify-center gap-3 px-7 h-[54px] rounded-[20px] font-semibold text-[16px] text-white shadow-md transition duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                style={{
                  backgroundColor: "#05031C",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <span>Get Started</span>
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>

            {/* 3 Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-[620px]">
              {/* Pill 1: Easy to Use */}
              <div
                className="flex items-center gap-3 px-3.5 py-3 rounded-[20px] border bg-white shadow-xs"
                style={{ borderColor: "rgba(2, 32, 90, 0.13)" }}
              >
                <div
                  className="w-[42px] h-[42px] rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#05031C" }}
                >
                  <div className="relative w-5 h-5">
                    <Image
                      src="/Assest/gravityIcon.png"
                      alt="Lightning"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <div
                    className="font-semibold text-[16px] leading-tight"
                    style={{ color: "#05031C" }}
                  >
                    Easy to Use
                  </div>
                  <div className="text-[12px] text-gray-600 mt-0.5 whitespace-nowrap">
                    Simple for everyone
                  </div>
                </div>
              </div>

              {/* Pill 2: QR Powered */}
              <div
                className="flex items-center gap-3 px-3.5 py-3 rounded-[20px] border bg-white shadow-xs"
                style={{ borderColor: "rgba(2, 32, 90, 0.13)" }}
              >
                <div
                  className="w-[42px] h-[42px] rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#3157FF" }}
                >
                  <div className="relative w-5 h-5">
                    <Image
                      src="/Assest/QrPowerdIcon.png"
                      alt="QR Powered"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <div
                    className="font-semibold text-[16px] leading-tight"
                    style={{ color: "#05031C" }}
                  >
                    QR Powered
                  </div>
                  <div className="text-[12px] text-gray-600 mt-0.5 whitespace-nowrap">
                    Smart & seamless
                  </div>
                </div>
              </div>

              {/* Pill 3: AI Assisted */}
              <div
                className="flex items-center gap-3 px-3.5 py-3 rounded-[20px] border bg-white shadow-xs"
                style={{ borderColor: "rgba(2, 32, 90, 0.13)" }}
              >
                <div
                  className="w-[42px] h-[42px] rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#50AB84" }}
                >
                  <div className="relative w-5 h-5">
                    <Image
                      src="/Assest/sparkleFilledIcon.png"
                      alt="AI Assisted"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <div
                    className="font-semibold text-[16px] leading-tight"
                    style={{ color: "#05031C" }}
                  >
                    AI Assisted
                  </div>
                  <div className="text-[12px] text-gray-600 mt-0.5 whitespace-nowrap">
                    Smarter feedback
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Graphic with Cloud Image Backdrop */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Cloud Backdrop */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-110 lg:scale-125 z-0">
              <div className="relative w-[550px] h-[500px] opacity-90">
                <Image
                  src="/Assest/cloud.png"
                  alt="Cloud Background"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Foreground 3D Hero Artwork */}
            <div className="relative z-10 w-full max-w-[620px] aspect-[4/3] lg:h-[480px] flex items-center justify-center">
              <Image
                src="/Assest/heroRight.png"
                alt="BRH QR Review Experience Demo"
                fill
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
