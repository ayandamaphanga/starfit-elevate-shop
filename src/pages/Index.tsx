import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import Newsletter from "@/components/Newsletter";
import { products } from "@/data/products";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <img
          src={heroBanner}
          alt="Fall Collection"
          className="w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
          width="1440"
          height="600"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
              FALL COLLECTION
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-medium">
              Elevate Your Workout. Redefine Your Style.
            </p>
            <Link to="/shop">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-bold px-8 text-lg"
              >
                SHOP NOW
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Bestsellers</h2>
          <p className="text-muted-foreground">
            Our most popular gear for peak performance
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/shop">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary hover:bg-primary hover:text-primary-foreground font-semibold"
            >
              EXPLORE COLLECTION
            </Button>
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Index;
