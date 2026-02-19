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
      { name: "Green Ginger Smoothie", price: "$12.50", description: "Apple juice, ginger, pineapple, mango, banana, spinach & kale" },
      { name: "Green Waves Smoothie", price: "$12.50", description: "Apple juice, spinach, kale, green apple, kiwi, cucumber & spirulina" },
      { name: "Vitamin Sea Smoothie", price: "$12.50", description: "Orange juice, lemon juice, camu-camu, strawberry, mango & banana" },
      { name: "Strawberry Smoothie", price: "$12.50", description: "Almond milk, banana & strawberry" },
      { name: "Sun Seeker Smoothie", price: "$12.50", description: "Almond milk, peanut butter, dates, coconut flakes, cinnamon, oats, macarons & banana" },
      { name: "Chocolate PB", price: "$12.50", description: "Almond milk, peanut butter, cacao powder & banana" },
      { name: "PB&J", price: "$12.50", description: "Almond milk, peanut butter, strawberry & blueberry" },
      { name: "Berry Breeze Smoothie", price: "$12.50", description: "Almond milk, blueberry, strawberry, acai powder & banana" },
      { name: "Lil' Hippy", price: "$12.50", description: "Almond milk, strawberry, blueberry, almond butter, dates & moringa" },
      { name: "Soul Shine Smoothie", price: "$12.50", description: "Orange juice, carrot, goji berry, banana & mango" },
      { name: "Nutella Elvis", price: "$12.50", description: "Milk, nutella, banana & peanut butter" },
      { name: "Pina Colada", price: "$12.50", description: "Coconut milk, pineapple, banana, mango & coconut shreds" },
    ],
  },
  {
    name: "Açaí Bowls",
    icon: <Leaf size={20} />,
    items: [
      { name: "Classic Acai Bowl", price: "$15", description: "Acai topped with granola, fresh strawberries, banana & agave" },
      { name: "Very Berry Acai Bowl", price: "$16", description: "Acai & coconut milk topped with granola, fresh blueberries, strawberries, goji berry & coconut flakes" },
      { name: "Island Acai Bowl", price: "$16", description: "Acai & coconut milk topped with granola, fresh kiwi, mango, banana, pineapple & coconut flakes" },
      { name: "Nutty Acai Bowl", price: "$16", description: "Acai & peanut butter topped with granola, cacao nibs, peanut butter, banana, coconut flakes & agave" },
      { name: "Cravin' It", price: "$16", description: "Almond milk, peanut butter, nutella & acai topped with banana, coconut flakes, granola, peanut butter, cacao nibs & nutella" },
    ],
  },
  {
    name: "Handhelds",
    icon: <UtensilsCrossed size={20} />,
    items: [
      { name: "The Breakfast Sandwich", price: "$15", description: "Two eggs, muenster cheese, avocado, tomato, house made seasoning on tuscan bread. Comes with JK Caviar & organic chips" },
      { name: "It's From Jersey", price: "$15", description: "Two eggs, muenster cheese, taylor ham, house made seasoning on tuscan bread. Comes with JK Caviar & organic chips" },
      { name: "Veggies Piled High", price: "$14", description: "Avocado, tomato, red onion, cucumber, carrot, spring mix, hummus, house made tomato pesto sauce on tuscan bread. Comes with JK Caviar & organic chips" },
      { name: "Tuna Melt", price: "$16", description: "House made tuna salad, muenster cheese, house made tomato pesto sauce, pressed and melted on tuscan bread. Comes with JK Caviar & organic chips" },
      { name: "The Breakfast Wrap", price: "$16", description: "Three eggs, avocado, tomato, spinach, onion, house made tomato pesto sauce. Comes with JK Caviar & organic chips" },
      { name: "Vegan Burger Wrap", price: "$16", description: "House made vegan burger, avocado, onion, tomato, cucumber, carrot, spring mix, house made cashew cheese & house made spicy mayo. Comes with JK Caviar & organic chips" },
      { name: "Hummus Veggie Wrap", price: "$14", description: "Avocado, spring mix, tomato, red onion, carrot, cucumber, hummus, house made tomato pesto sauce. Comes with JK Caviar & organic chips" },
      { name: "Southwest Chicken Wrap", price: "$16", description: "Chicken, avocado, black beans, corn, tomato, red onion, crispy onion, spring mix, spicy mayo. Comes with JK Caviar & organic chips" },
      { name: "The Tuna Wrap", price: "$16", description: "House made tuna salad, tomato, red onion & spring mix. Comes with JK Caviar & organic chips" },
      { name: "Mango Salsa Chicken Wrap", price: "$16", description: "Shredded chicken, house made mango salsa, spring mix, house made spicy mayo. Comes with JK Caviar & organic chips" },
      { name: "The Absolute Best Lentil Tacos", price: "$15", description: "House made lentil mushroom taco meat, mango salsa, red cabbage, house made guacamole, house made spicy mayo, cilantro, house made taco shells. Comes with JK Caviar & organic chips" },
      { name: "Mango Salsa Chicken Tacos", price: "$16", description: "Shredded chicken, mango salsa, red cabbage, house made guacamole, house made spicy mayo, house made taco shells. Comes with JK Caviar & organic chips" },
      { name: "Southwest Chicken Tacos", price: "$16", description: "Shredded chicken, house made guacamole, black beans, red onion, tomato, crispy onions, house made spicy mayo, house made taco shells. Comes with JK Caviar & organic chips" },
      { name: "Our Famous Vegan Nachos", price: "$16", description: "Organic salted chips, house made lentil mushroom taco meat, cashew cheese, black beans, house made guacamole, house made mango salsa, crispy onions, house made spicy mayo" },
    ],
  },
  {
    name: "Bowls",
    icon: <Salad size={20} />,
    items: [
      { name: "Crazy Protein Bowl", price: "$19", description: "Quinoa, chicken, house made spicy mayo, soy sauce, black beans, chickpeas, cilantro, avocado, house made cashew cheese & eggs your way" },
      { name: "Breakfast Bowl", price: "$15", description: "Three eggs, house made cashew cheese, house made lentil mushroom meat, avocado, tomato" },
      { name: "Power Bowl", price: "$15", description: "Quinoa, black beans, white beans, grilled portobello mushrooms, sauteed onions, cashews, walnut, avocado, teriyaki sauce, house made cashew cheese" },
      { name: "Quinoa Fried Rice", price: "$15", description: "Quinoa, red onion, grilled portobello mushrooms, spinach, red bell pepper, red cabbage, garlic, red pepper flakes, lemon, black pepper, cilantro, soy sauce" },
      { name: "Vegetable Pan Asian Noodles", price: "$17", description: "Buckwheat noodles, avocado, garlic, red onion, red cabbage, red bell pepper, tomato, red pepper flakes, lemon, cilantro, sesame seeds, soy sauce, house made cashew cheese" },
      { name: "Goddess Bowl", price: "$15", description: "Quinoa, chicken, cucumber, tomatoes, red onions, feta cheese, house made vinaigrette" },
    ],
  },
  {
    name: "Toasts",
    icon: <Egg size={20} />,
    items: [
      { name: "Mucho Mango", price: "$8 / $14", description: "Avocado toast topped with our house made mango salsa & house seasoning (half / full order)" },
      { name: "<3 You Berry Much", price: "$8 / $14", description: "Berry jam toast topped with strawberries, blueberries, cinnamon & coconut sugar (half / full order)" },
      { name: "Stack It Up", price: "$8 / $14", description: "Avocado toast topped with tomatoes, seasoning & an egg your way (half / full order)" },
      { name: "Jersey Girl", price: "$8 / $14", description: "Avocado toast topped with taylor ham, muenster cheese & an egg your way (half / full order)" },
      { name: "The Classy Vegetarian", price: "$8 / $14", description: "Avocado toast topped with tomatoes & house made JK caviar (half / full order)" },
      { name: "JK French Toast", price: "$14", description: "Thick cut cinnamon french toast served with a side of syrup and fresh-cut fruit (ask about our very berry and nutty options)" },
    ],
  },
  {
    name: "Greens",
    icon: <Leaf size={20} />,
    items: [
      { name: "Stuffed Avocado Salad", price: "$15", description: "Avocado stuffed with JK caviar, spring mix, strawberries, walnuts, feta cheese, citrus vinaigrette" },
      { name: "Citrus Bliss", price: "$13", description: "Spring mix, grape tomato, oranges, avocado, sunflower seeds, candied pecans, chickpeas, citrus vinaigrette" },
      { name: "Berry Delicious", price: "$13", description: "Spring mix, strawberries, blueberries, candied pecans, sunflower seeds, feta cheese, citrus vinaigrette" },
    ],
  },
  {
    name: "Teas",
    icon: <Coffee size={20} />,
    items: [
      { name: "Fields of Strawberry", price: "$7.75 - $8.75", description: "Strawberry passion fruit rooibos tea, strawberry, agave & macadamia milk" },
      { name: "Beach Waves", price: "$7.75 - $8.75", description: "Himalayan white tea, butterfly pea flower, vanilla & coconut milk" },
      { name: "Gentleman's Tea", price: "$7.75 - $8.75", description: "Earl grey tea, honey & cream" },
      { name: "Real Arnold Palmer", price: "$7.75 - $8.75", description: "Classic black tea, organic lemonade & agave" },
      { name: "JK London Fog", price: "$7.75 - $8.75", description: "Earl grey lavender tea, vanilla & almond cream" },
      { name: "Golden Latte", price: "$6.50 - $7.50", description: "Turmeric, black pepper, maple & almond milk" },
      { name: "Matcha Latte", price: "$7.50 - $8.50", description: "Ceremonial grade matcha & milk" },
      { name: "JK Sunrise", price: "$7.75 - $8.75", description: "Orange juice, mango & matcha" },
      { name: "Chai Latte", price: "$6.50 - $7.50", description: "Chai tea powder & almond milk" },
      { name: "I Wish It Was Fall.... Tea", price: "$6.75 - $7.75", description: "Chai tea, vanilla & pumpkin almond cream" },
      { name: "Fresh Steeped Tea", price: "$5.75 - $6.75", description: "Any JK tea fresh steeped" },
    ],
  },
  {
    name: "Coffee",
    icon: <Zap size={20} />,
    items: [
      { name: "Strawberry Latte", price: "$7.75 - $8.75", description: "Espresso, strawberry, agave & milk" },
      { name: "Mocha", price: "$7.75 - $8.75", description: "Espresso, chocolate & milk" },
      { name: "Cup of Joe'y", price: "$7.75 - $8.75", description: "Coffee alternative made with reishi, cordyceps, lion's mane, cinnamon, ashwagandha & almond milk" },
      { name: "Chaga-cino", price: "$7.75 - $8.75", description: "Chaga, monk fruit, espresso & almond milk" },
      { name: "Princess Peach", price: "$8.75 - $9.75", description: "Queen of the mushroom kingdom — chaga, reishi, cordyceps, lion's mane, cinnamon, ashwagandha & almond milk" },
      { name: "Angelina", price: "$8.75", description: "Espresso, agave & cream... shaken!" },
      { name: "Nutella Latte", price: "$7.75 - $8.75", description: "Espresso, nutella, agave & milk" },
      { name: "Caramel Macchiato", price: "$7.75 - $8.75", description: "Espresso float, caramel, milk & caramel drizzle" },
      { name: "Plain Jane Cold Brew", price: "$5.75 - $6.75", description: "Just house steeped cold brew..... and ice" },
      { name: "The Purple People Eater", price: "$7.75 - $8.75", description: "House steeped cold brew, vanilla, acai, pitaya & almond cream" },
    ],
  },
  {
    name: "Classics",
    icon: <Citrus size={20} />,
    items: [
      { name: "Juices", price: "$12", description: "Fresh juices" },
      { name: "Juice Shots", price: "$5", description: "Juice shots" },
      { name: "Espresso", price: "$3.25", description: "Espresso" },
      { name: "Cappuccino", price: "$5.25", description: "Cappuccino" },
      { name: "Americano", price: "$4.75", description: "Americano" },
      { name: "Latte", price: "$5.25", description: "Latte" },
      { name: "Macchiato", price: "$4.25", description: "Macchiato" },
      { name: "Espresso Float", price: "$2", description: "Espresso float" },
    ],
  },
  {
    name: "Extras",
    icon: <Zap size={20} />,
    items: [
      { name: "Sauce", price: "$1", description: "Additional sauce" },
      { name: "Protein Powder", price: "$2", description: "Add protein powder" },
      { name: "Organic Eggs", price: "$3", description: "Add organic eggs" },
      { name: "Organic Chicken", price: "$6", description: "Add organic chicken" },
      { name: "Guac & Organic Chips", price: "$6", description: "Guacamole with organic chips" },
      { name: "JK Caviar & Organic Chips", price: "$6", description: "JK caviar with organic chips" },
      { name: "Mango Salsa", price: "$2", description: "Additional mango salsa" },
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
