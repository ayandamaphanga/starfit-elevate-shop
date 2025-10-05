import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import { toast } from "@/hooks/use-toast";
import { ChevronLeft } from "lucide-react";
import ProductReviews from "@/components/ProductReviews";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("");

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/shop">
          <Button>Back to Shop</Button>
        </Link>
      </div>
    );
  }

  const discountPercentage = Math.round(
    ((product.oldPrice - product.newPrice) / product.oldPrice) * 100
  );

  const handleAddToCart = () => {
    if (product.sizes && !selectedSize) {
      toast({
        title: "Please select a size",
        variant: "destructive",
      });
      return;
    }

    addToCart({
      ...product,
      quantity: 1,
      selectedSize: selectedSize || undefined,
    });

    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/shop"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-accent mb-8"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to Shop
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative bg-secondary rounded-sm overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            width="800"
            height="800"
          />
          <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-sm">
            <span className="text-sm font-black tracking-tight">STAR-FIT</span>
          </div>
          {discountPercentage > 0 && (
            <Badge className="absolute top-4 left-4 bg-sale text-white font-semibold text-base px-3 py-1">
              SALE -{discountPercentage}%
            </Badge>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
              {product.category} • {product.gender}
            </p>
            <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
            <p className="text-sm text-muted-foreground">SKU: {product.sku}</p>
          </div>

          <div className="flex items-baseline space-x-4">
            <span className="text-3xl font-bold">
              ${product.newPrice.toFixed(2)}
            </span>
            <span className="text-xl line-through text-price-old">
              ${product.oldPrice.toFixed(2)}
            </span>
          </div>

          {product.sizes && (
            <div>
              <Label className="block mb-3 font-semibold">Select Size</Label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className="w-16"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
          )}

          <Button
            size="lg"
            onClick={handleAddToCart}
            className="w-full bg-accent hover:bg-accent/90 text-white font-bold"
          >
            ADD TO CART
          </Button>

          <div className="border-t border-border pt-6">
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          <div className="border-t border-border pt-6">
            <h3 className="font-semibold mb-2">Details</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Premium quality materials</li>
              <li>• Machine washable</li>
              <li>• Designed for performance</li>
              <li>• Free shipping on orders over $50</li>
            </ul>
          </div>
        </div>
      </div>

      <ProductReviews reviews={product.reviews} />
    </div>
  );
};

const Label = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <label className={className}>{children}</label>;

export default ProductDetail;
