"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { smoothScrollTo } from "../utils/smoothScroll";
import { useToast } from "../context/ToastContext";

interface NavItem {
  name: string;
  href: string;
  isReady: boolean;
  isRoute?: boolean;
}

const NAV_LINKS: NavItem[] = [
  { name: "How It Works", href: "#how-it-works", isReady: true },
  { name: "QR Solutions", href: "#qr-solutions", isReady: true },
  { name: "Who It's For", href: "#who-its-for", isReady: true },
  { name: "Pricing", href: "/pricing", isReady: true, isRoute: true },
  { name: "Contact Us", href: "/contact-us", isReady: true, isRoute: true },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerMounted, setDrawerMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const isScrollingRef = useRef(false);
  const { showToast } = useToast();

  const isSubPage = pathname !== "/";

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  // Mount drawer before animating in, unmount after animating out
  const openDrawer = () => {
    setDrawerMounted(true);
    // small delay so CSS transition has a mounted element to transition from
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setDrawerOpen(true));
    });
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    // wait for slide-out transition (300ms) then unmount
    setTimeout(() => setDrawerMounted(false), 320);
  };

  const toggleDrawer = () => {
    if (drawerOpen) closeDrawer();
    else openDrawer();
  };

  // Active section scroll tracking
  useEffect(() => {
    if (isSubPage) {
      setActiveSection(pathname);
      return;
    }

    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const scrollPosition = window.scrollY + 120;
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
          if (scrollPosition >= top - 80 && scrollPosition < top + height - 80) {
            found = section.href;
            break;
          }
        }
      }

      setActiveSection(found);

      if (found) {
        if (window.location.hash !== found) {
          window.history.replaceState(null, "", found);
        }
      } else if (window.scrollY < 200) {
        if (window.location.hash && window.location.hash !== "") {
          window.history.replaceState(null, "", window.location.pathname);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSubPage, pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (!item.isReady) {
      e.preventDefault();
      showToast("Coming Soon");
      closeDrawer();
      return;
    }

    if (item.isRoute) {
      closeDrawer();
      return;
    }

    e.preventDefault();

    if (isSubPage) {
      router.push(`/${item.href}`);
      closeDrawer();
      return;
    }

    setActiveSection(item.href);
    isScrollingRef.current = true;
    smoothScrollTo(item.href, undefined, () => {
      isScrollingRef.current = false;
    });
    closeDrawer();
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isSubPage) {
      return; // Let standard Link href="/" handle navigation to home
    }
    e.preventDefault();
    setActiveSection("");
    smoothScrollTo("#hero");
    closeDrawer();
  };

  return (
    <>
      <header
        className="w-full bg-white sticky top-0 z-50 border-b transition-all"
        style={{ borderColor: "rgba(2, 32, 90, 0.13)" }}
      >
        <div
          className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 h-[68px] sm:h-[76px] lg:h-[80px] flex items-center justify-between"
          style={{ boxSizing: "border-box" }}
        >
          {/* ── Logo ── */}
          <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
            <div className="relative w-[40px] h-[44px] sm:w-[46px] sm:h-[50px] md:w-[50px] md:h-[55px] flex-shrink-0">
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
                className="font-semibold text-[22px] sm:text-[26px] md:text-[30px] tracking-tight leading-none"
                style={{ color: "#05031C", fontFamily: "Inter, sans-serif" }}
              >
                BRH
              </span>
              <span
                className="text-[8px] sm:text-[9px] md:text-[11px] font-normal tracking-wide mt-0.5"
                style={{ color: "#05031C", fontFamily: "Inter, sans-serif" }}
              >
                BUSINESS REVIEW HELPER
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {NAV_LINKS.map((link) => {
              const isActive =
                (link.isRoute && pathname === link.href) ||
                (!isSubPage && activeSection === link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`relative py-1 text-[13px] font-semibold transition-colors duration-200 ${
                    isActive ? "text-[#3157FF]" : "text-[#02205A] hover:text-[#3157FF]"
                  } cursor-pointer`}
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

          {/* ── Mobile Hamburger (right side) ── */}
          <button
            onClick={toggleDrawer}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-[#02205A] hover:bg-blue-50 transition-colors duration-200 cursor-pointer flex-shrink-0"
            aria-label={drawerOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={drawerOpen}
          >
            {drawerOpen ? (
              /* X icon */
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* ── Right-Side Drawer (mobile/tablet) ── */}
      {drawerMounted && (
        <>
          {/* Backdrop */}
          <div
            className="md:hidden fixed inset-0 z-[60] transition-opacity duration-300"
            style={{
              background: "rgba(2, 32, 90, 0.45)",
              backdropFilter: "blur(3px)",
              WebkitBackdropFilter: "blur(3px)",
              opacity: drawerOpen ? 1 : 0,
            }}
            onClick={closeDrawer}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div
            className="md:hidden fixed top-0 right-0 bottom-0 z-[70] w-[75vw] max-w-[300px] bg-white shadow-2xl flex flex-col"
            style={{
              transform: drawerOpen ? "translateX(0)" : "translateX(100%)",
              transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            {/* Drawer Header */}
            <div
              className="flex items-center justify-between px-5 py-4 border-b flex-shrink-0"
              style={{ borderColor: "rgba(2, 32, 90, 0.1)" }}
            >
              <div className="flex items-center gap-2">
                <div className="relative w-[34px] h-[37px] flex-shrink-0">
                  <Image src="/Assest/logo.png" alt="BRH Logo" fill className="object-contain" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-bold text-[18px] leading-none" style={{ color: "#05031C" }}>BRH</span>
                  <span className="text-[8px] font-medium tracking-wide mt-0.5" style={{ color: "#5B7A9E" }}>BUSINESS REVIEW HELPER</span>
                </div>
              </div>
              <button
                onClick={closeDrawer}
                className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-[#02205A]"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Drawer Nav Links */}
            <nav className="flex-1 overflow-y-auto px-4 py-5 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive =
                  (link.isRoute && pathname === link.href) ||
                  (!isSubPage && activeSection === link.href);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-[#EEF4FF] text-[#3157FF]"
                        : "text-[#02205A] hover:bg-gray-50 hover:text-[#3157FF]"
                    } cursor-pointer`}
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#3157FF] flex-shrink-0" />
                    )}
                    {!link.isReady && (
                      <span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Soon</span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Drawer Footer */}
            <div
              className="px-5 py-4 border-t flex-shrink-0"
              style={{ borderColor: "rgba(2, 32, 90, 0.08)" }}
            >
              <p className="text-[11px] text-center" style={{ color: "#8EA5C0" }}>
                © 2026 BRH by Gelora Tech
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
