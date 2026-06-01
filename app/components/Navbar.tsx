import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e5e5e5] ">
      <div className="px-32 h-16 flex items-center gap-4">

        {/* ── Logo ── */}
        <a href="/" className="flex-shrink-0 mr-4 flex items-center">
          <Image
            src="/images/logo.png"
            alt="FoodHutz Logo"
            width={130}
            height={36}
            className="h-9 w-auto object-contain"
            style={{ width: "auto" }}
            priority
          />
        </a>

        <span className="w-px h-4 bg-[#d1d1d1]" />

        {/* ── Location Picker ── */}
        <button
          id="location-picker"
          className="flex items-center gap-1.5 text-sm font-medium text-[#1a1a1a] hover:text-[#e8431a] transition-colors flex-shrink-0"
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
        <div className="flex-1 max-w-[560px] relative">
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

        {/* ── Nav Links ── */}
        <nav className="hidden lg:flex items-center gap-6 ml-auto">
          <a href="#" className="text-[12px] font-semibold text-[#1a1a1a] hover:text-[#e8431a] transition-colors whitespace-nowrap">
            Become a Partner
          </a>
          <span className="w-px h-4 bg-[#d1d1d1]" />
          <a href="#" className="text-[12px] font-semibold text-[#1a1a1a] hover:text-[#e8431a] transition-colors">
            Help
          </a>
        </nav>

        {/* ── Auth Buttons ── */}
        <div className="flex items-center gap-2 ml-4 shrink-0">
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

      </div>
    </header>
  );
}
