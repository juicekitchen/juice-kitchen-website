import { Heart, Leaf, Users } from "lucide-react";

const features = [
  {
    icon: <Leaf className="text-leaf" size={28} />,
    title: "100% Organic",
    description: "Every ingredient is carefully sourced from certified organic farms.",
  },
  {
    icon: <Heart className="text-berry" size={28} />,
    title: "Made with Love",
    description: "Family-owned and operated — we put our heart into every dish.",
  },
  {
    icon: <Users className="text-mango" size={28} />,
    title: "Community Hub",
    description: "More than a restaurant — a place where great food and community meet.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-mango font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            About Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            More Than Just Juice
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Juice Kitchen is a vibrant oasis in the heart of Coral Springs. We offer a plethora of dining options crafted from the highest quality organic ingredients to fit anyone's lifestyle — whether you're vegan, gluten-free, or just looking for something truly delicious.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-8 rounded-2xl bg-background shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-muted mb-5">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
