import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const { getCartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      // Focus first link when menu opens
      const firstLink = mobileMenuRef.current?.querySelector("a");
      firstLink?.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background" role="banner">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-ring focus:rounded">
            <h1 className="text-2xl font-black tracking-tight">STAR-FIT</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            <Link
              to="/"
              className="text-sm font-medium hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:rounded px-2 py-1"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-sm font-medium hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:rounded px-2 py-1"
            >
              Shop
            </Link>
            <Link
              to="/shop?gender=Men"
              className="text-sm font-medium hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:rounded px-2 py-1"
            >
              Men
            </Link>
            <Link
              to="/shop?gender=Women"
              className="text-sm font-medium hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:rounded px-2 py-1"
            >
              Women
            </Link>
            <Link
              to="/shop?category=Accessories"
              className="text-sm font-medium hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:rounded px-2 py-1"
            >
              Accessories
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:rounded px-2 py-1"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:rounded px-2 py-1"
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Account">
              <User className="h-5 w-5" />
            </Button>
            <Link to="/cart" aria-label="Shopping cart">
              <Button variant="ghost" size="icon" className="relative" aria-label="Shopping cart">
                <ShoppingCart className="h-5 w-5" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-semibold">
                    {getCartCount()}
                  </span>
                )}
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              ref={menuButtonRef}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden py-4 border-t border-border"
            aria-label="Mobile navigation"
            ref={mobileMenuRef}
          >
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-sm font-medium hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:rounded px-2 py-1"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="text-sm font-medium hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:rounded px-2 py-1"
                onClick={closeMobileMenu}
              >
                Shop
              </Link>
              <Link
                to="/shop?gender=Men"
                className="text-sm font-medium hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:rounded px-2 py-1"
                onClick={closeMobileMenu}
              >
                Men
              </Link>
              <Link
                to="/shop?gender=Women"
                className="text-sm font-medium hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:rounded px-2 py-1"
                onClick={closeMobileMenu}
              >
                Women
              </Link>
              <Link
                to="/shop?category=Accessories"
                className="text-sm font-medium hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:rounded px-2 py-1"
                onClick={closeMobileMenu}
              >
                Accessories
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:rounded px-2 py-1"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-sm font-medium hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:rounded px-2 py-1"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
