import Image from "next/image";

const footerLinks = {
  Company: ["About Us", "Careers", "Blog", "Press", "Partner with us"],
  "For Customers": ["Help Centre", "How It Works", "Safety & Trust", "FAQs", "Contact Us"],
  "For Restaurants": ["Partner Portal", "Restaurant Resources", "Pricing", "Success Stories"],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#f0f0f0]">
      <div className="px-4 lg:px-12 xl:px-32 py-10">

        {/* ── Main 6-Column Footer Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.5fr_0.8fr_0.9fr_0.9fr_1.8fr_1.1fr] gap-7 mb-10 items-start">

          {/* Column 1: Logo & App Badges */}
          <div className="flex flex-col">
            {/* Logo */}
            <div className="mb-3.5">
              <Image
                src="/images/logo.png"
                alt="FoodHutz Logo"
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
                style={{ width: "auto" }}
              />
            </div>
            <p className="text-[11px] font-medium text-[#666] mb-4.5 max-w-[160px] leading-relaxed">
              Your local food companion.<br />
              Discover. Order. Savour Local.
            </p>

            {/* App Store Badges */}
            <div className="flex gap-2">
              {/* App Store Badge */}
              <a
                href="#"
                id="footer-app-store-btn"
                className="flex items-center gap-2 px-3 py-2 bg-black text-white rounded-[7px] hover:bg-[#1f1f1f] transition-colors w-[120px] h-[38px] justify-center flex-shrink-0 border border-white/10 shadow-sm"
              >
                {/* Apple icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 text-white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="flex flex-col items-start leading-none justify-center">
                  <span className="text-[6.5px] opacity-80 font-semibold uppercase tracking-[0.2px]">Download on the</span>
                  <span className="text-[11px] font-bold mt-0.5 tracking-tight">App Store</span>
                </div>
              </a>

              {/* Google Play Badge */}
              <a
                href="#"
                id="footer-google-play-btn"
                className="flex items-center gap-2 px-3 py-2 bg-black text-white rounded-[7px] hover:bg-[#1f1f1f] transition-colors w-[120px] h-[38px] justify-center flex-shrink-0 border border-white/10 shadow-sm"
              >
                {/* Play icon */}
                <svg width="18" height="18" viewBox="0 0 512 512" className="flex-shrink-0">
                  <path fill="#00e5ff" d="M32.05 13.91C16.89 29.54 8 55.49 8 89.84v332.31c0 34.36 8.89 60.31 24.05 75.94L35.25 501 270.8 265.45v-18.9L35.25 11 32.05 13.91z" />
                  <path fill="#ffeb3b" d="M388.75 383.35l-117.95-117.9v-18.9l117.95-117.9 3.2 1.83 103.54 58.97c29.54 16.83 29.54 44.33 0 61.16L391.95 381.52l-3.2 1.83z" />
                  <path fill="#ff3d00" d="M391.95 381.52L270.8 260.37 32.05 499.12c9.87 10.14 26.03 11.45 44.57.88L391.95 381.52z" />
                  <path fill="#4caf50" d="M391.95 130.48L76.62 12c-18.54-10.57-34.7-.93-44.57 9.21L270.8 251.63 391.95 130.48z" />
                </svg>
                <div className="flex flex-col items-start leading-none justify-center ml-0.5">
                  <span className="text-[6.5px] opacity-80 font-semibold uppercase tracking-[0.2px]">GET IT ON</span>
                  <span className="text-[11px] font-bold mt-0.5 tracking-tight">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          {/* Link columns (2, 3, 4) */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="flex flex-col">
              <h4 className="text-[12px] font-bold text-[#1a1a1a] mb-4.5 tracking-tight">{heading}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link} className="leading-none">
                    <a
                      href="#"
                      className="text-[12px] font-medium text-[#666] hover:text-[#e8431a] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 5: Stay in the loop — newsletter + socials */}
          <div className="flex flex-col">
            <h4 className="text-[12px] font-bold text-[#1a1a1a] mb-4.5 tracking-tight">Stay in the loop</h4>
            <p className="text-[11px] font-semibold text-[#666] leading-snug mb-3 max-w-[150px]">
              Get exclusive offers, new restaurant alerts &amp; more.
            </p>

            {/* Email subscribe inline row */}
            <div className="flex gap-1.5 mb-4.5 w-full">
              <input
                id="footer-email-input"
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-2.5 py-2 bg-white rounded-lg border border-[#e5e5e5] text-[11px] font-medium text-[#1a1a1a] placeholder:text-[#999] focus:outline-none focus:border-[#e8431a] transition-all"
              />
              <button
                id="footer-subscribe-btn"
                className="px-3.5 py-2 bg-[#e8431a] hover:bg-[#c93610] text-white font-bold text-[11px] rounded-lg transition-all flex-shrink-0 cursor-pointer shadow-sm"
              >
                Subscribe
              </button>
            </div>

            {/* Social icons */}
            <div className="flex gap-2.5">
              {/* Instagram */}
              <a href="#" id="social-instagram" className="w-7 h-7 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#e8431a] transition-colors text-white shadow-sm">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" id="social-facebook" className="w-7 h-7 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#e8431a] transition-colors text-white shadow-sm">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="#" id="social-twitter" className="w-7 h-7 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#e8431a] transition-colors text-white shadow-sm">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* TikTok */}
              <a href="#" id="social-tiktok" className="w-7 h-7 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#e8431a] transition-colors text-white shadow-sm">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.78a4.85 4.85 0 01-1.02-.09z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 6: Popular Searches */}
          <div className="flex flex-col">
            <h4 className="text-[12px] font-bold text-[#1a1a1a] mb-4.5 tracking-tight">Popular Searches</h4>
            <ul className="space-y-3">
              {[
                "Restaurants in Lekki",
                "Restaurants in Victoria Island",
                "Best Nigerian Restaurants",
                "Pizza Delivery in Lagos",
                "Sushi in Lagos",
              ].map((term) => (
                <li key={term} className="leading-none">
                  <a href="#" className="text-[12px] font-medium text-[#666] hover:text-[#e8431a] transition-colors">
                    {term}
                  </a>
                </li>
              ))}
              <li className="pt-1.5 leading-none">
                <a href="#" className="text-[12px] font-bold text-[#e8431a] hover:underline flex items-center gap-1">
                  View all cities
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-[#f0f0f0] pt-6 grid grid-cols-1 lg:grid-cols-[1.5fr_0.8fr_0.9fr_0.9fr_1.8fr_1.1fr] gap-7 items-center">
          <p className="text-[11px] font-semibold text-[#888]">© 2025 FoodHutz. All rights reserved.</p>
          
          {/* Privacy links aligned with Company column */}
          <div className="flex items-center gap-2.5 text-[11px] font-semibold text-[#888] col-span-3">
            <a href="#" className="hover:text-[#e8431a] transition-colors">Terms &amp; Conditions</a>
            <span className="text-gray-200">|</span>
            <a href="#" className="hover:text-[#e8431a] transition-colors">Privacy Policy</a>
            <span className="text-gray-200">|</span>
            <a href="#" className="hover:text-[#e8431a] transition-colors">Refund Policy</a>
          </div>

          {/* Right Selectors aligned with last columns */}
          <div className="flex items-center gap-2.5 text-[11px] font-semibold text-[#888] col-span-2 lg:justify-end">
            <button className="flex items-center gap-1 hover:text-[#e8431a] transition-colors cursor-pointer">
              Nigeria (NG)
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <span className="text-gray-200">|</span>
            <button className="flex items-center gap-1 hover:text-[#e8431a] transition-colors cursor-pointer">
              English (UK)
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
