"use client";

import React from "react";
import Image from "next/image";

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="py-20 lg:py-28 bg-[#FBFDFF]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <h2
            className="text-4xl lg:text-[52px] font-bold tracking-tight mb-4"
            style={{ color: "#05031C" }}
          >
            Who is BRH For?
          </h2>
          <p className="text-base sm:text-lg lg:text-[18px] text-gray-700">
            Built for customer-facing businesses that want to collect meaningful
            feedback and strengthen their online presence.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Restaurants & Cafes */}
          <div
            className="bg-white rounded-[24px] p-7 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between min-h-[290px]"
            style={{
              borderColor: "#50AB84",
              boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="relative w-full h-[130px] mb-4 flex items-center justify-center">
              <Image
                src="/Assest/cafe.png"
                alt="Restaurants & Cafés"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3
                className="font-semibold text-[20px] mb-2"
                style={{ color: "#50AB84" }}
              >
                Restaurants & Cafés
              </h3>
              <p className="text-[15px] text-gray-700 leading-snug">
                Make it easy for customers to share their experience after a meal.
              </p>
            </div>
          </div>

          {/* Card 2: Hotels & Hospitality */}
          <div
            className="bg-white rounded-[24px] p-7 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between min-h-[290px]"
            style={{
              borderColor: "#3157FF",
              boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="relative w-full h-[130px] mb-4 flex items-center justify-center">
              <Image
                src="/Assest/hotel.png"
                alt="Hotels & Hospitality"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3
                className="font-semibold text-[20px] mb-2"
                style={{ color: "#3157FF" }}
              >
                Hotels & Hospitality
              </h3>
              <p className="text-[15px] text-gray-700 leading-snug">
                Give guests a simple way to share their experience.
              </p>
            </div>
          </div>

          {/* Card 3: Salons & Service Businesses */}
          <div
            className="bg-white rounded-[24px] p-7 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between min-h-[290px]"
            style={{
              borderColor: "#FFA008",
              boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="relative w-full h-[130px] mb-4 flex items-center justify-center">
              <Image
                src="/Assest/saloon.png"
                alt="Salons & Service Businesses"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3
                className="font-semibold text-[20px] mb-2"
                style={{ color: "#FFA008" }}
              >
                Salons & Service Businesses
              </h3>
              <p className="text-[15px] text-gray-700 leading-snug">
                Collect feedback while the customer experience is still fresh.
              </p>
            </div>
          </div>

          {/* Card 4: Retail Stores */}
          <div
            className="bg-white rounded-[24px] p-7 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between min-h-[290px]"
            style={{
              borderColor: "#AC69FF",
              boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="relative w-full h-[130px] mb-4 flex items-center justify-center">
              <Image
                src="/Assest/singleBag.png"
                alt="Retail Stores"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3
                className="font-semibold text-[20px] mb-2"
                style={{ color: "#AC69FF" }}
              >
                Retail Stores
              </h3>
              <p className="text-[15px] text-gray-700 leading-snug">
                Capture customer feedback at the point of purchase.
              </p>
            </div>
          </div>

          {/* Card 5: Other Customer-Facing Businesses */}
          <div
            className="bg-white rounded-[24px] p-7 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between min-h-[290px] md:col-span-2 lg:col-span-2"
            style={{
              borderColor: "#05031C",
              boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="relative w-full h-[130px] mb-4 flex items-center justify-center">
              <Image
                src="/Assest/otherCustomer.png"
                alt="Other Customer-Facing Businesses"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3
                className="font-semibold text-[20px] mb-2"
                style={{ color: "#05031C" }}
              >
                Other Customer-Facing Businesses
              </h3>
              <p className="text-[15px] text-gray-700 leading-snug max-w-xl">
                Use BRH wherever customers interact with your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
