import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-products.jpg";
import textureImage from "@/assets/texture-serum.jpg";
import products from "@/data/products.json";
import { ArrowRight, Droplets, Leaf, Shield, Sparkles } from "lucide-react";

const featuredProducts = products.slice(0, 4);

const skinTips = [
  { icon: Droplets, title: "Hydrate from within", text: "Drink 8 glasses of water daily. Hydrated skin starts internally before any topical treatment." },
  { icon: Shield, title: "SPF is non-negotiable", text: "UV damage causes 80% of visible aging. Apply broad-spectrum SPF 30+ every single morning." },
  { icon: Leaf, title: "Less is more", text: "A consistent 3-step routine outperforms a complicated 10-step one. Focus on cleanser, treatment, moisturizer." },
  { icon: Sparkles, title: "Patch test always", text: "New ingredients can cause reactions. Test on your inner forearm for 24 hours before applying to your face." },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] as const },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Aureva skincare collection" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />
        </div>
        <div className="relative section-container pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="max-w-2xl"
          >
            <span className="label-caps">The Science of Skin</span>
             <h1 className="text-5xl md:text-[5.5rem] font-heading font-medium mt-6 leading-[1.08] text-foreground">
               Your skin is a living ecosystem. Treat it with precision.
             </h1>
             <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-lg leading-[1.7]">
               Aureva is your skincare encyclopedia — science-backed ingredients, personalized routines, and transparent education.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[16px] bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                Explore Products <ArrowRight size={16} />
              </Link>
              <Link
                to="/quiz"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[16px] bg-secondary text-secondary-foreground font-medium text-sm hover:bg-secondary/80 transition-colors"
              >
                Find Your Routine
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Skincare Matters */}
      <section className="section-padding">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <span className="label-caps">Why It Matters</span>
             <h2 className="text-3xl md:text-4xl font-heading font-medium mt-4 text-foreground">
              94% of users reported improved barrier function within 14 days.
            </h2>
            <p className="mt-6 prose-aureva">
              Your skin is your largest organ. Understanding its biology — from the acid mantle to the microbiome — empowers you to make
              informed choices. Not marketing-driven ones.
            </p>
            <Link
              to="/skin-guide"
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Read the Skin Guide <ArrowRight size={14} />
            </Link>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15, ease: [0.32, 0.72, 0, 1] as const }}>
            <div className="rounded-[24px] overflow-hidden">
              <img src={textureImage} alt="Serum texture close-up" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-secondary/30">
        <div className="section-container">
          <motion.header {...fadeUp} className="max-w-2xl mb-16">
            <span className="label-caps">The Collection</span>
             <h2 className="text-3xl md:text-4xl font-heading font-medium mt-4 text-foreground">
              Formulated for results, not trends.
            </h2>
          </motion.header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.32, 0.72, 0, 1] }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View all products <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Skin Tips */}
      <section className="section-padding">
        <div className="section-container">
          <motion.header {...fadeUp} className="max-w-2xl mb-16">
            <span className="label-caps">Fundamentals</span>
             <h2 className="text-3xl md:text-4xl font-heading font-medium mt-4 text-foreground">
              Four principles for healthier skin.
            </h2>
          </motion.header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skinTips.map((tip, i) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.32, 0.72, 0, 1] }}
                className="card-aureva"
              >
                <div className="w-10 h-10 rounded-[12px] bg-secondary flex items-center justify-center mb-4">
                  <tip.icon size={18} className="text-primary" />
                </div>
                <h3 className="font-medium text-foreground">{tip.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{tip.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary/5">
        <div className="section-container text-center max-w-2xl mx-auto">
          <motion.div {...fadeUp}>
            <span className="label-caps">Personalized</span>
            <h2 className="text-3xl md:text-4xl font-heading font-medium mt-4 text-foreground">
              Not sure where to start?
            </h2>
            <p className="mt-4 prose-aureva mx-auto">
              Take our 2-minute skin quiz to discover your skin type and get a personalized routine recommendation.
            </p>
            <Link
              to="/quiz"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-[16px] bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Take the Quiz <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
