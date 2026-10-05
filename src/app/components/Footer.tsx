"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { smoothScrollTo } from "../utils/smoothScroll";
import { useToast } from "../context/ToastContext";

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const { showToast } = useToast();

  const isContactPage = pathname?.startsWith("/contact");

  const quickLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "QR Solutions", href: "#qr-solutions" },
    { name: "Why BRH?", href: "#why-brh" },
    { name: "Who is BRH For?", href: "#who-its-for" },
    { name: "See BRH in Action", href: "#see-in-action" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (isContactPage) {
      router.push(`/${href}`);
    } else {
      smoothScrollTo(href);
    }
  };

  const handleLogoClick = () => {
    if (isContactPage) {
      router.push("/");
    } else {
      smoothScrollTo("#hero");
    }
  };

  return (
    <footer
      className={`w-full relative z-0 ${isContactPage ? "mt-0" : "mt-6 sm:mt-8 lg:-mt-24"
        }`}
    >
      {/* Background for Desktop: footerBg.png */}
      <div
        className="hidden lg:block absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/Assest/footerBg.png')",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
        }}
      />

      {/* Background for Mobile & Tablet: Clean subtle light gradient */}
      <div
        className="lg:hidden absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #F3F7FF 0%, #FFFFFF 100%)",
        }}
      />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 pt-10 sm:pt-14 lg:pt-28 pb-8 relative z-10">
        {/* Top 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 pb-10">

          {/* Column 1: Brand & About & Socials */}
          <div className="md:col-span-4 flex flex-col justify-between pr-0 md:pr-8 lg:pr-12">
            <div>
              {/* Clickable Logo to return to Hero Section / Home */}
              <button
                type="button"
                onClick={handleLogoClick}
                className="flex items-center gap-3 mb-4 text-left group cursor-pointer focus:outline-none"
                aria-label="Back to Home / Hero section"
              >
                <div className="relative w-[48px] h-[52px] flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/Assest/logo.png"
                    alt="BRH Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center ">
                  <span
                    className="font-bold text-[30px] sm:text-[32px] tracking-tight leading-none text-[#05031C] group-hover:text-[#3157FF] transition-colors"
                  >
                    BRH
                  </span>
                  <span
                    className="text-[11px] font-semibold tracking-[0.14em] mt-1 text-[#05031C] group-hover:text-[#3157FF]"
                  >
                    BUSINESS REVIEW HELPER
                  </span>
                </div>
              </button>

              {/* Description */}
              <p
                className="text-[14px] leading-[22px] max-w-[300px] text-[#05031C]"
              >
                Helping businesses collect meaningful customer feedback and strengthen their online presence.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6 sm:mt-8">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/businessreviewhelper/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[38px] h-[38px] rounded-full border border-[#05031C] flex items-center justify-center hover:bg-black/5 hover:scale-105 transition duration-200 cursor-pointer"
                aria-label="Instagram"
              >
                <div className="relative w-[18px] h-[18px]">
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
                href="https://www.linkedin.com/company/geloratech/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[38px] h-[38px] rounded-full border border-[#05031C] flex items-center justify-center hover:bg-black/5 hover:scale-105 transition duration-200 cursor-pointer"
                aria-label="LinkedIn"
              >
                <div className="relative w-[18px] h-[18px]">
                  <Image
                    src="/Assest/linkedinIcon.png"
                    alt="LinkedIn"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>

              {/* YouTube */}
              <button
                type="button"
                onClick={() => showToast("Coming Soon")}
                className="w-[38px] h-[38px] rounded-full border border-[#05031C] flex items-center justify-center hover:bg-black/5 hover:scale-105 transition duration-200 cursor-pointer"
                aria-label="YouTube"
              >
                <div className="relative w-[18px] h-[18px]">
                  <Image
                    src="/Assest/youtubeSolid.png"
                    alt="YouTube"
                    fill
                    className="object-contain"
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-4 md:border-l md:border-gray-300 md:px-8 lg:px-14 flex flex-col">
            <h3
              className="text-[14px] font-bold tracking-wider mb-5 uppercase text-[#05031C]"
            >
              QUICK LINKS
            </h3>
            <ul className="flex flex-col space-y-3">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="inline-flex items-center gap-2.5 text-[14px] font-medium text-[#05031C] hover:text-[#3157FF] transition group cursor-pointer"
                  >
                    <svg
                      className="w-3 h-3 text-[#3157FF] transform group-hover:translate-x-1 transition-transform flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.8}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="md:col-span-4 md:border-l md:border-gray-300 md:pl-8 lg:pl-14 flex flex-col">
            <h3
              className="text-[14px] font-bold tracking-wider mb-5 uppercase text-[#05031C]"
            >
              CONTACT US
            </h3>
            <div className="flex flex-col space-y-3.5">
              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center text-[#3157FF]">
                  <svg
                    className="w-5 h-5 text-[#3157FF]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <a
                  href="mailto:brh@geloratech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] font-medium text-[#05031C] hover:text-[#3157FF] transition-colors underline-offset-4 hover:underline"
                >
                  brh@geloratech.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center text-[#3157FF]">
                  <svg
                    className="w-[18px] h-[18px] text-[#3157FF]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <a
                  href="tel:+917976143735"
                  className="text-[14px] font-medium text-[#05031C] hover:text-[#3157FF] transition-colors"
                >
                  +91 -7976143735
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Divider */}
        <div className="w-full h-[1px] bg-gray-300 my-1" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] sm:text-[13px] font-semibold text-[#05031C] pt-2">
          <div className="order-3 sm:order-1">
            © 2026 BRH. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5 order-1 sm:order-2">
            <span className="text-[#05031C] font-semibold text-[12px] sm:text-[13px]">Powered By</span>
            <div className="relative w-[120px] h-[60px] sm:w-[160px] sm:h-[80px]">
              <a href="https://www.geloratech.com/" target="_blank" rel="noopener noreferrer">
                <Image src="/Assest/geloraLogo.png" alt="Powered By Gelora" fill className="object-contain" />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 order-2 sm:order-3">
            <Link href="/privacy" className="hover:underline text-[#05031C]">Privacy Policy</Link>
            <span className="text-gray-400">|</span>
            <Link href="/terms" className="hover:underline text-[#05031C]">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
