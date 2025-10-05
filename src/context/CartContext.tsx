import React, { createContext, useContext, useState, ReactNode } from "react";
import { CartItem } from "@/types/product";

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string, size?: string) => void;
  updateQuantity: (id: string, quantity: number, size?: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  announcement: string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [announcement, setAnnouncement] = useState("");

  const announce = (message: string) => {
    setAnnouncement(message);
    setTimeout(() => setAnnouncement(""), 1000);
  };

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.selectedSize === item.selectedSize
      );

      if (existingItem) {
        announce(`Updated ${item.name} quantity to ${existingItem.quantity + item.quantity} in cart`);
        return prevCart.map((cartItem) =>
          cartItem.id === item.id &&
          cartItem.selectedSize === item.selectedSize
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }

      announce(`Added ${item.name} to cart`);
      return [...prevCart, item];
    });
  };

  const removeFromCart = (id: string, size?: string) => {
    setCart((prevCart) => {
      const item = prevCart.find((i) => i.id === id && i.selectedSize === size);
      if (item) {
        announce(`Removed ${item.name} from cart`);
      }
      return prevCart.filter(
        (item) => !(item.id === id && item.selectedSize === size)
      );
    });
  };

  const updateQuantity = (id: string, quantity: number, size?: string) => {
    if (quantity <= 0) {
      removeFromCart(id, size);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.selectedSize === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    announce("Cart cleared");
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (total, item) => total + item.newPrice * item.quantity,
      0
    );
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
        announcement,
      }}
    >
      {children}
      <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </div>
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
