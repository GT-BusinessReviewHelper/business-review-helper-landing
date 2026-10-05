"use client";

import React, { useEffect, useState } from "react";

interface TocSection {
  id: string;
  title: string;
}

interface LegalTableOfContentsProps {
  sections: TocSection[];
}

export default function LegalTableOfContents({ sections }: LegalTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(callback, {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      });
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [sections]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="legal-toc">
      <div className="legal-toc-card">
        <p className="legal-toc-title">Contents</p>
        <ol className="legal-toc-list">
          {sections.map(({ id, title }) => {
            const isActive = activeId === id;
            return (
              <li key={id} className="legal-toc-item">
                <button
                  onClick={() => handleClick(id)}
                  className={`legal-toc-link${isActive ? " legal-toc-link--active" : ""}`}
                  aria-current={isActive ? "location" : undefined}
                >
                  <span className="legal-toc-text">{title}</span>
                  {isActive && (
                    <span className="legal-toc-pointer" aria-hidden="true">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
