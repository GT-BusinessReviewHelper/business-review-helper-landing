"use client";

import React, { createContext, useContext, useState, useCallback, useRef } from "react";

interface ToastData {
  title: string;
  message?: string;
}

interface ToastContextType {
  showToast: (data: ToastData | string, message?: string) => void;
  hideToast: () => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<ToastData | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const hideToast = useCallback(() => {
    setIsVisible(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setTimeout(() => {
      setToast(null);
    }, 300);
  }, []);

  const showToast = useCallback(
    (data: ToastData | string, message?: string) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      const toastData: ToastData =
        typeof data === "string"
          ? { title: data, message: message }
          : data;

      setToast(toastData);
      setIsVisible(true);

      timeoutRef.current = setTimeout(() => {
        hideToast();
      }, 3500);
    },
    [hideToast]
  );

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}

      {/* Toast Notification Container */}
      {toast && (
        <div
          role="alert"
          aria-live="assertive"
          className={`fixed top-5 right-4 sm:top-6 sm:right-6 z-[9999] transition-all duration-300 ease-out transform ${
            isVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "-translate-y-4 opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <div
            className="relative overflow-hidden rounded-[18px] px-4 py-3 sm:px-5 sm:py-3.5 bg-[#05031C] text-white border border-[#3157FF]/40 shadow-2xl backdrop-blur-xl min-w-[240px] sm:min-w-[280px]"
            style={{
              boxShadow:
                "0 20px 45px -10px rgba(5, 3, 28, 0.6), 0 0 25px rgba(49, 87, 255, 0.25)",
            }}
          >
            <div className={`flex ${toast.message ? "items-start" : "items-center"} gap-3`}>
              {/* Icon badge */}
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3157FF] to-[#1E3AB8] flex items-center justify-center flex-shrink-0 text-white shadow-md shadow-[#3157FF]/30">
                <svg
                  className="w-4 h-4 animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>

              {/* Text content */}
              <div className="flex-1 min-w-0 pr-1">
                <h4 className="text-[14px] sm:text-[15px] font-semibold text-white tracking-wide leading-tight">
                  {toast.title}
                </h4>
                {toast.message && (
                  <p className="text-[12px] sm:text-[13px] text-gray-300 leading-relaxed mt-1 font-normal">
                    {toast.message}
                  </p>
                )}
              </div>

              {/* Close button */}
              <button
                type="button"
                onClick={hideToast}
                className="w-6 h-6 rounded-md flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0 cursor-pointer ml-1"
                aria-label="Close notification"
              >
                <svg
                  className="w-3.5 h-3.5"
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
              </button>
            </div>

            {/* Bottom Progress Bar */}
            <div className="absolute left-0 bottom-0 h-[2.5px] bg-white/10 w-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#3157FF] to-[#60A5FA]"
                style={{
                  animation: "toastProgress 3500ms linear forwards",
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Embedded CSS for the progress animation */}
      <style jsx global>{`
        @keyframes toastProgress {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
      `}</style>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
