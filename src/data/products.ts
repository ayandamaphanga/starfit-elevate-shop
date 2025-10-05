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
  },
];
