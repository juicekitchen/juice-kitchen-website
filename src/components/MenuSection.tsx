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
      { name: "Ginger Green Smoothie", price: "$13", description: "Apple juice, spinach, kale, ginger, pineapple, mango & banana topped with hemp & chia seeds" },
      { name: "Berry Breeze Smoothie", price: "$13", description: "Almond milk, blueberry, strawberry, acai powder & banana topped with coconut flakes & goji berry" },
      { name: "Soul Shine Smoothie", price: "$13", description: "Orange juice, carrot, goji berry, banana, mango & agave topped with coconut flakes" },
      { name: "Chocolate Peanut Butter Cup", price: "$13", description: "Almond milk, peanut butter, cacao powder, banana & raw honey topped with cacao nibs" },
      { name: "Green Waves Smoothie", price: "$13", description: "Apple juice, spinach, kale, green apple, kiwi, cucumber & spirulina" },
      { name: "Vitamin Sea Smoothie", price: "$13", description: "Orange juice, lemon, camu powder, strawberry, mango & banana" },
      { name: "Dawn Patrol Smoothie", price: "$13", description: "Coconut milk, cold brew coffee, dates, flaxseed, vegan protein & banana" },
      { name: "Sun Seeker Smoothie", price: "$13", description: "Almond milk, peanut butter, dates, coconut flakes, cinnamon, oats, maca & banana" },
    ],
  },
  {
    name: "Açaí Bowls",
    icon: <Leaf size={20} />,
    items: [
      { name: "Classic Acai Bowl", price: "$13", description: "Almond milk, acai, strawberry, mango, banana with granola, coconut flakes & honey" },
      { name: "Very Berry Acai Bowl", price: "$13.50", description: "Almond milk, blueberry, acai, strawberry & banana with granola, goji berry & coconut" },
      { name: "Island Acai Bowl", price: "$13.50", description: "Coconut milk, acai, strawberry, mango, banana, pineapple & kiwi with granola" },
      { name: "Nutty Acai Bowl", price: "$13.50", description: "Almond milk, acai, peanut butter, strawberry, mango & banana with cacao nibs & granola" },
      { name: "Build Your Own Acai Bowl", price: "$13.95", description: "Customize your perfect bowl with your choice of base, toppings & extras" },
    ],
  },
  {
    name: "Breakfast All Day",
    icon: <Egg size={20} />,
    items: [
      { name: "Open Faced Avocado Sandwich", price: "$14", description: "Organic seed bread, avocado, eggs, hemp seed & black pepper topped with sprouts" },
      { name: "Avocado Toast Vegan", price: "$11", description: "Organic seed bread, avocado, sesame seed, lemon juice & zest, black pepper & sea salt (2 toasts)" },
      { name: "Nutty French Toast", price: "$13", description: "Seed bread in egg, cinnamon & almond milk batter, topped with banana, almond butter & agave" },
      { name: "Berry French Toast", price: "$13", description: "Seed bread in egg, cinnamon & almond milk batter, topped with strawberries, blueberries & maple syrup" },
      { name: "Breakfast Wrap", price: "$14", description: "Organic egg omelette with spinach, avocado, onion & cilantro in a tomato wrap" },
      { name: "Vegan Grilled Cheese", price: "$10.87", description: "Seed bread with avocado, homemade cashew cheese, cherry tomato & broccoli sprouts" },
    ],
  },
  {
    name: "Wraps & Salads",
    icon: <Salad size={20} />,
    items: [
      { name: "Hummus Veggies Wrap", price: "$13", description: "Hummus, romaine, tomato, avocado, cabbage, carrot & cucumber in tomato wrap with guacamole & chips" },
      { name: "Mango Salsa Chicken Wrap", price: "$16", description: "Chicken, almond slices, mango salsa & spring mix with chipotle lime dressing" },
      { name: "Tuna Protein Wrap", price: "$15", description: "Yellowfin tuna, red onion, cucumber, tomato, white beans & spring mix with chipotle lime dressing" },
      { name: "Southwest Wrap", price: "$13", description: "Avocado, black beans, corn, cherry tomato, red onion, spring mix & spicy vegan mayo in tomato wrap" },
      { name: "Mango Salsa Chicken Salad", price: "$16", description: "Chicken, almond slices, mango salsa & spring mix with chipotle lime dressing" },
      { name: "Tuna Protein Salad", price: "$15", description: "Yellowfin tuna, red onion, cucumber, tomato, white beans & spring mix" },
      { name: "Avocado Quinoa Salad", price: "$14", description: "Quinoa, avocado, carrots, red onion, cucumber, tomato & spring mix with chips & guacamole" },
    ],
  },
  {
    name: "Balance Bowls",
    icon: <UtensilsCrossed size={20} />,
    items: [
      { name: "Vegetables Pan Asian Noodles", price: "$18", description: "Buckwheat noodles, avocado, cabbage, bell pepper, tomato & cashew cheese" },
      { name: "Power Nuts Bowl", price: "$17", description: "Quinoa, avocado, black beans, grilled portobello, veggies in teriyaki with walnuts & cashews" },
      { name: "Quinoa Curry Bowl", price: "$16", description: "Quinoa, avocado, black bean, chickpeas, veggies in curry sauce with crushed peanuts" },
      { name: "Mango Salsa Chicken Tacos", price: "$16", description: "3 tacos with chicken, mango salsa, cabbage, guacamole & chipotle lime in tomato tortillas" },
      { name: "Vegan Nachos", price: "$13", description: "GF chips with lentil mushroom taco meat, cashew cheese, black beans, guacamole & mango salsa" },
      { name: "Vegan Lentil Tacos", price: "$14", description: "3 tacos with lentil mushroom meat, guacamole, mango salsa, cabbage & spicy vegan mayo" },
      { name: "Quinoa Fried Rice", price: "$16", description: "Stir fried quinoa, bell peppers, eggs, cabbage, portobello & cherry tomato in liquid amino sauce" },
    ],
  },
  {
    name: "Fresh Juices & Shots",
    icon: <Citrus size={20} />,
    items: [
      { name: "Golden Hour", price: "$13", description: "Fresh pressed carrot, apple & orange juice (16oz)" },
      { name: "Island Glow", price: "$13", description: "Fresh pressed beets, oranges, apples & cucumbers (16oz)" },
      { name: "Mother Earth", price: "$13", description: "Fresh pressed ginger, kale, spinach, cucumber & celery (16oz)" },
      { name: "Glow Getter", price: "$13", description: "Fresh pressed ginger, lemon & apple (16oz)" },
      { name: "Immunity Booster Shot", price: "$6", description: "Ginger, lemon, lime & raw honey" },
      { name: "Vita C Shot", price: "$6", description: "Camu camu, lemon, lime, orange & cayenne" },
      { name: "Recovery Shot", price: "$6", description: "Turmeric, lemon, carrot & black pepper" },
      { name: "Turmeric Shot", price: "$5.50", description: "Made to order organic turmeric shot (1oz)" },
      { name: "Ginger Shot", price: "$4.50", description: "Made to order organic ginger shot (1oz)" },
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
