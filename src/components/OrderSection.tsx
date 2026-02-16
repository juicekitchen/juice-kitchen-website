import { ExternalLink } from "lucide-react";

const orderPlatforms = [
  {
    name: "Square",
    description: "Order directly from us",
    url: "https://juicekitchen.square.site/s/order?location=L950EDSS5GBEW&menu=true",
    color: "bg-primary",
    textColor: "text-primary-foreground",
  },
  {
    name: "Uber Eats",
    description: "Get it delivered fast",
    url: "https://www.ubereats.com/store/juice-kitchen-co/Z9H8nJJgRTyS3ZdTL7wDLw",
    color: "bg-foreground",
    textColor: "text-background",
  },
  {
    name: "DoorDash",
    description: "Delivery to your door",
    url: "https://www.doordash.com/store/juice-kitchen-coral-springs-1702024/",
    color: "bg-berry",
    textColor: "text-primary-foreground",
  },
];

const OrderSection = () => {
  return (
    <section id="order" className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-mango font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Order Online
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Can't Make It In?
          </h2>
          <p className="text-primary-foreground/75 text-lg max-w-lg mx-auto">
            Order your favorites for pickup or delivery through any of these platforms.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {orderPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center justify-center p-8 rounded-2xl ${platform.color} ${platform.textColor} hover:scale-105 transition-transform shadow-lg`}
            >
              <h3 className="font-serif text-2xl font-bold mb-2">{platform.name}</h3>
              <p className="text-sm opacity-80 mb-4">{platform.description}</p>
              <ExternalLink size={20} className="opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
