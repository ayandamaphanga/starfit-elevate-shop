import { Product } from "@/types/product";
import productTee from "@/assets/product-tee.jpg";
import productLeggings from "@/assets/product-leggings.jpg";
import productShaker from "@/assets/product-shaker.jpg";
import productShorts from "@/assets/product-shorts.jpg";
import productHoodie from "@/assets/product-hoodie.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Star-Fit Seamless Training Tee",
    category: "T-Shirts",
    gender: "Men",
    oldPrice: 49.0,
    newPrice: 35.0,
    description:
      "Lightweight, breathable, and engineered for peak performance. Seamless comfort and modern fit.",
    sku: "SF-TEE-001",
    image: productTee,
    sizes: ["S", "M", "L", "XL"],
    reviews: [
      {
        id: "r1",
        author: "Mike Johnson",
        rating: 5,
        date: "2025-09-15",
        comment: "Perfect fit and super comfortable! The fabric is breathable and doesn't show sweat. Highly recommend for intense workouts.",
        verified: true,
      },
      {
        id: "r2",
        author: "Alex Chen",
        rating: 4,
        date: "2025-09-10",
        comment: "Great quality shirt. Fits true to size. Only wish it came in more colors.",
        verified: true,
      },
      {
        id: "r3",
        author: "David Martinez",
        rating: 5,
        date: "2025-09-05",
        comment: "This is my third one! Best training tee I've ever owned. Seamless design eliminates chafing.",
        verified: true,
      },
    ],
  },
  {
    id: "2",
    name: "Star-Fit Limitless Leggings",
    category: "Leggings",
    gender: "Women",
    oldPrice: 65.0,
    newPrice: 49.0,
    description:
      "Sculpting, squat-proof leggings with a high waistband for comfort and style.",
    sku: "SF-LEG-001",
    image: productLeggings,
    sizes: ["XS", "S", "M", "L", "XL"],
    reviews: [
      {
        id: "r4",
        author: "Sarah Williams",
        rating: 5,
        date: "2025-09-20",
        comment: "These leggings are amazing! Truly squat-proof and the high waist stays in place. Worth every penny.",
        verified: true,
      },
      {
        id: "r5",
        author: "Emma Davis",
        rating: 5,
        date: "2025-09-12",
        comment: "Best leggings I've owned. The fabric is thick but breathable. I wear them for yoga and gym sessions.",
        verified: true,
      },
    ],
  },
  {
    id: "3",
    name: "Star-Fit Shaker Bottle",
    category: "Accessories",
    gender: "Unisex",
    oldPrice: 15.0,
    newPrice: 12.0,
    description:
      "BPA-free 14oz shaker bottle with secure twist lid and metal mixing ball.",
    sku: "SF-ACC-001",
    image: productShaker,
    reviews: [
      {
        id: "r6",
        author: "Tom Rodriguez",
        rating: 4,
        date: "2025-09-18",
        comment: "Good quality shaker. The mixing ball works great. Lid seals tight with no leaks.",
        verified: true,
      },
    ],
  },
  {
    id: "4",
    name: "Star-Fit Elevate Shorts",
    category: "Shorts",
    gender: "Women",
    oldPrice: 42.0,
    newPrice: 36.0,
    description:
      "Supportive, stretchy fabric for mobility during any workout.",
    sku: "SF-SHO-001",
    image: productShorts,
    sizes: ["XS", "S", "M", "L", "XL"],
    reviews: [
      {
        id: "r7",
        author: "Jessica Lee",
        rating: 5,
        date: "2025-09-22",
        comment: "Love these shorts! Perfect length and the fabric is so soft. Great for running and HIIT workouts.",
        verified: true,
      },
    ],
  },
  {
    id: "5",
    name: "Star-Fit Core Hoodie",
    category: "Hoodies",
    gender: "Unisex",
    oldPrice: 70.0,
    newPrice: 59.0,
    description:
      "Soft fleece hoodie for warmth, comfort, and style — both in and out of the gym.",
    sku: "SF-HOO-001",
    image: productHoodie,
    sizes: ["S", "M", "L", "XL", "XXL"],
    reviews: [
      {
        id: "r8",
        author: "Ryan Cooper",
        rating: 5,
        date: "2025-09-25",
        comment: "Super cozy and warm. I wear it to the gym and casually. The fit is perfect and quality is top-notch.",
        verified: true,
      },
      {
        id: "r9",
        author: "Lisa Park",
        rating: 4,
        date: "2025-09-14",
        comment: "Great hoodie! Soft material and nice design. Runs slightly large so size down if you want a fitted look.",
        verified: true,
      },
    ],
  },
];
