import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ingredients from "@/data/ingredients.json";
import { motion } from "framer-motion";

const IngredientsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="section-container pt-28 md:pt-32 section-padding">
        <header className="max-w-2xl mb-16">
          <span className="label-caps">The Library</span>
          <h1 className="text-4xl md:text-5xl font-serif italic mt-4 text-foreground">
            Science-backed ingredients, explained for humans.
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ingredients.map((ing, i) => (
            <motion.div
              key={ing.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card-aureva"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h2 className="font-serif text-xl italic text-foreground">{ing.name}</h2>
                  <span className="ingredient-badge mt-1">{ing.category}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">{ing.description}</p>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-xs font-medium text-foreground">Benefits</span>
                  <ul className="mt-1 space-y-1">
                    {ing.benefits.map((b) => (
                      <li key={b} className="text-xs text-muted-foreground">• {b}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="text-xs font-medium text-foreground">Best for</span>
                  <div className="mt-1 flex gap-1 flex-wrap">
                    {ing.skinTypes.map((s) => (
                      <span key={s} className="ingredient-badge text-[10px]">{s}</span>
                    ))}
                  </div>
                  {ing.pairsWith.length > 0 && (
                    <>
                      <span className="text-xs font-medium text-foreground mt-3 block">Pairs with</span>
                      <p className="text-xs text-muted-foreground mt-1">{ing.pairsWith.join(", ")}</p>
                    </>
                  )}
                  {ing.avoidWith.length > 0 && (
                    <>
                      <span className="text-xs font-medium text-destructive mt-3 block">Avoid with</span>
                      <p className="text-xs text-muted-foreground mt-1">{ing.avoidWith.join(", ")}</p>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IngredientsPage;
