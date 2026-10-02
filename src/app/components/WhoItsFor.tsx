"use client";

import React from "react";
import Image from "next/image";

// SVG path definitions for the 4 stepped cards with rounded outer and inner fillet corners
// Exact target dimensions: W = 236, H = 220, TabW = 107, ShelfW = 129, TabH = 116, BoxH = 104
const CARD_W = 236;
const CARD_H = 220;
const TAB_W = 107;
const SHELF_W = 129;
const TAB_H = 116;
const BOX_H = 104;
const R = 18; // outer corner radius
const Ri = 16; // inner fillet radius

// Card 1: Tab at top-right (x: 129 to 236, y: 0 to 116)
const PATH_TOP_RIGHT_TAB = [
  `M 0,${TAB_H + R}`,
  `A ${R} ${R} 0 0 1 ${R},${TAB_H}`,
  `L ${SHELF_W - Ri},${TAB_H}`,
  `A ${Ri} ${Ri} 0 0 0 ${SHELF_W},${TAB_H - Ri}`,
  `L ${SHELF_W},${R}`,
  `A ${R} ${R} 0 0 1 ${SHELF_W + R},0`,
  `L ${CARD_W - R},0`,
  `A ${R} ${R} 0 0 1 ${CARD_W},${R}`,
  `L ${CARD_W},${CARD_H - R}`,
  `A ${R} ${R} 0 0 1 ${CARD_W - R},${CARD_H}`,
  `L ${R},${CARD_H}`,
  `A ${R} ${R} 0 0 1 0,${CARD_H - R}`,
  "Z",
].join(" ");

// Card 2: Tab at top-left (x: 0 to 107, y: 0 to 116)
const PATH_TOP_LEFT_TAB = [
  `M ${R},0`,
  `L ${TAB_W - R},0`,
  `A ${R} ${R} 0 0 1 ${TAB_W},${R}`,
  `L ${TAB_W},${TAB_H - Ri}`,
  `A ${Ri} ${Ri} 0 0 0 ${TAB_W + Ri},${TAB_H}`,
  `L ${CARD_W - R},${TAB_H}`,
  `A ${R} ${R} 0 0 1 ${CARD_W},${TAB_H + R}`,
  `L ${CARD_W},${CARD_H - R}`,
  `A ${R} ${R} 0 0 1 ${CARD_W - R},${CARD_H}`,
  `L ${R},${CARD_H}`,
  `A ${R} ${R} 0 0 1 0,${CARD_H - R}`,
  `L 0,${R}`,
  `A ${R} ${R} 0 0 1 ${R},0`,
  "Z",
].join(" ");

// Card 3: Tab at bottom-right (x: 129 to 236, y: 104 to 220)
const PATH_BOTTOM_RIGHT_TAB = [
  `M ${R},0`,
  `L ${CARD_W - R},0`,
  `A ${R} ${R} 0 0 1 ${CARD_W},${R}`,
  `L ${CARD_W},${CARD_H - R}`,
  `A ${R} ${R} 0 0 1 ${CARD_W - R},${CARD_H}`,
  `L ${SHELF_W + R},${CARD_H}`,
  `A ${R} ${R} 0 0 1 ${SHELF_W},${CARD_H - R}`,
  `L ${SHELF_W},${BOX_H + Ri}`,
  `A ${Ri} ${Ri} 0 0 0 ${SHELF_W - Ri},${BOX_H}`,
  `L ${R},${BOX_H}`,
  `A ${R} ${R} 0 0 1 0,${BOX_H - R}`,
  `L 0,${R}`,
  `A ${R} ${R} 0 0 1 ${R},0`,
  "Z",
].join(" ");

// Card 4: Tab at bottom-left (x: 0 to 107, y: 104 to 220)
const PATH_BOTTOM_LEFT_TAB = [
  `M ${R},0`,
  `L ${CARD_W - R},0`,
  `A ${R} ${R} 0 0 1 ${CARD_W},${R}`,
  `L ${CARD_W},${BOX_H - R}`,
  `A ${R} ${R} 0 0 1 ${CARD_W - R},${BOX_H}`,
  `L ${TAB_W + Ri},${BOX_H}`,
  `A ${Ri} ${Ri} 0 0 0 ${TAB_W},${BOX_H + Ri}`,
  `L ${TAB_W},${CARD_H - R}`,
  `A ${R} ${R} 0 0 1 ${TAB_W - R},${CARD_H}`,
  `L ${R},${CARD_H}`,
  `A ${R} ${R} 0 0 1 0,${CARD_H - R}`,
  `L 0,${R}`,
  `A ${R} ${R} 0 0 1 ${R},0`,
  "Z",
].join(" ");

export default function WhoItsFor() {
  return (
    <section
      id="who-its-for"
      className="pt-6 sm:pt-7 lg:pt-8 pb-10 sm:pb-12 lg:pb-16 bg-[#FFFFFF] overflow-hidden flex flex-col justify-center scroll-mt-20"
    >
      <div className="max-w-[1100px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-9">
          <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold tracking-tight text-[#0B0F19] mb-2.5">
            Who is <span className="text-[#3157FF]">BRH</span> For?
          </h2>
          <p className="text-[13px] sm:text-[15.5px] text-[#4B5563] leading-5.5 max-w-[540px] mx-auto">
            Built for customer-facing businesses that want to collect{" "}
            <br className="hidden sm:inline" />
            meaningful feedback and strengthen their online presence.
          </p>
        </div>

        {/* Desktop Layout (lg screens) - Exact recreation of the reference design */}
        <div className="hidden lg:block relative max-w-[880px] mx-auto h-[610px]">
          {/* Central QR Stand Device */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-[200px] z-20 w-[145px] h-[160px] pointer-events-none transition-transform duration-300 hover:scale-105"
            style={{
              filter: "drop-shadow(0 16px 28px rgba(0, 0, 0, 0.16))",
            }}
          >
            <Image
              src="/Assest/whoQR.png"
              alt="BRH QR Stand"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* CARD 1: Restaurants & Cafes (Top-Left) */}
          <div className="absolute left-[70px] top-[15px] w-[236px] h-[220px] z-10 transition-transform duration-300 hover:-translate-y-1">
            {/* Stepped background outline with soft diffused drop-shadow */}
            <svg
              viewBox={`0 0 ${CARD_W} ${CARD_H}`}
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
                filter:
                  "drop-shadow(8px 14px 20px rgba(0, 0, 0, 0.20)) drop-shadow(3px 5px 8px rgba(0, 0, 0, 0.20))",
              }}
            >
              <path
                d={PATH_TOP_RIGHT_TAB}
                fill="#FFFFFF"
                stroke="#50AB84"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* 3D Cafe in top-left cutout */}
            <div className="absolute left-[8px] top-[14px] w-[114px] h-[95px] z-10">
              <Image
                src="/Assest/cafe.png"
                alt="Café illustration"
                fill
                className="object-contain"
              />
            </div>

            {/* Scoopen (Fork & Spoon) in top-right tab */}
            <div className="absolute right-[16px] top-[18px] w-[75px] h-[80px] flex items-center justify-center z-10">
              <div className="relative w-[44px] h-[44px]">
                <Image
                  src="/Assest/scoopen.png"
                  alt="Dining icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Bottom text block */}
            <div className="absolute left-0 bottom-0 w-full h-[104px] px-5 py-3.5 flex flex-col justify-center z-10">
              <h3 className="font-semibold text-[15.5px] text-[#50AB84] mb-1 leading-snug">
                Restaurants & Cafés
              </h3>
              <p className="text-[12.5px] text-[#4B5563] leading-[1.35]">
                Make it easy for customers to share their experience after a meal.
              </p>
            </div>
          </div>

          {/* CARD 2: Hotels & Hospitality (Top-Right) */}
          <div className="absolute right-[70px] top-[15px] w-[236px] h-[220px] z-10 transition-transform duration-300 hover:-translate-y-1">
            {/* Stepped background outline */}
            <svg
              viewBox={`0 0 ${CARD_W} ${CARD_H}`}
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
                filter:
                  "drop-shadow(8px 14px 20px rgba(0, 0, 0, 0.20)) drop-shadow(3px 5px 8px rgba(0, 0, 0, 0.20))",
              }}
            >
              <path
                d={PATH_TOP_LEFT_TAB}
                fill="#FFFFFF"
                stroke="#3157FF"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* Bed icon in top-left tab */}
            <div className="absolute left-[16px] top-[18px] w-[75px] h-[80px] flex items-center justify-center z-10">
              <div className="relative w-[50px] h-[36px]">
                <Image
                  src="/Assest/hotelBedIcon.png"
                  alt="Bed icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* 3D Hotel in top-right cutout */}
            <div className="absolute right-[8px] top-[14px] w-[114px] h-[95px] z-10">
              <Image
                src="/Assest/hotel.png"
                alt="Hotel illustration"
                fill
                className="object-contain"
              />
            </div>

            {/* Bottom text block */}
            <div className="absolute left-0 bottom-0 w-full h-[104px] px-5 py-3.5 flex flex-col justify-center z-10">
              <h3 className="font-semibold text-[15.5px] text-[#3157FF] mb-1 leading-snug">
                Hotels & Hospitality
              </h3>
              <p className="text-[12.5px] text-[#4B5563] leading-[1.35]">
                Give guests a simple way to share their experience.
              </p>
            </div>
          </div>

          {/* CARD 3: Salons & Service Businesses (Bottom-Left) */}
          <div className="absolute left-[10px] top-[305px] w-[236px] h-[220px] z-10 transition-transform duration-300 hover:-translate-y-1">
            {/* Stepped background outline */}
            <svg
              viewBox={`0 0 ${CARD_W} ${CARD_H}`}
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
                filter:
                  "drop-shadow(8px 14px 20px rgba(0, 0, 0, 0.20)) drop-shadow(3px 5px 8px rgba(0, 0, 0, 0.20))",
              }}
            >
              <path
                d={PATH_BOTTOM_RIGHT_TAB}
                fill="#FFFFFF"
                stroke="#FFA008"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* Top text block */}
            <div className="absolute left-0 top-0 w-full h-[104px] px-5 py-3.5 flex flex-col justify-center z-10">
              <h3 className="font-semibold text-[15.5px] text-[#FFA008] mb-1 leading-snug">
                Salons & Service Businesses
              </h3>
              <p className="text-[12.5px] text-[#4B5563] leading-[1.35]">
                Collect feedback while the customer experience is still fresh.
              </p>
            </div>

            {/* 3D Salon chair in bottom-left cutout */}
            <div className="absolute left-[8px] bottom-[10px] w-[114px] h-[98px] z-10">
              <Image
                src="/Assest/saloon.png"
                alt="Salon illustration"
                fill
                className="object-contain"
              />
            </div>

            {/* Hairdryer / Scissors in bottom-right tab */}
            <div className="absolute right-[16px] bottom-[18px] w-[75px] h-[80px] flex items-center justify-center z-10">
              <div className="relative w-[48px] h-[44px]">
                <Image
                  src="/Assest/service.png"
                  alt="Service equipment icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* CARD 4: Retail Stores (Bottom-Right) */}
          <div className="absolute right-[10px] top-[305px] w-[236px] h-[220px] z-10 transition-transform duration-300 hover:-translate-y-1">
            {/* Stepped background outline */}
            <svg
              viewBox={`0 0 ${CARD_W} ${CARD_H}`}
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
                filter:
                  "drop-shadow(8px 14px 20px rgba(0, 0, 0, 0.20)) drop-shadow(3px 5px 8px rgba(0, 0, 0, 0.20))",
              }}
            >
              <path
                d={PATH_BOTTOM_LEFT_TAB}
                fill="#FFFFFF"
                stroke="#AC69FF"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* Top text block */}
            <div className="absolute left-0 top-0 w-full h-[104px] px-5 py-3.5 flex flex-col justify-center z-10">
              <h3 className="font-semibold text-[15.5px] text-[#AC69FF] mb-1 leading-snug">
                Retail Stores
              </h3>
              <p className="text-[12.5px] text-[#4B5563] leading-[1.35]">
                Capture customer feedback at the point of purchase.
              </p>
            </div>

            {/* Single purple bag in bottom-left tab */}
            <div className="absolute left-[16px] bottom-[18px] w-[75px] h-[80px] flex items-center justify-center z-10">
              <div className="relative w-[44px] h-[44px]">
                <Image
                  src="/Assest/singleBag.png"
                  alt="Single bag icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Multiple bags in bottom-right cutout */}
            <div className="absolute right-[8px] bottom-[10px] w-[118px] h-[98px] z-10">
              <Image
                src="/Assest/mutipleBag.png"
                alt="Retail bags illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* CARD 5: Other Customer-Facing Businesses (Bottom-Center) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[375px] z-10 flex flex-col items-center">
            {/* White card with dark border matching text box height and width */}
            <div
              className="bg-white rounded-[18px] px-5 py-3.5 w-[236px] h-[104px] border flex flex-col justify-center transition-transform duration-300 hover:-translate-y-1"
              style={{
                borderColor: "#05031C",
                boxShadow:
                  "8px 14px 24px rgba(0, 0, 0, 0.14), 3px 5px 8px rgba(0, 0, 0, 0.08)",
              }}
            >
              <h3 className="font-bold text-[15px] text-[#05031C] mb-1 leading-tight">
                Other Customer-Facing Businesses
              </h3>
              <p className="text-[12.5px] text-[#4B5563] leading-[1.35]">
                Use BRH wherever customers interact with your business.
              </p>
            </div>

            {/* 3D Storefront building directly below card */}
            <div className="relative w-[230px] h-[110px] mt-1.5">
              <Image
                src="/Assest/otherCustomer.png"
                alt="Storefront illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Responsive Layout (< 1024px) */}
        <div className="lg:hidden flex flex-col items-center gap-6 max-w-md mx-auto pt-2">
          {/* Central QR Stand Hero on Mobile */}
          <div className="relative w-[140px] h-[155px]">
            <Image
              src="/Assest/whoQR.png"
              alt="BRH QR Stand"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Card 1: Restaurants & Cafes */}
          <div
            className="w-full bg-white rounded-[22px] p-5 border transition-all shadow-[0_12px_24px_rgba(0,0,0,0.06)]"
            style={{ borderColor: "#50AB84" }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="relative w-[105px] h-[80px]">
                <Image
                  src="/Assest/cafe.png"
                  alt="Café"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[40px] h-[40px] mr-2">
                <Image
                  src="/Assest/scoopen.png"
                  alt="Scoopen"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="font-semibold text-[17px] text-[#50AB84] mb-1">
              Restaurants & Cafés
            </h3>
            <p className="text-[13.5px] text-[#4B5563] leading-snug">
              Make it easy for customers to share their experience after a meal.
            </p>
          </div>

          {/* Card 2: Hotels & Hospitality */}
          <div
            className="w-full bg-white rounded-[22px] p-5 border transition-all shadow-[0_12px_24px_rgba(0,0,0,0.06)]"
            style={{ borderColor: "#3157FF" }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="relative w-[48px] h-[34px] ml-2">
                <Image
                  src="/Assest/hotelBedIcon.png"
                  alt="Hotel Bed"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[105px] h-[80px]">
                <Image
                  src="/Assest/hotel.png"
                  alt="Hotel"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="font-semibold text-[17px] text-[#3157FF] mb-1">
              Hotels & Hospitality
            </h3>
            <p className="text-[13.5px] text-[#4B5563] leading-snug">
              Give guests a simple way to share their experience.
            </p>
          </div>

          {/* Card 3: Salons & Service Businesses */}
          <div
            className="w-full bg-white rounded-[22px] p-5 border transition-all shadow-[0_12px_24px_rgba(0,0,0,0.06)]"
            style={{ borderColor: "#FFA008" }}
          >
            <h3 className="font-semibold text-[17px] text-[#FFA008] mb-1">
              Salons & Service Businesses
            </h3>
            <p className="text-[13.5px] text-[#4B5563] leading-snug mb-3">
              Collect feedback while the customer experience is still fresh.
            </p>
            <div className="flex items-center justify-between">
              <div className="relative w-[105px] h-[80px]">
                <Image
                  src="/Assest/saloon.png"
                  alt="Salon"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[44px] h-[40px] mr-2">
                <Image
                  src="/Assest/service.png"
                  alt="Service"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Card 4: Retail Stores */}
          <div
            className="w-full bg-white rounded-[22px] p-5 border transition-all shadow-[0_12px_24px_rgba(0,0,0,0.06)]"
            style={{ borderColor: "#AC69FF" }}
          >
            <h3 className="font-semibold text-[17px] text-[#AC69FF] mb-1">
              Retail Stores
            </h3>
            <p className="text-[13.5px] text-[#4B5563] leading-snug mb-3">
              Capture customer feedback at the point of purchase.
            </p>
            <div className="flex items-center justify-between">
              <div className="relative w-[42px] h-[42px] ml-2">
                <Image
                  src="/Assest/singleBag.png"
                  alt="Single Bag"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[110px] h-[80px]">
                <Image
                  src="/Assest/mutipleBag.png"
                  alt="Multiple Bags"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Card 5: Other Customer-Facing Businesses */}
          <div
            className="w-full bg-white rounded-[22px] p-5 border transition-all shadow-[0_12px_24px_rgba(0,0,0,0.06)] flex flex-col items-center text-center"
            style={{ borderColor: "#05031C" }}
          >
            <h3 className="font-bold text-[17px] text-[#05031C] mb-1">
              Other Customer-Facing Businesses
            </h3>
            <p className="text-[13.5px] text-[#4B5563] leading-snug mb-3">
              Use BRH wherever customers interact with your business.
            </p>
            <div className="relative w-[210px] h-[95px]">
              <Image
                src="/Assest/otherCustomer.png"
                alt="Storefront"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
