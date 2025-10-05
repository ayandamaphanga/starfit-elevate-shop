const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center">About Star-Fit</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-foreground">
          <p className="text-xl leading-relaxed">
            Star-Fit is a premium activewear brand designed for those who want to 
            look strong, feel confident, and move freely.
          </p>
          
          <p className="leading-relaxed">
            We combine comfort, performance, and minimalist design to create gym 
            wear that performs as hard as you do. From training sessions to casual 
            wear, every piece reflects our mission — style meets endurance.
          </p>
          
          <div className="bg-secondary p-8 rounded-sm my-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              To empower athletes and fitness enthusiasts with high-quality, 
              stylish activewear that elevates performance and redefines what 
              gym clothing can be.
            </p>
          </div>
          
          <h2 className="text-3xl font-bold mt-12 mb-4">Why Choose Star-Fit?</h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border border-border p-6 rounded-sm">
              <h3 className="font-bold text-xl mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">
                Every product is crafted with the finest materials for durability 
                and comfort.
              </p>
            </div>
            
            <div className="border border-border p-6 rounded-sm">
              <h3 className="font-bold text-xl mb-2">Performance Driven</h3>
              <p className="text-muted-foreground">
                Designed to move with you through your toughest workouts.
              </p>
            </div>
            
            <div className="border border-border p-6 rounded-sm">
              <h3 className="font-bold text-xl mb-2">Minimalist Design</h3>
              <p className="text-muted-foreground">
                Clean lines and modern aesthetics that work in and out of the gym.
              </p>
            </div>
            
            <div className="border border-border p-6 rounded-sm">
              <h3 className="font-bold text-xl mb-2">Inclusive Sizing</h3>
              <p className="text-muted-foreground">
                Designed to fit and flatter all body types with confidence.
              </p>
            </div>
          </div>
          
          <p className="text-center text-2xl font-semibold mt-12">
            Elevate Your Workout. Redefine Your Style.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
