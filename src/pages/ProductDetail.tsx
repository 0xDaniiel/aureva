import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import products from "@/data/products.json";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import productImg1 from "@/assets/product-1.jpg";
import productImg2 from "@/assets/product-2.jpg";
import productImg3 from "@/assets/product-3.jpg";

const productImages = [productImg1, productImg2, productImg3];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="section-container pt-32 text-center">
          <p className="text-muted-foreground">Product not found.</p>
          <Link to="/products" className="text-primary text-sm mt-4 inline-block">← Back to products</Link>
        </div>
      </div>
    );
  }

  const img = productImages[(product.id - 1) % productImages.length];
  const phPosition = ((product.ph - 0) / 14) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="section-container pt-28 md:pt-32 section-padding">
        <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft size={14} /> Back to products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="rounded-[24px] overflow-hidden bg-secondary"
          >
            <img src={img} alt={product.name} className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          >
            <span className="label-caps">{product.category}</span>
            <h1 className="text-3xl md:text-4xl font-serif italic mt-2 text-foreground">{product.name}</h1>
            <p className="text-2xl font-medium mt-2 text-foreground tabular-nums">{product.price}</p>

            <div className="mt-4 flex gap-2 flex-wrap">
              {product.skinType.map((type) => (
                <span key={type} className="ingredient-badge">{type}</span>
              ))}
            </div>

            <p className="mt-6 prose-aureva">{product.description}</p>

            {/* pH Scale */}
            <div className="mt-8">
              <span className="text-xs font-medium text-muted-foreground">pH Level: {product.ph}</span>
              <div className="mt-2 relative h-2 rounded-full bg-gradient-to-r from-red-300 via-green-300 to-blue-300 overflow-visible">
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-foreground border-2 border-background"
                  style={{ left: `${phPosition}%`, transform: `translate(-50%, -50%)` }}
                />
              </div>
              <div className="flex justify-between mt-1 text-[10px] text-muted-foreground">
                <span>Acidic (0)</span>
                <span>Neutral (7)</span>
                <span>Alkaline (14)</span>
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-foreground mb-3">Benefits</h3>
              <ul className="space-y-2">
                {product.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="text-primary mt-0.5 shrink-0" /> {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ingredients */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-foreground mb-3">Key Ingredients</h3>
              <div className="flex gap-2 flex-wrap">
                {product.ingredients.map((ing) => (
                  <Link
                    key={ing}
                    to={`/ingredients`}
                    className="ingredient-badge hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {ing}
                  </Link>
                ))}
              </div>
            </div>

            {/* How to use */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-foreground mb-3">How to Use</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{product.howToUse}</p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
