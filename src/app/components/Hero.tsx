"use client";

import Image from "next/image";
import { useToast } from "../context/ToastContext";

export default function Hero() {
  const { showToast } = useToast();

  return (
    <section id="hero" className="relative overflow-hidden pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-10 lg:pb-12 bg-white scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center">

          {/* ── Left Column ── */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start z-10 text-center lg:text-left py-2">

            {/* Pill Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full mb-5 border shadow-xs"
              style={{ backgroundColor: "#EEF2FF", borderColor: "rgba(49, 87, 255, 0.15)" }}
            >
              <div className="relative w-4 h-4 flex-shrink-0">
                <Image src="/Assest/signleSparkle.png" alt="Sparkle" fill className="object-contain" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase" style={{ color: "#3157FF" }}>
                QR-POWERED REVIEW SOLUTION
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-[28px] sm:text-[34px] lg:text-[44px] font-bold tracking-tight leading-[1.12] mb-3"
              style={{ color: "#05031C", fontFamily: "Inter, sans-serif" }}
            >
              Turn Every Customer<br />
              Experience Into a<br />
              <span style={{ color: "#3157FF" }}>Review</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[13px] sm:text-[15px] leading-[1.65] mb-5 text-[#000000] max-w-[430px]" style={{ fontFamily: "Inter, sans-serif" }}>
              BRH helps businesses collect genuine customer feedback through simple QR-powered review journeys.
            </p>

            {/* CTA Button */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-6">
              <button
                type="button"
                onClick={() => showToast("Coming Soon")}
                className="inline-flex items-center justify-center gap-3 px-6 sm:px-7 h-[50px] sm:h-[54px] rounded-[20px] font-semibold text-[15px] sm:text-[16px] text-white shadow-md transition duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                style={{ backgroundColor: "#05031C", fontFamily: "Inter, sans-serif" }}
              >
                <span>Get Started</span>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {/* 3 Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-[540px]">
              {[
                { icon: "/Assest/gravityIcon.png", alt: "Lightning", color: "#05031C", label: "Easy to Use", sub: "Simple for everyone" },
                { icon: "/Assest/QrPowerdIcon.png", alt: "QR Powered", color: "#3157FF", label: "QR Powered", sub: "Smart & seamless" },
                { icon: "/Assest/sparkleFilledIcon.png", alt: "AI Assisted", color: "#50AB84", label: "AI Assisted", sub: "Smarter feedback" },
              ].map((pill) => (
                <div key={pill.label} className="flex items-center gap-3 px-3 py-3 rounded-[18px] border bg-white shadow-xs" style={{ borderColor: "rgba(2, 32, 90, 0.13)" }}>
                  <div className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: pill.color }}>
                    <div className="relative w-5 h-5">
                      <Image src={pill.icon} alt={pill.alt} fill className="object-contain" />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-[14px] sm:text-[15px] leading-tight" style={{ color: "#05031C" }}>{pill.label}</div>
                    <div className="text-[11px] sm:text-[12px] text-gray-600 mt-0.5 whitespace-nowrap">{pill.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column Graphic ── */}
          <div className="lg:col-span-6 relative flex items-center justify-center mt-4 lg:mt-0">
            {/* Cloud Backdrop */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-110 lg:scale-125 z-0">
              <div className="relative w-[400px] h-[360px] sm:w-[500px] sm:h-[450px] opacity-90">
                <Image src="/Assest/cloud.png" alt="Cloud Background" fill className="object-contain" priority />
              </div>
            </div>

            {/* Foreground 3D Hero Artwork */}
            <div className="relative z-10 w-full max-w-[360px] sm:max-w-[480px] lg:max-w-[620px] aspect-[4/3] lg:h-[460px] flex items-center justify-center">
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
