import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";

const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];
const skinTypes = ["All", "Dry", "Oily", "Combination", "Normal", "Sensitive"];

const Products = () => {
  const [category, setCategory] = useState("All");
  const [skinType, setSkinType] = useState("All");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const catMatch = category === "All" || p.category === category;
      const skinMatch = skinType === "All" || p.skinType.includes(skinType);
      return catMatch && skinMatch;
    });
  }, [category, skinType]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="section-container pt-28 md:pt-32 section-padding">
        <header className="max-w-2xl mb-12">
          <span className="label-caps">The Collection</span>
          <h1 className="text-4xl md:text-5xl font-heading font-medium mt-4 text-foreground">
            Science-backed formulas for every skin concern.
          </h1>
        </header>

        {/* Filters */}
        <div className="flex flex-wrap gap-6 mb-12">
          <div>
            <span className="text-xs font-medium text-muted-foreground mb-2 block">Category</span>
            <div className="flex gap-2 flex-wrap">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-3 py-1.5 rounded-[16px] text-xs font-medium transition-colors ${
                    category === c
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div>
            <span className="text-xs font-medium text-muted-foreground mb-2 block">Skin Type</span>
            <div className="flex gap-2 flex-wrap">
              {skinTypes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSkinType(s)}
                  className={`px-3 py-1.5 rounded-[16px] text-xs font-medium transition-colors ${
                    skinType === s
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">No products match your filters.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
