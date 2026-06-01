import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { 
  moments, 
  cuisines, 
  restaurants, 
  areas,
  getRawLocalRestaurants,
  getRawTop10Items,
  getRawTopPicks,
  getRawReservationSpots
} from "@/app/data/landingData";

// ── Helper Components ──

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="#eab308" stroke="#eab308" strokeWidth="1" className="flex-shrink-0">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function HeartButton({ id }: { id: string }) {
  return (
    <button
      id={`favourite-${id}`}
      className="absolute top-3.5 right-3.5 text-white hover:text-[#e8431a] transition-all drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] cursor-pointer hover:scale-110 active:scale-95"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </button>
  );
}

// ── Main Page Flow ──

export default function Home() {
  const localRestaurants = getRawLocalRestaurants();
  const top10Items = getRawTop10Items();
  const topPicks = getRawTopPicks();
  const reservationSpots = getRawReservationSpots();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden min-h-[360px] lg:min-h-[400px] flex items-center">
        {/* Full Background Food Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/hero-food.png"
            alt="Delicious Jollof Rice spread"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to right, #faf6f3 0%, #faf6f3 32%, rgba(250,246,243,0.85) 42%, rgba(250,246,243,0.4) 55%, transparent 70%)",
          }}
        />

        {/* Content Container */}
        <div className="w-full px-4 lg:px-16 xl:px-40 py-6 relative z-20 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 items-center">
          {/* Left Column: Text + Search Card + Stats */}
          <div className="relative max-w-[520px]">
            <h1 className="font-heading text-[42px] lg:text-[46px] font-extrabold leading-[1.1] text-[#1a1a1a] mb-0 tracking-tight">
              Discover. Order.
            </h1>
            <h2 className="font-heading text-[42px] lg:text-[46px] font-extrabold leading-[1.1] text-[#e8431a] mb-3 tracking-tight">
              Savour Local.
            </h2>
            <p className="font-heading text-[15px] font-medium text-[#666] mb-7 max-w-[340px] leading-relaxed">
              The best restaurants in Lagos,<br />
              delivered fast or ready for you.
            </p>

            {/* Search Card */}
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[#f0f0f0] px-2 py-2.5 max-w-[460px] w-full mb-7">
              {/* Tab Row */}
              <div className="flex items-center justify-around pb-2 border-b border-[#f0f0f0] relative">
                {/* Delivery Tab */}
                <button
                  id="tab-delivery"
                  className="flex items-center gap-2.5 px-1 py-1.5 text-[13px] font-bold text-[#e8431a] relative cursor-pointer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 0h5.5M5 17l-1-4h5m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 0h-3.5l-2-7h-2m0 0L9 7h5l2 6m-5 0h5m-9.5 4h5" stroke="#e8431a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 7l1 3" stroke="#e8431a" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                  Delivery
                  <span className="absolute bottom-[-8px] left-0 right-0 h-[2.5px] w-[100%] bg-[#e8431a] rounded-full" />
                </button>

                {/* Collection Tab */}
                <button
                  id="tab-collection"
                  className="flex items-center gap-2.5 px-1 py-1.5 text-[13px] font-semibold text-[#888] hover:text-[#e8431a] transition-colors cursor-pointer"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <path d="M3 6h18" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                  Collection
                </button>

                {/* Reserve a Table Tab */}
                <button
                  id="tab-reserve"
                  className="flex items-center gap-2.5 px-1 py-1.5 text-[13px] font-semibold text-[#888] hover:text-[#e8431a] transition-colors cursor-pointer"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Reserve a Table
                </button>
              </div>

              {/* Search Row */}
              <div className="flex items-center gap-3 mt-4.5">
                <div className="flex-1 relative">
                  <svg
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#e8431a]"
                    width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <input
                    id="hero-search-input"
                    type="text"
                    placeholder="Enter your area or street"
                    className="w-full pl-10 pr-10 py-3 bg-white border border-[#e5e5e5] rounded-xl text-[13px] font-medium text-[#1a1a1a] placeholder:text-[#aaa] focus:outline-none focus:border-[#e8431a] focus:ring-2 focus:ring-[#e8431a]/10 transition-all"
                  />
                  <button className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#bbb] hover:text-[#e8431a] transition-colors cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="4" />
                      <line x1="12" y1="2" x2="12" y2="6" />
                      <line x1="12" y1="18" x2="12" y2="22" />
                      <line x1="2" y1="12" x2="6" y2="12" />
                      <line x1="18" y1="12" x2="22" y2="12" />
                    </svg>
                  </button>
                </div>
                <button
                  id="find-food-btn"
                  className="px-8 py-3 bg-[#e8431a] hover:bg-[#d03a15] text-white font-bold text-[13px] rounded-xl transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap"
                >
                  Find Food
                </button>
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex items-center justify-between max-w-[460px]">
              <div className="flex items-center gap-2.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div>
                  <p className="text-[13px] font-bold text-[#1a1a1a] leading-none mb-0.5">25–40 min</p>
                  <p className="text-[11px] font-medium text-[#999] leading-none">Fast Delivery</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
                <div>
                  <p className="text-[13px] font-bold text-[#1a1a1a] leading-none mb-0.5">Verified</p>
                  <p className="text-[11px] font-medium text-[#999] leading-none">Trusted Restaurants</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
                <div>
                  <p className="text-[13px] font-bold text-[#1a1a1a] leading-none mb-0.5">4.7 ★ Average</p>
                  <p className="text-[11px] font-medium text-[#999] leading-none">From 50K+ reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Spacer + Floating Card */}
          <div className="hidden lg:block relative h-[380px]">
            <div className="absolute bottom-4 right-[-9] bg-gradient-to-br from-[#fdf6e8] to-[#fef3d6] backdrop-blur-sm border border-[#e8d9b4] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-4 pb-3.5 w-[240px] z-30">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-[#e8431a] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="white" stroke="none">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <span className="text-[12px] font-bold text-[#1a1a1a]">Local Favourite</span>
              </div>
              <p className="text-[15px] font-bold text-[#1a1a1a] mb-2">Buka Restaurant</p>
              <div className="flex items-center gap-4 text-[12px]">
                <span className="flex items-center gap-1">
                  <svg width="12" height="12" fill="none" stroke="#eab308" strokeWidth="2" viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span className="font-bold text-[#e8431a]">4.8</span>
                  <svg width="12" height="12" fill="#e8431a" stroke="#e8431a" strokeWidth="0.5" viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span className="text-[#888] font-medium">(3.2K)</span>
                </span>
                <span className="flex items-center gap-1 text-[#888] font-medium">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  25–35 min
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Food Moments Section  */}
      <section className="bg-white py-3 mt-6 items-center">
        <div className="px-4 lg:px-16 xl:px-40">
          <div className="flex items-center gap-8 justify-between">
            <h2 className="font-heading text-[16px] font-bold text-[#1a1a1a] leading-tight flex-shrink-0 max-w-[120px]">
              What&apos;s your food moment?
            </h2>

            {/* Scrollable moments row */}
            <div className="flex-1 flex justify-between overflow-x-auto scrollbar-hide items-start">
              {moments.map((moment) => (
                <button
                  key={moment.id}
                  id={`moment-${moment.id}`}
                  className="flex flex-col items-center gap-2.5 flex-shrink-0 group cursor-pointer w-[90px]"
                >
                  <div
                    className="w-[40px] h-[40px] lg:w-[76px] lg:h-[76px] rounded-[12px] lg:rounded-[20px] flex items-center justify-center transition-transform group-hover:scale-110 [&>svg]:w-5 [&>svg]:h-5 lg:[&>svg]:w-9 lg:[&>svg]:h-9"
                    style={{ backgroundColor: moment.bgColor }}
                  >
                    {moment.icon}
                  </div>
                  <span className="text-[12px] font-semibold text-[#333] group-hover:text-[#e8431a] text-center w-full leading-tight transition-colors">
                    {moment.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Arrow button */}
            <button
              id="moments-next-btn"
              className="w-9 h-9 rounded-full border border-[#e5e5e5] flex items-center justify-center hover:border-[#e8431a] hover:text-[#e8431a] transition-all text-[#666] flex-shrink-0 cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ═══ 3. Explore Cuisines Section ═══ */}
      <section className="bg-white py-5">
        <div className="px-4 lg:px-16 xl:px-40">
          {/* Section header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-[16px] font-bold text-[#1a1a1a]">Explore cuisines</h2>
            <a
              href="#"
              id="view-all-cuisines-link"
              className="text-[13px] font-semibold text-[#e8431a] hover:underline flex items-center gap-1"
            >
              View all cuisines
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          </div>

          {/* Scrollable cuisine cards */}
          <div className="flex justify-between gap-4 overflow-x-auto scrollbar-hide pb-3">
            {cuisines.map((cuisine) => (
              <a
                key={cuisine.id}
                id={`cuisine-${cuisine.id}`}
                href="#"
                className="flex flex-col w-[180px] h-[138px] rounded-2xl overflow-hidden bg-[#fdf5eb] border border-[#f3e4d0] flex-shrink-0 group hover:shadow-md hover:border-[#e8431a]/30 transition-all duration-300"
              >
                <div className="w-full h-[98px] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cuisine.image}
                    alt={cuisine.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 flex items-center justify-center bg-[#fdf5eb] px-2 h-[28px]">
                  <span className="text-[12px] font-bold text-[#1a1a1a] group-hover:text-[#e8431a] transition-colors text-center truncate">
                    {cuisine.label}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. Featured in Lagos Section ═══ */}
      <section className="bg-white py-5">
        <div className="px-4 lg:px-16 xl:px-40">
          {/* Section header */}
          <div className="flex items-start gap-3 justify-between mb-4">
            <div>
              <h2 className="font-heading text-[18px] font-bold text-[#1a1a1a] tracking-tight">Featured in Lagos</h2>
              <p className="font-heading text-[12px] text-[#888] font-medium mt-0.5">Top-rated, loved by your community</p>
            </div>
            <a
              href="#"
              id="view-all-restaurants-link"
              className="text-[13px] font-bold text-[#e8431a] hover:underline flex items-center gap-1.5 mt-1"
            >
              View all restaurants
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          </div>

          {/* Relative wrapper for the scroll and floating button */}
          <div className="relative">
            {/* Scrollable restaurant cards row */}
            <div className="flex items-start gap-4 lg:justify-between overflow-x-auto scrollbar-hide pb-4">
              {restaurants.map((r) => (
                <div
                  key={r.id}
                  id={`restaurant-card-${r.id}`}
                  className="flex-shrink-0 max-w-[325px] lg:min-w-[280px] bg-white rounded-2xl border border-[#f0f0f0] overflow-hidden hover:shadow-md transition-shadow group cursor-pointer"
                >
                  {/* Card image */}
                  <div className="relative w-full h-[140px] bg-[#f9f9f9] overflow-hidden flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={r.imageUrl}
                      alt={r.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />

                    {/* Discount / status badge */}
                    {r.badge && (
                      <span
                        className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-[6px] text-[10px] font-bold text-white tracking-wide"
                        style={{ backgroundColor: r.badge.bg }}
                      >
                        {r.badge.label}
                      </span>
                    )}

                    {/* Favourite heart button */}
                    <HeartButton id={r.id} />
                  </div>

                  {/* Card body */}
                  <div className="p-3.5 pb-4">
                    {/* Title & Rating line */}
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="font-card font-bold text-[#1a1a1a] text-[14px] leading-tight truncate flex-1">{r.name}</h3>
                      <span className="flex items-center gap-1 flex-shrink-0">
                        <StarIcon />
                        <span className="text-[12px] font-bold text-[#1a1a1a]">{r.rating}</span>
                        <span className="text-[11px] text-[#888] font-medium">({r.reviewCount})</span>
                      </span>
                    </div>

                    {/* Cuisine details */}
                    <p className="font-card text-[11px] text-[#888] font-medium mb-3">{r.cuisine}</p>

                    {/* Delivery options */}
                    <div className="flex items-center gap-2 mb-1">
                      <span className="flex items-center gap-1 bg-[#f0fdf4] text-[#16a34a] border border-[#dcfce7] px-2 py-0.5 rounded-full text-[10px] font-bold">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-3" />
                          <circle cx="7.5" cy="17.5" r="2.5" />
                          <circle cx="17.5" cy="17.5" r="2.5" />
                        </svg>
                        Delivery
                      </span>
                      <span className="flex items-center gap-1 bg-[#f0fdf4] text-[#16a34a] border border-[#dcfce7] px-2 py-0.5 rounded-full text-[10px] font-bold">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                          <line x1="3" y1="6" x2="21" y2="6" />
                          <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                        Collection
                      </span>
                    </div>

                    {/* Reserve a table button */}
                    {r.hasReserve && (
                      <button
                        id={`reserve-${r.id}`}
                        className="w-full py-2 rounded-xl border border-[#ffccbc] bg-white text-[11px] font-bold text-[#e8431a] hover:bg-[#fff5f2] hover:border-[#e8431a] transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-3"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        Reserve a Table
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Next Button overlaid on last visible card */}
            <button
              id="restaurants-next-btn"
              className="absolute -right-14 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.15)] border border-[#f0f0f0] flex items-center justify-center hover:text-[#e8431a] hover:scale-105 hover:shadow-[0_4px_20px_rgba(232,67,26,0.2)] transition-all text-[#1a1a1a] z-20 cursor-pointer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Explore your Area Section */}
      <section className="bg-white py-5">
        <div className="px-4 lg:px-16 xl:px-40 grid grid-cols-1 lg:grid-cols-[1.75fr_1fr] gap-5 items-start">
          <div className="rounded-2xl border border-[#f0f0f0] bg-[#fdf6ec] overflow-hidden flex h-[210px] w-full flex-col sm:flex-row">
            
            {/* Left Beige Text & Tags Column */}
            <div className="w-full sm:w-[230px] p-5 pr-2 flex flex-col gap-3 flex-shrink-0 bg-[#fdf6ec]">
              <div>
                <h2 className="font-heading text-[17px] font-bold text-[#1a1a1a] tracking-tight">Explore your area</h2>
                <p className="font-heading text-[11px] text-[#888] font-semibold leading-tight mt-0.5">Great food, closer than you think.</p>
              </div>
              
              {/* Area tag chips */}
              <div className="flex flex-col gap-2">
                {areas.map((row, i) => (
                  <div key={i} className="flex gap-1.5 flex-wrap">
                    {row.map((area) => {
                      const isActive = area === "Victoria Island";
                      return (
                        <button
                          key={area}
                          id={`area-${area.toLowerCase().replace(/\s+/g, "-")}`}
                          className={`px-2.5 py-1.5 rounded-[9px] text-[10px] font-bold transition-all shadow-sm cursor-pointer ${
                            isActive
                              ? "bg-[#e8431a] text-white border border-[#e8431a]"
                              : "border border-[#e5e5e5] bg-white text-[#1a1a1a] hover:border-[#e8431a]"
                          }`}
                        >
                          {area}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Map Graphic Column with Floating Pins */}
            <div 
              className="flex-grow h-full relative overflow-hidden bg-[#e5e5e5] bg-cover bg-center hidden sm:block"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&h=400&fit=crop&q=80")' }}
            >
              {/* Map overlay overlay */}
              <div className="absolute inset-0 bg-[#faf6f3]/10 pointer-events-none" />

              {/* Floating Pin 1 (Top-Left: active orange badge) */}
              <div className="absolute top-[25px] left-[15%] flex flex-col items-center cursor-pointer hover:scale-105 transition-transform z-10">
                <div className="w-8 h-8 rounded-full border border-white bg-[#e8431a] overflow-hidden shadow-md flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=60&h=60&fit=crop&q=80" className="w-full h-full object-cover" alt="Active Pin" />
                </div>
                {/* Pointer Tip */}
                <div className="w-1.5 h-1.5 bg-[#e8431a] rotate-45 -mt-1 border-r border-b border-white" />
              </div>

              {/* Floating Pin 2 (Top-Center: white circle with food thumbnail) */}
              <div className="absolute top-[15px] left-[45%] flex flex-col items-center cursor-pointer hover:scale-105 transition-transform z-10">
                <div className="w-8 h-8 rounded-full border border-white bg-white overflow-hidden shadow-md flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=60&h=60&fit=crop&q=80" className="w-full h-full object-cover" alt="Sushi Pin" />
                </div>
                <div className="w-1.5 h-1.5 bg-white rotate-45 -mt-1 border-r border-b border-[#e5e5e5]" />
              </div>

              {/* Floating Pin 3 (Top-Right: white circle with food thumbnail) */}
              <div className="absolute top-[30px] right-[25%] flex flex-col items-center cursor-pointer hover:scale-105 transition-transform z-10">
                <div className="w-8 h-8 rounded-full border border-white bg-white overflow-hidden shadow-md flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=60&h=60&fit=crop&q=80" className="w-full h-full object-cover" alt="Pizza Pin" />
                </div>
                <div className="w-1.5 h-1.5 bg-white rotate-45 -mt-1 border-r border-b border-[#e5e5e5]" />
              </div>

              {/* Floating Pin 4 (Bottom-Left: white circle with food thumbnail) */}
              <div className="absolute bottom-[25px] left-[20%] flex flex-col items-center cursor-pointer hover:scale-105 transition-transform z-10">
                <div className="w-8 h-8 rounded-full border border-white bg-white overflow-hidden shadow-md flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=60&h=60&fit=crop&q=80" className="w-full h-full object-cover" alt="African Pin" />
                </div>
                <div className="w-1.5 h-1.5 bg-white rotate-45 -mt-1 border-r border-b border-[#e5e5e5]" />
              </div>

              {/* Floating Pin 5 (Bottom-Right: red pin pointer icon) */}
              <div className="absolute bottom-[20px] right-[30%] text-[#e8431a] drop-shadow-md z-10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="1.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" fill="white" />
                </svg>
              </div>

              {/* Centered Floating Restaurant Preview Card (Quench Bistro) */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 w-[190px] bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-[#f0f0f0] p-2.5 pb-2 flex flex-col">
                <div className="flex items-center">
                  {/* Thumbnail with red/orange alert dot */}
                  <div className="w-9 h-9 rounded-lg overflow-hidden bg-orange-100 flex-shrink-0 relative mr-2">
                    <img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=80&h=80&fit=crop&q=80" className="w-full h-full object-cover" alt="Quench Bistro" />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-[#e8431a] border border-white rounded-full" />
                  </div>
                  {/* Text labels */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-bold text-[#1a1a1a] truncate leading-tight">Quench Bistro</p>
                    <p className="text-[9px] text-[#444] font-bold flex items-center gap-0.5 mt-0.5 leading-none">
                      <StarIcon />
                      4.6 · 15–25 min
                    </p>
                    <p className="text-[8px] text-[#999] mt-0.5 font-medium leading-none">Lekki Phase 1</p>
                  </div>
                </div>
                {/* Outlined Full-Width Button */}
                <button
                  id="map-view-btn"
                  className="w-full mt-2.5 py-1 rounded-[6px] border border-[#ffccbc] hover:border-[#e8431a] hover:bg-[#fff5f2] text-[10px] font-bold text-[#e8431a] transition-all text-center flex items-center justify-center cursor-pointer leading-tight"
                >
                  View
                </button>
              </div>
            </div>

          </div>

          {/* ── Right Panel: Reserve + Pre-Order (Horizontal Box with Curved Sweep) ── */}
          <div className="rounded-2xl border border-[#f0f0f0] bg-[#fdf6ec] overflow-hidden flex h-[210px] w-full">
            
            {/* Left Beige Text & Checklist Column */}
            <div className="flex-grow p-5 pr-1 flex flex-col justify-between bg-[#fdf6ec] relative z-10">
              <div>
                <h2 className="font-heading text-[17px] font-bold text-[#1a1a1a] tracking-tight leading-tight">Reserve + Pre-Order</h2>
                <p className="font-heading text-[11px] text-[#888] font-semibold leading-tight mb-2.5 mt-0.5">Book your table and pre-order your favourites.</p>
                
                {/* Checklist with custom inline checkmark icons */}
                <ul className="space-y-1.5 mb-2">
                  {["No waiting", "Confirmed booking", "Food ready on arrival"].map((feature) => (
                    <li key={feature} className="flex items-center gap-1.5 text-[11px] font-bold text-[#333] leading-none">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#e8431a" strokeWidth="4" className="flex-shrink-0">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Reserve Now red button */}
              <button
                id="reserve-now-btn"
                className="px-3.5 py-2 bg-[#e8431a] hover:bg-[#c93610] text-white font-bold text-[10px] rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer w-fit leading-none"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="flex-shrink-0">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Reserve Now
              </button>
            </div>

            {/* Right Curved Restaurant Ambiance Photo Column */}
            <div className="w-[160px] sm:w-[240px] h-full flex-shrink-0 overflow-hidden relative z-0">
              {/* Restaurant ambiance image */}
              <img 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=400&fit=crop&q=80" 
                className="w-full h-full object-cover" 
                alt="Ambiance" 
              />
              
              {/* Soft overlay on image for consistency */}
              <div className="absolute inset-0 bg-[#e8431a]/5 pointer-events-none z-10" />

              {/* SVG Curved Swoop Overlay (draws a beige wedge on the left of the image) */}
              <svg 
                className="absolute top-0 bottom-0 left-[-1px] w-[40px] sm:w-[110px] h-[101%] text-[#fdf6ec] fill-current pointer-events-none z-20"
                viewBox="0 0 100 100" 
                preserveAspectRatio="none"
              >
                <path d="M0,0 L100,0 Q35,50 0,100 Z" />
              </svg>
            </div>

          </div>

        </div>
      </section>

      {/* ═══ 6. Promo Cards Section ═══ */}
      <section className="bg-white py-8">
        <div className="px-4 lg:px-16 xl:px-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Group Order Made Easy */}
          <div
            id="promo-group-order"
            className="rounded-2xl border border-[#f5e4d3]/70 overflow-hidden flex h-[170px] w-full relative"
          >
            {/* Full-bleed background dining image */}
            <div className="absolute inset-0 z-0 w-full h-full">
              <img
                src="/images/group-dining.png"
                alt="Friends eating"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Custom linear gradient overlay to fade peach background into the photo */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to right, #fef0e3 0%, #fef0e3 35%, rgba(254,240,227,0.8) 45%, rgba(254,240,227,0) 70%)"
              }}
            />
            {/* Left text and button column positioned on top of the background image */}
            <div className="relative z-20 p-5 py-7 flex flex-col justify-between h-full w-full">
              <div>
                <h3 className="font-heading text-[14px] font-semibold text-[#1a1a1a] tracking-tight leading-tight">Group Order Made Easy</h3>
                <p className="font-heading text-[12px] font-medium text-[#666] leading-snug mt-1 max-w-[130px]">
                  Perfect for offices, parties and events.
                </p>
              </div>
              <button
                id="group-order-cta"
                className="px-3.5 py-2 bg-[#e8431a] hover:bg-[#c93610] text-white font-semibold text-[12px] rounded-lg transition-all w-fit shadow-sm leading-none cursor-pointer"
              >
                Start a Group Order
              </button>
            </div>
          </div>

          {/* Card 2: Hutz Rewards */}
          <div
            id="promo-rewards"
            className="rounded-2xl border border-[#f5edd7]/70 bg-[#fff9eb] flex h-[170px] justify-between overflow-hidden"
          >
            {/* Left text column */}
            <div className="flex-grow p-5 py-7 pr-1 flex flex-col justify-between z-10">
                <h3 className="font-heading text-[14px] font-semibold text-[#1a1a1a] tracking-tight leading-tight">Hutz Rewards</h3>
                <p className="font-heading text-[12px] font-medium text-[#666] leading-snug mt-1 max-w-[135px]">
                  Eat more. Earn more. Unlock perks and enjoy exclusive offers.
                </p>
              <a
                href="#"
                id="rewards-cta"
                className="text-[12px] font-bold text-[#e8431a] hover:underline flex items-center gap-1 cursor-pointer leading-none"
              >
                Join for Free
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </div>
            {/* Right vector illustration column */}
            <div className="w-[110px] h-full flex-shrink-0 flex items-center justify-center pr-5 z-0">
              {/* Soft gold circle gradient */}
              <div className="w-[84px] h-[84px] rounded-full bg-white flex items-center justify-center shadow-[0_4px_16px_rgba(253,230,138,0.25)] relative">
                {/* SVG gold crown */}
                <svg width="70" height="70" viewBox="0 0 24 24" fill="#eab308" className="drop-shadow-sm">
                  <path d="M5 16L3.2 6.8c-.1-.6.5-1.1 1.1-.9L8.5 8.2l3-5.2c.3-.5 1.1-.5 1.4 0l3 5.2 4.2-2.3c.6-.3 1.2.2 1.1.9L19 16H5zm2.5 2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-9z" />
                  <circle cx="3.2" cy="6.2" r="1.1" fill="#eab308" />
                  <circle cx="12" cy="2.5" r="1.1" fill="#eab308" />
                  <circle cx="20.8" cy="6.2" r="1.1" fill="#eab308" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 3: Fan Club */}
          <div
            id="promo-fan-club"
            className="rounded-2xl border border-[#e5dfed]/70 bg-[#f5f0fa] flex h-[170px] justify-between overflow-hidden"
          >
            {/* Left text column */}
            <div className="flex-grow p-5 py-7 pr-1 flex flex-col justify-between z-10">
                <h3 className="font-heading text-[14px] font-semibold text-[#1a1a1a] tracking-tight leading-tight">Fan Club</h3>
                <p className="font-heading text-[12px] font-medium text-[#666] leading-snug ">
                  Follow your favourite restaurants and get updates &amp; offers first.
                </p>
              <a
                href="#"
                id="fan-club-cta"
                className="text-[12px] font-bold text-[#e8431a] hover:underline flex items-center gap-1 cursor-pointer leading-none"
              >
                Explore Fan Clubs
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </div>
            {/* Right overlapping circles column */}
            <div className="w-[115px] h-full flex-shrink-0 relative overflow-hidden z-0">
              {/* Overlapping circle thumbnails matching reference layout */}
              <div className="absolute w-[55px] h-[55px] rounded-full border-2 border-white overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.06)] top-[40px] right-[40px] z-10 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=80&h=80&fit=crop&q=80"
                  alt="Pizza Thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute w-[52px] h-[52px] rounded-full border-2 border-white overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.06)] bottom-[18px] left-[-2px] z-20 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=80&h=80&fit=crop&q=80"
                  alt="Salad Thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute w-[58px] h-[58px] rounded-full border-2 border-white overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.06)] bottom-[25px] right-[6px] z-30 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=80&h=80&fit=crop&q=80"
                  alt="Burger Thumbnail"
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay to make +12 text highly readable */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="text-[12px] text-white font-bold tracking-tight">+12</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Reorder in a Tap */}
          <div
            id="promo-reorder"
            className="rounded-2xl border border-[#f5e3d7]/70 bg-[#fff4ec] flex h-[170px] justify-between overflow-hidden"
          >
            {/* Left text column */}
            <div className="flex-grow p-5 pr-1 flex flex-col justify-between z-10">
              <div>
                <h3 className="font-heading text-[14px] font-semibold text-[#1a1a1a] tracking-tight leading-tight">Reorder in a Tap</h3>
                <p className="font-heading text-[12px] font-medium text-[#666] leading-snug mt-1 ">
                  Your usuals, faster. <br/> Right where you left off.
                </p>
              </div>
              <button
                id="reorder-cta"
                className="px-3.5 py-2 bg-white border border-[#ffccbc] hover:border-[#e8431a] hover:bg-[#fff5f2] text-[#e8431a] font-semibold text-[12px] rounded-lg transition-all w-fit shadow-sm leading-none cursor-pointer"
              >
                Reorder Now
              </button>
            </div>
            {/* Right illustration column */}
            <div className="w-[120px] h-full flex-shrink-0 flex items-center justify-center relative z-0">
              {/* Soft warm circle backdrop */}
              <div className="w-[90px] h-[90px] rounded-full bg-[#ffe8d6] flex items-center justify-center shadow-[0_4px_16px_rgba(232,67,26,0.08)]">
                <img
                  src="/images/reorder-bag.png"
                  alt="3D Reorder Bag"
                  className="w-[72px] h-[72px] object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══ 7. Local Restaurants Near You ═══ */}
      <section className="bg-white py-6">
        <div className="px-4 lg:px-16 xl:px-40">
          <div className="mb-4">
            <h2 className="font-heading text-[18px] font-bold text-[#1a1a1a] tracking-tight">Local Restaurants Near You</h2>
            <p className="font-heading text-[12px] text-[#888] font-medium mt-0.5">Ordering from just around the corner</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {localRestaurants.map((restaurant, i) => (
              <div
                key={`${restaurant.id}-${i}`}
                className="bg-white rounded-2xl border border-[#f0f0f0] overflow-hidden hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                <div className="relative w-full aspect-[16/9] max-h-[200px] overflow-hidden bg-gray-50">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                  />
                  <HeartButton id={restaurant.id} />
                </div>
                <div className="p-4 border-t border-[#f0f0f0]">
                  <h3 className="font-card text-[14px] font-bold text-[#1a1a1a] mb-1.5 truncate">
                    {restaurant.name}
                  </h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="flex items-center gap-0.5 bg-[#fff0ec] text-[#e8431a] px-2 py-0.5 rounded-[6px] text-[10px] font-bold">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      {restaurant.rating}
                    </span>
                    <span className="text-[#666] bg-[#f5f5f5] border border-[#e5e5e5] px-2 py-0.5 rounded-[6px] text-[10px] font-medium">
                      {restaurant.cuisine}
                    </span>
                    <span className="text-[#666] bg-[#f5f5f5] border border-[#e5e5e5] px-2 py-0.5 rounded-[6px] text-[10px] font-medium">
                      {restaurant.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 8. Top 10 Items of the Day ═══ */}
      <section className="bg-white py-6">
        <div className="px-4 lg:px-16 xl:px-40">
          <div className="mb-4">
            <h2 className="font-heading text-[18px] font-bold text-[#1a1a1a] tracking-tight">Top 10 items of the day</h2>
            <p className="font-heading text-[12px] text-[#888] font-medium mt-0.5">Today&apos;s most-ordered dishes across the city</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {top10Items.map((item, i) => (
              <div
                key={`${item.id}-${i}`}
                className="bg-white rounded-2xl border border-[#f0f0f0] overflow-hidden hover:shadow-md transition-all duration-300 group relative flex flex-col"
              >
                <div className="relative h-[140px] w-full overflow-hidden bg-gray-50">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-3.5 relative flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-bold tracking-wider text-[#999] uppercase mb-0.5 block">
                      {item.restaurant}
                    </span>
                    <h3 className="font-card text-[14px] font-bold text-[#1a1a1a] mb-1.5 truncate pr-8">
                      {item.name}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[12px] font-bold text-[#e8431a]">
                      {item.price}
                    </span>
                  </div>
                  <button
                    id={`add-to-cart-${item.id}-${i}`}
                    className="absolute bottom-3.5 right-3.5 w-7 h-7 bg-[#e8431a] hover:bg-[#c93610] text-white rounded-full flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 9. Top Picks in Your Neighbourhood ═══ */}
      <section className="bg-white py-6">
        <div className="px-4 lg:px-16 xl:px-40">
          <div className="mb-4">
            <h2 className="font-heading text-[18px] font-bold text-[#1a1a1a] tracking-tight">Top picks in your neighbourhood</h2>
            <p className="font-heading text-[12px] text-[#888] font-medium mt-0.5">Handpicked favourites close to you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topPicks.map((pick, i) => (
              <div
                key={`${pick.id}-${i}`}
                className="relative h-[160px] rounded-2xl overflow-hidden group cursor-pointer hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={pick.image}
                  alt={pick.name}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/45 group-hover:bg-black/40 transition-colors z-10" />
                <div className="absolute bottom-4 left-4 text-white z-20">
                  <h3 className="font-card text-[16px] font-bold leading-tight tracking-tight mb-0.5">
                    {pick.name}
                  </h3>
                  <p className="font-card text-[11px] font-medium opacity-90">
                    {pick.cuisine} · {pick.time} · {pick.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 10. Reserve Your Table Banner ═══ */}
      <section className="bg-white py-6">
        <div className="px-4 lg:px-16 xl:px-40">
          <div className="relative h-[200px] rounded-2xl overflow-hidden bg-cover bg-center">
            <img
              src="/images/reserve-banner.png"
              alt="Cozy restaurant atmosphere"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20">
              <h2 className="font-heading text-[24px] md:text-[26px] font-extrabold text-white tracking-tight mb-1">
                Reserve Your Table
              </h2>
              <p className="text-[12px] md:text-[13px] text-white/80 font-medium mb-4 max-w-[320px] md:max-w-none">
                Book a table at the best restaurants in your area
              </p>
              <button
                id="banner-reserve-cta"
                className="px-5 py-2 bg-[#e8431a] hover:bg-[#c93610] text-white font-bold text-[12px] rounded-lg transition-all shadow-md flex items-center gap-1.5 cursor-pointer hover:scale-102 active:scale-98 animate-pulse-subtle"
              >
                Explore Restaurants
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 11. Top Reservation Spots in Your Area ═══ */}
      <section className="bg-white py-6">
        <div className="px-4 lg:px-16 xl:px-40">
          <div className="mb-4">
            <h2 className="font-heading text-[18px] font-bold text-[#1a1a1a] tracking-tight">Top Reservation spots in your area</h2>
            <p className="font-heading text-[12px] text-[#888] font-medium mt-0.5">Book your next dining experience</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reservationSpots.map((spot, i) => (
              <div
                key={`${spot.id}-${i}`}
                className="bg-white rounded-2xl border border-[#f0f0f0] overflow-hidden hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                <div className="relative w-full aspect-[16/9] max-h-[200px] overflow-hidden bg-gray-50">
                  <img
                    src={spot.image}
                    alt={spot.name}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 right-3 bg-white px-2 py-0.5 rounded-[6px] shadow-sm flex items-center gap-1 z-20">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="#eab308" stroke="#eab308" strokeWidth="1">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <span className="text-[10px] font-bold text-[#1a1a1a]">{spot.rating}</span>
                  </div>
                  <HeartButton id={spot.id} />
                </div>
                <div className="p-4 flex flex-col">
                  <h3 className="font-card text-[14px] font-bold text-[#1a1a1a] mb-1">
                    {spot.name}
                  </h3>
                  <p className="text-[11px] text-[#888] font-medium">
                    {spot.cuisine}
                  </p>
                  <p className="text-[11px] text-[#888] font-medium mb-3">
                    {spot.price} · {spot.time}
                  </p>
                  <span className="px-2.5 py-1 bg-[#fff0ec] text-[#e8431a] font-bold text-[9px] rounded-full w-fit tracking-wide uppercase">
                    {spot.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
