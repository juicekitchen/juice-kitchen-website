import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fresh acai bowls, smoothies, and avocado toast"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p
          className="text-mango font-semibold text-sm tracking-[0.25em] uppercase mb-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Coral Springs, FL
        </p>
        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.1] mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Nourish Your
          <br />
          <span className="italic text-mango">Body & Soul</span>
        </h1>
        <p
          className="text-lg md:text-xl text-primary-foreground/85 max-w-xl mx-auto mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          Family-owned destination for organic smoothies, açaí bowls, fresh juices, and wholesome bites crafted with love.
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#menu"
            className="px-8 py-3.5 rounded-full bg-mango text-mango-foreground font-semibold text-base hover:brightness-110 transition-all shadow-lg"
          >
            View Our Menu
          </a>
          <a
            href="#order"
            className="px-8 py-3.5 rounded-full border-2 border-primary-foreground/40 text-primary-foreground font-semibold text-base hover:bg-primary-foreground/10 transition-all"
          >
            Order Online
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.5s" }}>
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
