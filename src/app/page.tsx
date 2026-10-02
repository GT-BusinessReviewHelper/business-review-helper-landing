"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatIsBRH from "./components/WhatIsBRH";
import QRSolutions from "./components/QRSolutions";
import WhoItsFor from "./components/WhoItsFor";
import Footer from "./components/Footer";

export default function Home() {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#05031C] font-sans selection:bg-[#3157FF] selection:text-white">
      {/* 1. Header Component */}
      <Header />

      {/* 2. Hero Section Component */}
      <Hero />

      {/* 3. What is BRH? Component */}
      <WhatIsBRH />

      {/* ========================================================================= */}
      {/* 4. HOW IT WORKS SECTION */}
      {/* ========================================================================= */}
      <section id="how-it-works" className="pt-15 lg:pt-24 pb-1 relative overflow-hidden bg-white">
        {/* waterCurve background — positioned at lower portion behind the icons */}
        <div className="absolute left-0 right-0 bottom-0 pointer-events-none z-0" style={{ top: "28%" }}>
          <Image
            src="/Assest/waterCurve.png"
            alt="Water Curve Background"
            fill
            className="object-fill object-top"
            priority
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <h2
              className="text-2xl lg:text-[42px] font-bold tracking-tight mb-3.5"
              style={{ color: "#05031C" }}
            >
              How It Works
            </h2>
            <p className="text-base sm:text-lg lg:text-[18px] text-gray-700">
              From QR scan to review — a simple journey for your customers.
            </p>
          </div>

          {/* 5 Steps Grid with Connecting Visual Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center group">
              <span
                className="font-bold text-[32px] mb-4"
                style={{ color: "#3157FF" }}
              >
                01
              </span>
              <div className="relative w-full h-[200px] mb-6 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/Assest/QR1.png"
                  alt="Step 01 - Create QR"
                  fill
                  className="object-contain"
                />
              </div>
              <h3
                className="font-semibold text-[19px] mb-2"
                style={{ color: "#05031C" }}
              >
                Create
              </h3>
              <p className="text-[15px] text-gray-600 leading-[1.4] max-w-[220px]">
                Generate your unique QR code from the BRH dashboard.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center group lg:mt-8">
              <span
                className="font-bold text-[32px] mb-4"
                style={{ color: "#3157FF" }}
              >
                02
              </span>
              <div className="relative w-full h-[200px] mb-6 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/Assest/QR2.png"
                  alt="Step 02 - Place QR"
                  fill
                  className="object-contain"
                />
              </div>
              <h3
                className="font-semibold text-[19px] mb-2"
                style={{ color: "#05031C" }}
              >
                Place
              </h3>
              <p className="text-[15px] text-gray-600 leading-[1.4] max-w-[220px]">
                Display the QR at your counter, table, entrance or any suitable
                location.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center group">
              <span
                className="font-bold text-[32px] mb-4"
                style={{ color: "#3157FF" }}
              >
                03
              </span>
              <div className="relative w-full h-[200px] mb-6 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/Assest/QR3.png"
                  alt="Step 03 - Scan QR"
                  fill
                  className="object-contain"
                />
              </div>
              <h3
                className="font-semibold text-[19px] mb-2"
                style={{ color: "#05031C" }}
              >
                Scan
              </h3>
              <p className="text-[15px] text-gray-600 leading-[1.4] max-w-[220px]">
                Customers scan the QR code after their experience.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center group lg:mt-8">
              <span
                className="font-bold text-[32px] mb-4"
                style={{ color: "#3157FF" }}
              >
                04
              </span>
              <div className="relative w-full h-[200px] mb-6 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/Assest/QR4.png"
                  alt="Step 04 - Share Feedback"
                  fill
                  className="object-contain"
                />
              </div>
              <h3
                className="font-semibold text-[19px] mb-2"
                style={{ color: "#05031C" }}
              >
                Share
              </h3>
              <p className="text-[15px] text-gray-600 leading-[1.4] max-w-[220px]">
                Customers share their rating and experience through the guided review flow.
              </p>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center text-center group">
              <span
                className="font-bold text-[32px] mb-4"
                style={{ color: "#3157FF" }}
              >
                05
              </span>
              <div className="relative w-full h-[200px] mb-6 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/Assest/QR5.png"
                  alt="Step 05 - Submit Review"
                  fill
                  className="object-contain"
                />
              </div>
              <h3
                className="font-semibold text-[19px] mb-2"
                style={{ color: "#05031C" }}
              >
                Review
              </h3>
              <p className="text-[15px] text-gray-600 leading-[1.4] max-w-[220px]">
                Customers are guided to the relevant platform to submit their review.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. QR Solutions Component */}
      <QRSolutions />

      {/* ========================================================================= */}
      {/* 6. WHY BRH? SECTION (Interlocked Colorful Cards) */}
      {/* ========================================================================= */}
      <section id="why-brh" className="py-14 lg:py-20 overflow-hidden relative bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          {/* Header */}
          <div className="max-w-2xl mb-12">
            <h2
              className="text-3xl lg:text-[44px] font-bold tracking-tight mb-4"
              style={{ color: "#05031C" }}
            >
              Why BRH?
            </h2>
            <p className="text-base sm:text-md lg:text-[16px] text-gray-700 leading-relaxed">
              BRH makes it simple for businesses to collect customer feedback and
              guide customers to the right review platform through a QR-powered
              experience.
            </p>
          </div>

          {/* 4 Connected Cards: Two Pairs (Card 1+2 and Card 3+4) */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 xl:gap-10 pt-10 pb-16">

            {/* PAIR 1: Card 1 (Blue) + Card 2 (Green) connected by leftMaginte */}
            <div className="relative flex flex-col sm:flex-row items-center justify-center">
              {/* Connector between Card 1 and Card 2 */}
              <div className="absolute -top-12 lg:-top-14 left-[50%] -translate-x-[50%] w-[125px] h-[105px] lg:w-[135px] lg:h-[115px] z-30 pointer-events-none hidden sm:block">
                <Image
                  src="/Assest/leftMaginte.png"
                  alt="Connector 1 to 2"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Card 1: Blue */}
              <div
                className="w-full sm:w-[260px] md:w-[275px] lg:w-[270px] xl:w-[280px] rounded-[36px] p-6 sm:p-7 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] relative shadow-md lg:-rotate-3 lg:translate-y-7 z-10"
                style={{
                  backgroundColor: "#E3EFFF",
                  boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.05)",
                }}
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-sm"
                      style={{ backgroundColor: "#3157FF" }}
                    >
                      01
                    </div>
                    <h3
                      className="font-bold text-[17px] leading-tight"
                      style={{ color: "#05031C" }}
                    >
                      Simple for Customers
                    </h3>
                  </div>

                  <p className="text-[13px] text-gray-700 leading-relaxed mb-6">
                    One quick QR scan takes customers through an easy review journey.
                  </p>
                </div>

                <div className="relative w-full h-[180px] flex items-center justify-center">
                  <Image
                    src="/Assest/firstCardImg.png"
                    alt="Simple for Customers"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Card 2: Green (overlaps Card 1 slightly on desktop) */}
              <div
                className="w-full sm:w-[260px] md:w-[275px] lg:w-[270px] xl:w-[280px] sm:-ml-5  xl:ml-1 rounded-[36px] p-6 sm:p-7 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] relative shadow-md lg:rotate-2 lg:translate-y-0 z-20"
                style={{
                  backgroundColor: "#E6F6F0",
                  boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.05)",
                }}
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-sm"
                      style={{ backgroundColor: "#50AB84" }}
                    >
                      02
                    </div>
                    <h3
                      className="font-bold text-[17px] leading-tight"
                      style={{ color: "#05031C" }}
                    >
                      Genuine Feedback
                    </h3>
                  </div>

                  <p className="text-[13px] text-gray-700 leading-relaxed mb-6">
                    Capture ratings and feedback while the customer experience is still
                    fresh.
                  </p>
                </div>

                <div className="relative w-full h-[180px] flex items-center justify-center">
                  <Image
                    src="/Assest/secondCardImg.png"
                    alt="Genuine Feedback"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* PAIR 2: Card 3 (Orange) + Card 4 (Purple) connected by rightMaginte */}
            <div className="relative flex flex-col sm:flex-row items-center justify-center">
              {/* Connector between Card 3 and Card 4 */}
              <div className="absolute -top-12 lg:-top-14 left-[50%] -translate-x-[50%] w-[130px] h-[115px] lg:w-[145px] lg:h-[125px] z-30 pointer-events-none hidden sm:block">
                <Image
                  src="/Assest/rightMaginte.png"
                  alt="Connector 3 to 4"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Card 3: Orange */}
              <div
                className="w-full sm:w-[260px] md:w-[275px] lg:w-[270px] xl:w-[280px] rounded-[36px] p-6 sm:p-7 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] relative shadow-md lg:-rotate-2 lg:translate-y-1 z-10"
                style={{
                  backgroundColor: "#FFE9C7",
                  boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.05)",
                }}
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-sm"
                      style={{ backgroundColor: "#FFA008" }}
                    >
                      03
                    </div>
                    <h3
                      className="font-bold text-[17px] leading-tight"
                      style={{ color: "#05031C" }}
                    >
                      More Reviews
                    </h3>
                  </div>

                  <p className="text-[13px] text-gray-700 leading-relaxed mb-6">
                    Guide customers to platforms like Google to share their experience.
                  </p>
                </div>

                <div className="relative w-full h-[180px] flex items-center justify-center">
                  <Image
                    src="/Assest/thirdCardImg.png"
                    alt="More Reviews"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Card 4: Purple (overlaps Card 3 slightly on desktop) */}
              <div
                className="w-full sm:w-[260px] md:w-[275px] lg:w-[270px] xl:w-[280px] sm:-ml-5 lg:-ml-6 xl:ml-4 rounded-[36px] p-6 sm:p-7 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] relative shadow-md lg:-rotate-3 lg:translate-y-7 z-20"
                style={{
                  backgroundColor: "#EDDEFF",
                  boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.05)",
                }}
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-sm"
                      style={{ backgroundColor: "#AC69FF" }}
                    >
                      04
                    </div>
                    <h3
                      className="font-bold text-[17px] leading-tight"
                      style={{ color: "#05031C" }}
                    >
                      Easy to Manage
                    </h3>
                  </div>

                  <p className="text-[13px] text-gray-700 leading-relaxed mb-6">
                    Create, manage and update your QR experience from one place.
                  </p>
                </div>

                <div className="relative w-full h-[180px] flex items-center justify-center">
                  <Image
                    src="/Assest/fourthCardImg.png"
                    alt="Easy to Manage"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Who It's For Component */}
      <WhoItsFor />

      {/* ========================================================================= */}
      {/* 8. SEE BRH IN ACTION? SECTION (Featured Video Showcase) */}
      {/* ========================================================================= */}
      <section id="see-in-action" className="pt-16 lg:pt-24 pb-10 lg:pb-13 relative overflow-hidden bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">

          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2
              className="text-2xl lg:text-[42px] font-bold tracking-tight mb-3"
              style={{ color: "#05031C" }}
            >
              See BRH in Action?
            </h2>
            <p className="text-base sm:text-lg lg:text-[18px] text-gray-700">
              Watch how BRH helps businesses collect, manage and turn customer
              feedback into growth.
            </p>
          </div>


          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-6 sm:p-10 lg:p-12 mb-14"
            style={{ borderColor: "rgba(2, 32, 90, 0.1)" }}
          >

            <div className="lg:col-span-7">
              <div
                className="relative w-full aspect-video rounded-[28px] overflow-hidden bg-slate-900 shadow-2xl group cursor-pointer"
                onClick={() => setIsPlayingVideo(!isPlayingVideo)}
              >

                {/* <Image
                  src="/Assest/whoQR.png"
                  alt="BRH Video Showcase"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                /> */}


                <div className="absolute inset-0 bg-black/25 flex items-center justify-center transition duration-300 group-hover:bg-black/35">

                  <div
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-white shadow-2xl transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: "#3157FF" }}
                  >
                    <svg
                      className="w-10 h-10 ml-1 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>


                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-5 py-2.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[14px]">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <span className="font-medium">2:15</span>
                  </div>
                  <div className="w-1/2 h-1.5 bg-white/30 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-[#3157FF]" />
                  </div>
                  <span className="text-xs text-gray-300">BRH Guided Tour</span>
                </div>
              </div>
            </div>


            <div className="lg:col-span-5 flex flex-col items-start">

              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4 border"
                style={{
                  backgroundColor: "#EEF2FF",
                  borderColor: "rgba(49, 87, 255, 0.15)",
                }}
              >
                <div className="relative w-4 h-4">
                  <Image
                    src="/Assest/signleSparkle.png"
                    alt="Sparkle"
                    fill
                    className="object-contain"
                  />
                </div>
                <span
                  className="text-[12px] font-semibold tracking-wider uppercase"
                  style={{ color: "#3157FF" }}
                >
                  FEATURED VIDEO
                </span>
              </div>

              <h3
                className="text-2xl lg:text-[32px] font-bold mb-3 tracking-tight"
                style={{ color: "#05031C" }}
              >
                How BRH Works
              </h3>

              <p className="text-[15px] text-gray-700 leading-relaxed mb-8">
                See the complete customer journey — from scanning the QR to
                sharing feedback and submitting a review.
              </p>


              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">

                <button
                  onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                  className="inline-flex items-center justify-center gap-3 px-6 h-[56px] rounded-[20px] font-semibold text-[17px] bg-white border shadow-sm transition hover:bg-gray-50 active:scale-[0.98]"
                  style={{ borderColor: "#02205A", color: "#05031C" }}
                >
                  <svg
                    className="w-4 h-4 text-[#05031C] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>Watch Now</span>
                </button>


                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 h-[56px] rounded-[20px] font-semibold text-[17px] text-white shadow-md transition hover:opacity-95 active:scale-[0.98]"
                  style={{ backgroundColor: "#05031C" }}
                >
                  <div className="relative w-5 h-5">
                    <Image
                      src="/Assest/youtubeSolid.png"
                      alt="YouTube"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span>Watch on YouTube</span>
                  <svg
                    className="w-4 h-4 ml-0.5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>


          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: QR Solutions Demo */}
              <div
                className="relative aspect-square sm:aspect-[4/3.8] rounded-[32px] overflow-hidden bg-slate-900 group cursor-pointer shadow-md transition-all duration-300 hover:shadow-xl"
                onClick={() => setIsPlayingVideo(!isPlayingVideo)}
              >
                <Image
                  src="/Assest/heroRight.png"
                  alt="QR Solutions Demo"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors duration-300" />

                {/* Blue Play Button */}
                <div className="absolute top-[40%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#3157FF] flex items-center justify-center text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 ml-0.5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                {/* Floating white bottom card */}
                <div className="absolute left-3.5 right-3.5 bottom-3.5 bg-white rounded-[22px] p-4 sm:p-5 shadow-sm">
                  <h4 className="font-bold text-[14.5px] text-gray-900 mb-1 leading-snug">
                    QR Solutions Demo
                  </h4>
                  <p className="text-[12px] text-gray-500 leading-snug">
                    Explore Dynamic QR and Branded Frame solutions in action.
                  </p>
                </div>
              </div>

              {/* Card 2: More Videos Coming Soon */}
              <div className="relative aspect-square sm:aspect-[4/3.8] rounded-[32px] overflow-hidden bg-[#D3D6DC] group shadow-sm transition-all duration-300 hover:shadow-md">
                {/* Gray Play Button */}
                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#A2A8B2]/80 flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <svg className="w-6 h-6 ml-0.5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                {/* Floating white bottom card */}
                <div className="absolute left-3.5 right-3.5 bottom-3.5 bg-white rounded-[22px] p-4 sm:p-5 shadow-sm">
                  <h4 className="font-bold text-[14.5px] text-gray-900 mb-1 leading-snug">
                    More Videos Coming Soon
                  </h4>
                  <p className="text-[12px] text-gray-500 leading-snug">
                    New demos and guides are on the way!
                  </p>
                </div>
              </div>

              {/* Card 3: More Videos Coming Soon */}
              <div className="relative aspect-square sm:aspect-[4/3.8] rounded-[32px] overflow-hidden bg-[#D3D6DC] group shadow-sm transition-all duration-300 hover:shadow-md">
                {/* Gray Play Button */}
                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#A2A8B2]/80 flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <svg className="w-6 h-6 ml-0.5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                {/* Floating white bottom card */}
                <div className="absolute left-3.5 right-3.5 bottom-3.5 bg-white rounded-[22px] p-4 sm:p-5 shadow-sm">
                  <h4 className="font-bold text-[14.5px] text-gray-900 mb-1 leading-snug">
                    More Videos Coming Soon
                  </h4>
                  <p className="text-[12px] text-gray-500 leading-snug">
                    New demos and guides are on the way!
                  </p>
                </div>
              </div>
            </div>

            {/* Right arrow navigation button */}
            <button
              aria-label="Next videos"
              className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl items-center justify-center border border-gray-100 hover:scale-105 active:scale-95 transition-all z-20"
            >
              <div className="w-8 h-8 rounded-full bg-[#3157FF] flex items-center justify-center text-white shadow-sm">
                <svg
                  className="w-4 h-4 fill-none stroke-current"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. CTA SECTION (Ready to Build Better Customer Reviews) */}
      {/* ========================================================================= */}
      <section className="py-10 lg:py-16 relative z-10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
          {/* Outer wrapper — relative so the right image can overflow above the card */}
          <div className="relative pt-[60px]">

            {/* ── Card with ReadyBg.png wave ── */}
            <div
              className="w-full relative"
              style={{
                backgroundImage: "url('/Assest/ReadyBg.png')",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                filter: "drop-shadow(0px 16px 40px rgba(5, 3, 28, 0.35))",
                minHeight: "450px",
              }}
            >
              {/* Content row */}
              <div className="flex flex-col lg:flex-row items-center lg:items-stretch min-h-[400px]">

                {/* Left text column */}
                <div className="flex-1 flex flex-col items-start justify-center px-8 sm:px-12 lg:px-16 py-12 lg:py-16 z-10">

                  {/* Badge */}
                  <div
                    className="inline-flex items-center gap-2 px-4 py-[7px] rounded-full mb-6"
                    style={{
                      background: "linear-gradient(175.58deg, #FFFFFF -49.84%, #02205A 6.06%, #3157FF 95.5%)",
                    }}
                  >
                    <svg className="w-[14px] h-[14px] text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z" />
                    </svg>
                    <span className="text-[11px] sm:text-[12px] font-semibold text-white tracking-[0.1em] uppercase whitespace-nowrap">
                      READY TO GET STARTED?
                    </span>
                  </div>

                  {/* Heading */}
                  <h2 className="font-bold text-white leading-[1.18] mb-4 text-[28px] sm:text-[34px] lg:text-[42px] tracking-tight">
                    Ready to Built Better<br />
                    <span style={{ color: "#3157FF" }}>Customer Reviews</span>
                  </h2>

                  {/* Sub-text */}
                  <p className="text-[13px] sm:text-[14px] text-gray-300 leading-[1.7] mb-8 max-w-[430px]">
                    Make every customer interaction an opportunity to collect<br className="hidden sm:block" />
                    meaningful feedback and strengthen your online presence.
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href="#qr-solutions"
                      className="inline-flex items-center gap-2.5 px-6 h-[46px] rounded-[14px] font-semibold text-[14px] text-white transition duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                      style={{ backgroundColor: "#3157FF" }}
                    >
                      <span>Get Started</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                    <Link
                      href="#contact-us"
                      className="inline-flex items-center gap-2.5 px-6 h-[46px] rounded-[14px] font-semibold text-[14px] bg-white border transition duration-200 hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98]"
                      style={{ borderColor: "rgba(255,255,255,0.4)", color: "#3157FF" }}
                    >
                      <span>Contact Us</span>
                      <svg className="w-4 h-4 text-[#3157FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Right spacer for desktop */}
                <div className="hidden lg:block flex-shrink-0 w-[46%]" />

                {/* Mobile image */}
                <div className="lg:hidden w-full flex justify-center py-6 px-4">
                  <div className="relative w-[280px] h-[280px]">
                    <Image
                      src="/Assest/readyRightQR.png"
                      alt="BRH QR Stand"
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right QR image — overflows above card by 60px ── */}
            <div
              className="hidden lg:block absolute right-[-10px] bottom-2 pointer-events-none"
              style={{
                width: "48%",
                top: 0,
              }}
            >
              <Image
                src="/Assest/readyRightQR.png"
                alt="BRH QR Stand"
                fill
                className="object-contain object-bottom drop-shadow-2xl"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* 10. Footer Component */}
      <div id="contact-us">
        <Footer />
      </div>
    </div>
  );
}
