export interface Product {
  id: string;
  name: string;
  category: "T-Shirts" | "Leggings" | "Shorts" | "Hoodies" | "Accessories";
  gender: "Men" | "Women" | "Unisex";
  oldPrice: number;
  newPrice: number;
  description: string;
  sku: string;
  image: string;
  sizes?: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
}
