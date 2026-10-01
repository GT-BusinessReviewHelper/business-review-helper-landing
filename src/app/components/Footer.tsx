"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "QR Solutions", href: "#qr-solutions" },
    { name: "Why BRH?", href: "#why-brh" },
    { name: "Who is BRH For?", href: "#who-its-for" },
    { name: "See BRH in Action", href: "#see-in-action" },
  ];

  return (
    <footer
      className="w-full mt-16 md:mt-24"
      style={{
        background:
          "linear-gradient(180deg, rgba(49, 87, 255, 0.13) 0%, rgba(152, 171, 255, 0.13) 27.75%, rgba(255, 255, 255, 0.13) 55.51%, rgba(255, 255, 255, 0.13) 85.44%)",
        borderTop: "3px solid rgba(2, 32, 90, 0.13)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 pt-16 pb-8">
        {/* Top 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12">
          {/* Column 1: Brand & About & Socials */}
          <div className="md:col-span-4 flex flex-col justify-between pr-0 md:pr-6">
            <div>
              {/* Logo */}
              <div className="flex items-center gap-3 mb-5">
                <div className="relative w-[56px] h-[60px] flex-shrink-0">
                  <Image
                    src="/Assest/logo.png"
                    alt="BRH Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span
                    className="font-semibold text-[36px] tracking-tight leading-none"
                    style={{ color: "#05031C" }}
                  >
                    BRH
                  </span>
                  <span
                    className="text-[13px] font-normal tracking-wide mt-1"
                    style={{ color: "#05031C" }}
                  >
                    BUSINESS REVIEW HELPER
                  </span>
                </div>
              </div>

              {/* Description */}
              <p
                className="text-[17px] leading-[26px] max-w-[320px]"
                style={{ color: "#05031C" }}
              >
                Helping businesses collect meaningful customer feedback and strengthen their online presence.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3.5 mt-8">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-[47px] h-[47px] rounded-full border border-black flex items-center justify-center hover:bg-black/5 hover:scale-105 transition duration-200"
                aria-label="Instagram"
              >
                <div className="relative w-[22px] h-[22px]">
                  <Image
                    src="/Assest/instagramIcon.png"
                    alt="Instagram"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-[47px] h-[47px] rounded-full border border-black flex items-center justify-center hover:bg-black/5 hover:scale-105 transition duration-200"
                aria-label="LinkedIn"
              >
                <div className="relative w-[22px] h-[22px]">
                  <Image
                    src="/Assest/linkedinIcon.png"
                    alt="LinkedIn"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-[47px] h-[47px] rounded-full border border-black flex items-center justify-center hover:bg-black/5 hover:scale-105 transition duration-200"
                aria-label="YouTube"
              >
                <div className="relative w-[22px] h-[22px]">
                  <Image
                    src="/Assest/youtubeSolid.png"
                    alt="YouTube"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div
            className="md:col-span-4 md:border-l md:border-r border-black/15 md:px-8 lg:px-12 flex flex-col"
          >
            <h3
              className="text-[18px] font-semibold tracking-wider mb-6 uppercase"
              style={{ color: "#05031C" }}
            >
              QUICK LINKS
            </h3>
            <ul className="flex flex-col gap-3.5">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 text-[17px] font-normal transition hover:text-[#3157FF] group"
                    style={{ color: "#05031C" }}
                  >
                    <svg
                      className="w-3.5 h-3.5 text-[#3157FF] transform group-hover:translate-x-1 transition"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="md:col-span-4 md:pl-6 flex flex-col">
            <h3
              className="text-[18px] font-semibold tracking-wider mb-6 uppercase"
              style={{ color: "#05031C" }}
            >
              CONTACT US
            </h3>
            <div className="flex flex-col gap-5">
              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 flex-shrink-0 mt-0.5 relative">
                  <Image
                    src="/Assest/mailIcon.png"
                    alt="Email"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[17px] font-normal" style={{ color: "#05031C" }}>
                  BRH Official Email
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 flex-shrink-0 mt-0.5 relative">
                  <Image
                    src="/Assest/phoneIcon.png"
                    alt="Phone"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[17px] font-normal" style={{ color: "#05031C" }}>
                  BRH Official Phone Number
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 flex-shrink-0 mt-0.5 text-[#3157FF]">
                  <svg
                    className="w-6 h-6 text-[#3157FF]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <span className="text-[17px] font-normal" style={{ color: "#05031C" }}>
                  BRH Official Address
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Divider */}
        <div className="w-full h-[1px] bg-black/20 my-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[14px] font-semibold text-[#05031C] pt-2">
          <div>
            © 2026 BRH. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Powered By</span>
            <div className="relative w-[130px] h-[36px]">
              <Image
                src="/Assest/geloraLogo.png"
                alt="Powered By Gelora"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link href="#privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="#terms" className="hover:underline">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
