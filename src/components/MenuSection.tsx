import { useState } from "react";
import { Leaf, Coffee, Salad, UtensilsCrossed, Citrus, Zap, Egg, CupSoda } from "lucide-react";

type MenuItem = {
  name: string;
  price: string;
  description: string;
};

type MenuCategory = {
  name: string;
  icon: React.ReactNode;
  items: MenuItem[];
};

const menuCategories: MenuCategory[] = [
  {
    name: "Organic Smoothies",
    icon: <CupSoda size={20} />,
    items: [
      { name: "Green Ginger Smoothie", price: "$15", description: "Apple juice, spinach, kale, ginger, pineapple, mango & banana" },
      { name: "Berry Breeze Smoothie", price: "$15", description: "Almond milk, blueberry, strawberry, acai powder & banana" },
      { name: "Soul Shine Smoothie", price: "$15", description: "Orange juice, carrot, goji berry, banana, mango & agave" },
      { name: "Chocolate Peanut Butter", price: "$15", description: "Almond milk, peanut butter, cacao, banana & honey" },
      { name: "Green Waves Smoothie", price: "$15", description: "Apple juice, spinach, kale, green apple, kiwi, cucumber & spirulina" },
      { name: "Vitamin Sea Smoothie", price: "$15", description: "Orange juice, lemon, camu powder, strawberry, mango & banana" },
    ],
  },
  {
    name: "Açaí Bowls",
    icon: <Leaf size={20} />,
    items: [
      { name: "Very Berry Acai", price: "$18", description: "Almond milk, blueberry, acai, strawberry & banana with granola & coconut" },
      { name: "Classic Acai Bowl", price: "$18.50", description: "Almond milk, acai, strawberry, mango, banana with granola & honey" },
      { name: "Island Acai Bowl", price: "$18.50", description: "Coconut milk, acai, strawberry, mango, banana, pineapple & kiwi" },
      { name: "Nutty Acai Bowl", price: "$18.50", description: "Almond milk, acai, peanut butter, strawberry, mango, banana & cacao nibs" },
      { name: "Cravin' It", price: "$18.50", description: "Almond milk, banana, peanut butter, Nutella, acai with coconut & granola" },
    ],
  },
  {
    name: "Toasts",
    icon: <Egg size={20} />,
    items: [
      { name: "Mucho Mango", price: "$16.50", description: "Avocado toast topped with house made mango salsa & seasoning" },
      { name: "Stack It Up", price: "$16.50", description: "Avocado toast topped with tomato, seasoning & an egg" },
      { name: "Jersey Girl", price: "$16.50", description: "Avocado toast topped with Taylor ham, Muenster cheese & egg" },
      { name: "<3 You Berry Much", price: "$16.50", description: "Berry jam toast with strawberries, blueberries, cinnamon & coconut sugar" },
      { name: "The Classy Vegetarian", price: "$16.50", description: "Avocado toast topped with tomato & house made JK Caviar" },
    ],
  },
  {
    name: "Wraps & Salads",
    icon: <Salad size={20} />,
    items: [
      { name: "Hummus Veggies Wrap", price: "$17.50", description: "Hummus, spring mix, tomato, avocado, cabbage, carrot & cucumber" },
      { name: "Mango Salsa Chicken Wrap", price: "$18.50", description: "Chicken, mango salsa, spring mix & spicy mayo with JK Caviar" },
      { name: "Tuna Wrap", price: "$18.50", description: "House made tuna, red onion, tomato & spring mix with JK Caviar" },
      { name: "Berry Delicious Salad", price: "$18", description: "Spring mix, strawberries, blueberries, candied pecans & citrus vinaigrette" },
      { name: "Citrus Bliss Salad", price: "$18", description: "Spring mix, grape tomato, oranges, avocado, sunflower seeds & chick peas" },
    ],
  },
  {
    name: "Balance Bowls",
    icon: <UtensilsCrossed size={20} />,
    items: [
      { name: "Pan Asian Noodles", price: "$19.50", description: "Buckwheat noodles, cabbage, bell pepper, avocado & cashew cheese" },
      { name: "Mango Salsa Chicken Tacos", price: "$18.50", description: "3 tacos with chicken, mango salsa, cabbage, guacamole & spicy mayo" },
      { name: "Power Bowl", price: "$17.50", description: "Quinoa, avocado, black beans, veggies in teriyaki with walnuts & cashews" },
      { name: "Quinoa Curry Bowl", price: "$16", description: "Quinoa, avocado, black bean, chickpeas in curry with crushed peanuts" },
      { name: "Vegan Nachos", price: "$18.50", description: "Chips with lentil mushroom meat, cashew cheese, salsa & guacamole" },
    ],
  },
  {
    name: "Fresh Juices & Shots",
    icon: <Citrus size={20} />,
    items: [
      { name: "Golden Hour", price: "$13", description: "Fresh pressed carrot, apple & orange juice (16oz)" },
      { name: "Island Glow", price: "$13", description: "Fresh pressed beets, oranges, apples & cucumbers (16oz)" },
      { name: "Mother Earth", price: "$13", description: "Fresh pressed ginger, kale, spinach, cucumber & celery (16oz)" },
      { name: "Immunity Booster Shot", price: "$7", description: "Ginger, lemon, lime & raw honey" },
      { name: "Vita C Shot", price: "$7", description: "Camu camu, lemon, orange & cayenne" },
      { name: "Recovery Shot", price: "$7", description: "Turmeric, lemon, carrot & black pepper" },
    ],
  },
  {
    name: "Coffee & Tea",
    icon: <Coffee size={20} />,
    items: [
      { name: "Golden Latte", price: "$6.50", description: "Turmeric, ginger, cinnamon, vanilla, agave, black pepper & almond milk" },
    ],
  },
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="menu" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-mango font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Our Menu
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Fresh & Organic
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Everything crafted with the finest organic ingredients, made fresh to order.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === i
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-foreground/70 hover:bg-muted"
              }`}
            >
              {cat.icon}
              <span className="hidden sm:inline">{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-8 text-center">
            {menuCategories[activeCategory].name}
          </h3>
          <div className="grid gap-4 md:gap-5">
            {menuCategories[activeCategory].items.map((item) => (
              <div
                key={item.name}
                className="flex items-start justify-between gap-4 p-5 rounded-xl bg-card hover:shadow-md transition-shadow border border-border/50"
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground text-base">{item.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
                <span className="text-lg font-bold text-primary whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://juicekitchen.square.site/s/order?location=L950EDSS5GBEW&menu=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            View Full Menu & Order
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
