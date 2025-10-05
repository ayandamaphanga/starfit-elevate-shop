import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, X } from "lucide-react";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8">
          Add some products to get started!
        </p>
        <Link to="/shop">
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            SHOP NOW
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={`${item.id}-${item.selectedSize}`}
              className="flex gap-4 border border-border rounded-sm p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover bg-secondary rounded-sm"
              />
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{item.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {item.selectedSize && `Size: ${item.selectedSize}`}
                </p>
                <p className="font-bold">${item.newPrice.toFixed(2)}</p>
              </div>
              <div className="flex flex-col items-end justify-between">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    removeFromCart(item.id, item.selectedSize)
                  }
                >
                  <X className="h-4 w-4" />
                </Button>
                <div className="flex items-center gap-2 border border-border rounded-sm">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        item.quantity - 1,
                        item.selectedSize
                      )
                    }
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center font-medium">
                    {item.quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        item.quantity + 1,
                        item.selectedSize
                      )
                    }
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="border border-border rounded-sm p-6 h-fit space-y-4">
          <h2 className="text-2xl font-bold">Order Summary</h2>
          <div className="space-y-2 py-4 border-b border-border">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-semibold">
                ${getCartTotal().toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span className="font-semibold">FREE</span>
            </div>
          </div>
          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>
          <Button
            size="lg"
            className="w-full bg-accent hover:bg-accent/90 font-bold"
          >
            PROCEED TO CHECKOUT
          </Button>
          <Link to="/shop">
            <Button variant="outline" size="lg" className="w-full">
              CONTINUE SHOPPING
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
