import { IoFlash, IoHeart, IoCompass } from "react-icons/io5";
import { HiOfficeBuilding } from "react-icons/hi";
import { MdLunchDining, MdGroups, MdEventAvailable } from "react-icons/md";
import { BiRefresh } from "react-icons/bi";

// ── 1. Food Moments Data ──
export const moments = [
  {
    id: "hungry-now",
    label: "Hungry Now",
    bgColor: "#fff0ec",
    icon: <IoFlash size={36} color="#e8431a" />,
  },
  {
    id: "quick-lunch",
    label: "Quick Lunch",
    bgColor: "#f0fdf4",
    icon: <MdLunchDining size={36} color="#16a34a" />,
  },
  {
    id: "family-dinner",
    label: "Family Dinner",
    bgColor: "#f5f3ff",
    icon: <MdGroups size={36} color="#7c3aed" />,
  },
  {
    id: "date-night",
    label: "Date Night",
    bgColor: "#fff1f2",
    icon: <IoHeart size={36} color="#e11d48" />,
  },
  {
    id: "office-lunch",
    label: "Office Lunch",
    bgColor: "#f0f9ff",
    icon: <HiOfficeBuilding size={36} color="#0ea5e9" />,
  },
  {
    id: "reserve-tonight",
    label: "Reserve Tonight",
    bgColor: "#fffbeb",
    icon: <MdEventAvailable size={36} color="#d97706" />,
  },
  {
    id: "reorder-usual",
    label: "Reorder My Usual",
    bgColor: "#ecfeff",
    icon: <BiRefresh size={36} color="#0891b2" />,
  },
  {
    id: "try-something-new",
    label: "Try Something New Nearby",
    bgColor: "#ecfdf5",
    icon: <IoCompass size={36} color="#059669" />,
  },
];

// ── 2. Explore Cuisines Data ──
export const cuisines = [
  {
    id: "nigerian",
    label: "Nigerian",
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=300&h=300&fit=crop&q=80",
  },
  {
    id: "caribbean",
    label: "Caribbean",
    image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=300&h=300&fit=crop&q=80",
  },
  {
    id: "pizza",
    label: "Pizza",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=300&fit=crop&q=80",
  },
  {
    id: "sushi",
    label: "Sushi",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=300&h=300&fit=crop&q=80",
  },
  {
    id: "burgers",
    label: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop&q=80",
  },
  {
    id: "healthy",
    label: "Healthy",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop&q=80",
  },
  {
    id: "desserts",
    label: "Desserts",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop&q=80",
  },
];

// ── 3. Featured Restaurants Data ──
export type Badge = { label: string; color: string; bg: string };

export type Restaurant = {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  reviewCount: string;
  badge?: Badge;
  hasReserve: boolean;
  imageUrl: string;
};

export const restaurants: Restaurant[] = [
  {
    id: "buka-restaurant",
    name: "Buka Restaurant",
    cuisine: "Nigerian · Modern",
    rating: 4.8,
    reviewCount: "3.2K",
    badge: { label: "20% OFF", color: "#fff", bg: "#e8431a" },
    hasReserve: true,
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "the-grub-shack",
    name: "The Grub Shack",
    cuisine: "Burgers · American",
    rating: 4.6,
    reviewCount: "1.8K",
    badge: { label: "10% OFF", color: "#fff", bg: "#e8431a" },
    hasReserve: false,
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "sushi-central",
    name: "Sushi Central",
    cuisine: "Sushi · Japanese",
    rating: 4.7,
    reviewCount: "2.5K",
    badge: { label: "Popular", color: "#fff", bg: "#e8431a" },
    hasReserve: true,
    imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "bella-napoli",
    name: "Bella Napoli",
    cuisine: "Italian · Pizza",
    rating: 4.5,
    reviewCount: "1.2K",
    badge: { label: "New", color: "#fff", bg: "#e8431a" },
    hasReserve: false,
    imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=400&fit=crop&q=80",
  },
];

// ── 4. Explore Area Data ──
export const areas = [
  ["Victoria Island", "Lekki", "Ikeja"],
  ["Yaba", "Surulere", "Ajah"],
];

// ── 5. Integrated Sections Mock Data ──
const rawLocalRestaurants = [
  {
    id: "local-1",
    name: "Adams Ethiopian Restaurant",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=400&fit=crop&q=80",
    rating: "New",
    cuisine: "Ethiopian",
    time: "30 - 45 min"
  },
  {
    id: "local-2",
    name: "Sherif Moroccan Kitchen",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=600&h=400&fit=crop&q=80",
    rating: "4.7",
    cuisine: "Moroccan",
    time: "25 - 35 min"
  },
  {
    id: "local-3",
    name: "Chopstix Oriental",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&h=400&fit=crop&q=80",
    rating: "New",
    cuisine: "Asian · Noodles",
    time: "20 - 30 min"
  }
];

const rawTop10Items = [
  {
    id: "item-1",
    restaurant: "ROOTS LEBANESE",
    name: "French Fries",
    price: "$ 4.95",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&h=400&fit=crop&q=80"
  },
  {
    id: "item-2",
    restaurant: "THE GRILL HOUSE",
    name: "Gourmet Cheeseburger",
    price: "$ 8.50",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop&q=80"
  },
  {
    id: "item-3",
    restaurant: "PAPA PIZZA",
    name: "Pepperoni Pizza Slice",
    price: "$ 3.25",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop&q=80"
  },
  {
    id: "item-4",
    restaurant: "SWEET TREATS",
    name: "Chocolate Cupcake",
    price: "$ 2.99",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop&q=80"
  }
];

const rawTopPicks = [
  {
    id: "pick-1",
    name: "Suya & Grills",
    cuisine: "Nigerian",
    time: "30 - 45 min",
    price: "$$",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop&q=80"
  },
  {
    id: "pick-2",
    name: "Gourmet Pasta Bowl",
    cuisine: "Italian",
    time: "15 - 25 min",
    price: "$$$",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&h=400&fit=crop&q=80"
  },
  {
    id: "pick-3",
    name: "Fresh Poke Bowls",
    cuisine: "Healthy · Seafood",
    time: "10 - 20 min",
    price: "$$",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop&q=80"
  }
];

const rawReservationSpots = [
  {
    id: "spot-1",
    name: "The Ivy Cafe",
    cuisine: "British · European",
    price: "£££",
    time: "20 - 30 mins",
    rating: "4.9",
    highlight: "Great for Dates",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop&q=80"
  },
  {
    id: "spot-2",
    name: "Le Jardin Bistro",
    cuisine: "French Gourmet",
    price: "££££",
    time: "35 - 50 mins",
    rating: "4.8",
    highlight: "Stunning Gardens",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&q=80"
  },
  {
    id: "spot-3",
    name: "The Sushi Sanctuary",
    cuisine: "Japanese Fine-Dining",
    price: "£££",
    time: "15 - 25 mins",
    rating: "4.7",
    highlight: "Intimate Seating",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&h=400&fit=crop&q=80"
  }
];

// Helper to shuffle array
function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

// Helpers to slightly vary values for true randomness
const ratings = ["4.6", "4.7", "4.8", "4.9"];
const times = ["20 - 30 mins", "25 - 35 mins", "30 - 45 mins"];
const prices = ["$$", "$$$", "$$$$"];

export function getRawLocalRestaurants() {
  return shuffle(rawLocalRestaurants).map(item => ({
    ...item,
    time: times[Math.floor(Math.random() * times.length)]
  }));
}

export function getRawTop10Items() {
  return shuffle(rawTop10Items);
}

export function getRawTopPicks() {
  return shuffle(rawTopPicks).map(item => ({
    ...item,
    time: times[Math.floor(Math.random() * times.length)],
    price: prices[Math.floor(Math.random() * prices.length)]
  }));
}

export function getRawReservationSpots() {
  return shuffle(rawReservationSpots).map(item => ({
    ...item,
    rating: ratings[Math.floor(Math.random() * ratings.length)],
    time: times[Math.floor(Math.random() * times.length)]
  }));
}
