import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

import { Droplets, Sun, Layers, HeartPulse, Sparkles } from "lucide-react";

const skinTypes = [
  {
    type: "Oily",
    icon: Droplets,
    characteristics: [
      "Shiny appearance, especially in T-zone",
      "Enlarged, visible pores",
      "Prone to blackheads and breakouts",
      "Makeup tends to slide off",
    ],
    ingredients: ["Niacinamide", "Salicylic Acid", "Clay", "Zinc"],
    avoid: ["Heavy oils", "Rich creams", "Coconut oil"],
  },
  {
    type: "Dry",
    icon: Sun,
    characteristics: [
      "Tight, rough feeling",
      "Flaking or peeling",
      "Fine lines more visible",
      "Dull complexion",
    ],
    ingredients: ["Hyaluronic Acid", "Ceramides", "Squalane", "Shea Butter"],
    avoid: ["Alcohol-based toners", "Harsh exfoliants", "Fragranced products"],
  },
  {
    type: "Combination",
    icon: Layers,
    characteristics: [
      "Oily T-zone (forehead, nose, chin)",
      "Dry or normal cheeks",
      "Occasional breakouts in oily areas",
      "Pores vary in size",
    ],
    ingredients: [
      "Niacinamide",
      "Hyaluronic Acid",
      "Lightweight moisturizers",
      "BHA",
    ],
    avoid: [
      "One-size-fits-all products",
      "Very heavy creams",
      "Overly stripping cleansers",
    ],
  },
  {
    type: "Sensitive",
    icon: HeartPulse,
    characteristics: [
      "Easily irritated or inflamed",
      "Reacts to new products",
      "Redness, itching, or burning",
      "May have rosacea or eczema",
    ],
    ingredients: ["Centella Asiatica", "Aloe Vera", "Ceramides", "Oat Extract"],
    avoid: ["Fragrance", "Essential oils", "Harsh actives", "Alcohol"],
  },
  {
    type: "Normal",
    icon: Sparkles,
    characteristics: [
      "Balanced oil production",
      "Small, barely visible pores",
      "Smooth texture",
      "Rarely breaks out",
    ],
    ingredients: ["Vitamin C", "Hyaluronic Acid", "Retinol", "Peptides"],
    avoid: ["Over-exfoliating", "Too many actives at once"],
  },
];

const SkinGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="section-container pt-28 md:pt-32 section-padding">
        <header className="max-w-2xl mb-16">
          <span className="label-caps">Know Your Skin</span>

          <h1 className="text-4xl md:text-5xl font-heading font-medium mt-4 text-foreground">
            Understanding your skin type is the first step to better skin.
          </h1>

          <p className="mt-4 prose-aureva">
            Your skin type is determined by genetics, but can be influenced by
            environment, diet, and lifestyle. Identifying yours helps you choose
            the right products and routine.
          </p>
        </header>

        <div className="space-y-8">
          {skinTypes.map((skin, i) => {
            const Icon = skin.icon;

            return (
              <motion.div
                key={skin.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="card-aureva"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-emerald-100/60">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>

                  <h2 className="text-2xl font-heading font-medium text-foreground">
                    {skin.type} Skin
                  </h2>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Characteristics */}
                  <div>
                    <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                      Characteristics
                    </h3>

                    <ul className="space-y-1.5">
                      {skin.characteristics.map((c) => (
                        <li key={c} className="text-sm text-muted-foreground">
                          • {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ingredients */}
                  <div>
                    <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                      Recommended Ingredients
                    </h3>

                    <div className="flex gap-2 flex-wrap">
                      {skin.ingredients.map((ing) => (
                        <span key={ing} className="ingredient-badge">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Avoid */}
                  <div>
                    <h3 className="text-xs font-semibold text-destructive uppercase tracking-wider mb-2">
                      Avoid
                    </h3>

                    <ul className="space-y-1.5">
                      {skin.avoid.map((a) => (
                        <li key={a} className="text-sm text-muted-foreground">
                          • {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SkinGuide;
