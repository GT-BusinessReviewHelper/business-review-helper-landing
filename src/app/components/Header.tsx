"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { smoothScrollTo } from "../utils/smoothScroll";

interface NavItem {
  name: string;
  href: string;
  isReady: boolean;
}

const NAV_LINKS: NavItem[] = [
  { name: "How It Works", href: "#how-it-works", isReady: true },
  { name: "QR Solutions", href: "#qr-solutions", isReady: true },
  { name: "Who It’s For", href: "#who-its-for", isReady: true },
  { name: "Pricing", href: "#pricing", isReady: false },
  { name: "Contact Us", href: "#contact-us", isReady: false },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  // Suppress scroll-spy while the programmatic smooth scroll is animating
  const isScrollingRef = React.useRef(false);

  // Automatically activate header tab when user manually scrolls
  useEffect(() => {
    const handleScroll = () => {
      // Don't update active tab while a programmatic scroll is animating
      if (isScrollingRef.current) return;

      const scrollPosition = window.scrollY + 100;

      const sections = [
        { id: "who-its-for", href: "#who-its-for" },
        { id: "qr-solutions", href: "#qr-solutions" },
        { id: "how-it-works", href: "#how-it-works" },
      ];

      let found = "";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top - 60 && scrollPosition < top + height - 60) {
            found = section.href;
            break;
          }
        }
      }

      setActiveSection(found);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    isReady: boolean
  ) => {
    e.preventDefault();
    if (!isReady) {
      // Pricing and Contact Us pages are not ready yet -> do nothing
      return;
    }

    // Set the active tab immediately on click
    setActiveSection(href);
    // Pause scroll-spy so the tab doesn't flicker during animation
    isScrollingRef.current = true;
    smoothScrollTo(href, undefined, () => {
      // Re-enable scroll-spy once the animation completes
      isScrollingRef.current = false;
    });
    setMobileMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActiveSection("");
    smoothScrollTo("#home");
  };

  return (
    <header
      className="w-full bg-white sticky top-0 z-50 border-b transition-all"
      style={{ borderColor: "rgba(2, 32, 90, 0.13)" }}
    >
      <div
        className="max-w-[1440px] mx-auto px-4 lg:px-16 h-[80px] flex items-center justify-between"
        style={{ boxSizing: "border-box" }}
      >
        {/* Logo Section */}
        <Link href="/" onClick={handleLogoClick} className="flex items-center gap-3 group">
          <div className="relative w-[50px] h-[54px] md:w-[50px] md:h-[55px] flex-shrink-0">
            <Image
              src="/Assest/logo.png"
              alt="BRH Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <span
              className="font-semibold text-1xl md:text-[30px] tracking-tight leading-none"
              style={{ color: "#05031C", fontFamily: "Inter, sans-serif" }}
            >
              BRH
            </span>
            <span
              className="text-[10px] md:text-[11px] font-normal tracking-wide mt-1"
              style={{ color: "#05031C", fontFamily: "Inter, sans-serif" }}
            >
              BUSINESS REVIEW HELPER
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isReady)}
                className={`relative py-1 text-[13px] font-semibold transition-colors duration-200 ${
                  isActive ? "text-[#3157FF]" : "text-[#02205A] hover:text-[#3157FF]"
                } ${!link.isReady ? "cursor-default" : "cursor-pointer"}`}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#3157FF] rounded-full transition-all duration-300" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#02205A] hover:bg-gray-100 transition"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="md:hidden px-6 py-4 bg-white border-t flex flex-col gap-3 shadow-lg animate-fadeIn"
          style={{ borderColor: "rgba(2, 32, 90, 0.08)" }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isReady)}
                className={`relative py-2 text-[15px] font-semibold transition-colors flex items-center justify-between border-b pb-2 ${
                  isActive
                    ? "text-[#3157FF] border-[#3157FF]"
                    : "text-[#02205A] border-transparent hover:text-[#3157FF]"
                } ${!link.isReady ? "cursor-default" : "cursor-pointer"}`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#3157FF]" />
                )}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
