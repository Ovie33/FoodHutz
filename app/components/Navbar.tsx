"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e5e5e5]">
      <div className="px-4 md:px-32 h-16 flex items-center gap-4">

        {/* ── Logo ── */}
        <a href="/" className="flex-shrink-0 mr-2 md:mr-4 flex items-center">
          <Image
            src="/images/logo.png"
            alt="FoodHutz Logo"
            width={130}
            height={36}
            className="h-8 md:h-9 w-auto object-contain"
            style={{ width: "auto" }}
            priority
          />
        </a>

        <span className="hidden md:block w-px h-4 bg-[#d1d1d1]" />

        {/* ── Location Picker ── */}
        <button
          id="location-picker"
          className="hidden md:flex items-center gap-1.5 text-sm font-medium text-[#1a1a1a] hover:text-[#e8431a] transition-colors flex-shrink-0"
        >
          {/* Map pin icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e8431a" strokeWidth="2.5">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          <span className="text-[#000000] font-medium text-[12px]">Lagos, Nigeria</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {/* ── Search Bar ── */}
        <div className="flex-1 max-w-[560px] relative hidden md:block">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999]"
            width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            id="search-input"
            type="text"
            placeholder="Search restaurants, cuisines, dishes..."
            className="w-full pl-9 pr-4 py-2.5 rounded-[7px] bg-[#ffffff] border border-[#e5e5e5] text-[12px] text-[#1a1a1a] placeholder:text-[#999] focus:outline-none focus:border-[#e8431a] focus:ring-2 focus:ring-[#e8431a]/10 transition-all"
          />
        </div>

        {/* ── Nav Links (desktop) ── */}
        <nav className="hidden lg:flex items-center gap-6 ml-auto">
          <a href="#" className="text-[12px] font-semibold text-[#1a1a1a] hover:text-[#e8431a] transition-colors whitespace-nowrap">
            Become a Partner
          </a>
          <span className="w-px h-4 bg-[#d1d1d1]" />
          <a href="#" className="text-[12px] font-semibold text-[#1a1a1a] hover:text-[#e8431a] transition-colors">
            Help
          </a>
        </nav>

        {/* ── Auth Buttons (desktop) ── */}
        <div className="hidden md:flex items-center gap-2 ml-4 shrink-0">
          <button
            id="sign-in-btn"
            className="flex items-center cursor-pointer gap-2 px-4 py-2 rounded-[7px] border border-[#e8431a] text-[12px] font-semibold text-[#1a1a1a] hover:border-[#e8431a] hover:text-[#e8431a] transition-all"
          >
            {/* User icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Sign in
          </button>

          <button
            id="cart-btn"
            className="flex items-center cursor-pointer gap-2 px-4 py-2 rounded-[7px] border border-[#e8431a] text-[12px] font-semibold text-[#1a1a1a] hover:border-[#e8431a] hover:text-[#e8431a] transition-all relative"
          >
            {/* Cart icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            Cart
            {/* Cart item count badge */}
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#e8431a] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              2
            </span>
          </button>
        </div>

        {/* ── Mobile: Cart + Hamburger ── */}
        <div className="flex md:hidden items-center gap-3 ml-auto">
          {/* Mobile cart icon */}
          <button
            id="mobile-cart-btn"
            className="relative text-[#1a1a1a] hover:text-[#e8431a] transition-colors cursor-pointer"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#e8431a] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
              2
            </span>
          </button>

          {/* Hamburger button */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[#f5f5f5] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* ── Mobile Menu Dropdown ── */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#f0f0f0] bg-white px-4 pb-5 pt-3 space-y-4 animate-[fadeIn_0.2s_ease-out]">
          {/* Mobile Search */}
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999]"
              width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              id="mobile-search-input"
              type="text"
              placeholder="Search restaurants, cuisines, dishes..."
              className="w-full pl-9 pr-4 py-3 rounded-xl bg-[#f7f7f7] border border-[#e5e5e5] text-[13px] text-[#1a1a1a] placeholder:text-[#999] focus:outline-none focus:border-[#e8431a] focus:ring-2 focus:ring-[#e8431a]/10 transition-all"
            />
          </div>

          {/* Mobile Location */}
          <button
            id="mobile-location-picker"
            className="flex items-center gap-2 w-full px-3 py-2.5 rounded-xl bg-[#fff0ec] text-[13px] font-medium text-[#1a1a1a] cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e8431a" strokeWidth="2.5">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            Lagos, Nigeria
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-auto">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Mobile Nav Links */}
          <div className="space-y-1">
            <a href="#" className="block px-3 py-2.5 rounded-xl text-[13px] font-semibold text-[#1a1a1a] hover:bg-[#f7f7f7] hover:text-[#e8431a] transition-colors">
              Become a Partner
            </a>
            <a href="#" className="block px-3 py-2.5 rounded-xl text-[13px] font-semibold text-[#1a1a1a] hover:bg-[#f7f7f7] hover:text-[#e8431a] transition-colors">
              Help
            </a>
          </div>

          {/* Mobile Sign In */}
          <button
            id="mobile-sign-in-btn"
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#e8431a] hover:bg-[#c93610] text-white font-bold text-[13px] transition-all cursor-pointer shadow-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Sign in
          </button>
        </div>
      )}
    </header>
  );
}
