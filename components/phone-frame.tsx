"use client"

import type { ReactNode } from "react"

interface PhoneFrameProps {
  children: ReactNode
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a0a0a] p-4 sm:p-8">
      {/* Phone body */}
      <div className="relative w-full max-w-[400px] mx-auto">
        {/* Outer bezel / chassis */}
        <div className="relative rounded-[48px] bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] p-[3px] shadow-[0_0_60px_rgba(0,0,0,0.8),0_0_20px_rgba(218,185,70,0.05)]">
          {/* Inner bezel */}
          <div className="relative rounded-[46px] bg-[#111111] p-[10px]">
            {/* Screen area */}
            <div className="relative rounded-[38px] overflow-hidden bg-background" style={{ aspectRatio: "9/19.5" }}>
              {/* Status bar */}
              <div className="sticky top-0 z-50 flex items-center justify-between px-6 pt-3 pb-1 bg-background/80 backdrop-blur-md">
                <span className="text-[11px] text-foreground font-medium">15:34</span>
                {/* Dynamic Island / Notch */}
                <div className="absolute left-1/2 -translate-x-1/2 top-2 w-[90px] h-[26px] bg-black rounded-full" />
                <div className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-foreground" viewBox="0 0 24 24" fill="currentColor"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
                  <svg className="w-4 h-3 text-foreground" viewBox="0 0 24 16" fill="currentColor"><rect x="1" y="2" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/><rect x="20" y="5" width="3" height="6" rx="1" fill="currentColor"/><rect x="3" y="4" width="10" height="8" rx="1" fill="currentColor"/></svg>
                </div>
              </div>

              {/* Scrollable content */}
              <div className="h-full overflow-y-auto scrollbar-hide" style={{ maxHeight: "calc(100% - 32px)" }}>
                {children}
              </div>

              {/* Cracked screen overlay */}
              <div className="crack-overlay pointer-events-none absolute inset-0 z-40" />
            </div>
          </div>
        </div>

        {/* Side buttons (volume + power) */}
        {/* Left side - Volume buttons */}
        <div className="absolute left-[-2px] top-[120px] w-[3px] h-[32px] bg-[#2a2a2a] rounded-l-sm" />
        <div className="absolute left-[-2px] top-[165px] w-[3px] h-[52px] bg-[#2a2a2a] rounded-l-sm" />
        <div className="absolute left-[-2px] top-[228px] w-[3px] h-[52px] bg-[#2a2a2a] rounded-l-sm" />
        {/* Right side - Power button */}
        <div className="absolute right-[-2px] top-[180px] w-[3px] h-[65px] bg-[#2a2a2a] rounded-r-sm" />
      </div>
    </div>
  )
}
