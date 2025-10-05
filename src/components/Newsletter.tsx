import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "You've been subscribed to the Star-Fit Squad.",
      });
      setEmail("");
    }
  };

  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join the Star-Fit Squad
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get exclusive deals, early drops, and training tips delivered straight
          to your inbox.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit" className="bg-accent hover:bg-accent/90">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
