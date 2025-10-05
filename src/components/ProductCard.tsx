import { Link } from "react-router-dom";
import { Product } from "@/types/product";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const discountPercentage = Math.round(
    ((product.oldPrice - product.newPrice) / product.oldPrice) * 100
  );

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="relative overflow-hidden bg-secondary rounded-sm mb-4 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {discountPercentage > 0 && (
          <Badge className="absolute top-3 left-3 bg-sale text-white font-semibold">
            SALE -{discountPercentage}%
          </Badge>
        )}
      </div>
      <div className="space-y-1">
        <p className="text-xs text-muted-foreground uppercase tracking-wide">
          {product.category}
        </p>
        <h3 className="font-semibold text-sm group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm line-through text-price-old">
            ${product.oldPrice.toFixed(2)}
          </span>
          <span className="text-lg font-bold">
            ${product.newPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
