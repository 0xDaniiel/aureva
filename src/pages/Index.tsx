import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { motion, Variants } from "framer-motion";
import heroImage from "@/assets/hero-products.jpg";
import textureImage from "@/assets/texture-serum.jpg";
import products from "@/data/products.json";
import { ArrowRight, Droplets, Leaf, Shield, Sparkles } from "lucide-react";

const featuredProducts = products.slice(0, 4);

const skinTips = [
  {
    icon: Droplets,
    title: "Hydrate from within",
    text: "Drink 8 glasses of water daily. Hydrated skin starts internally before any topical treatment.",
  },
  {
    icon: Shield,
    title: "SPF is non-negotiable",
    text: "UV damage causes 80% of visible aging. Apply broad-spectrum SPF 30+ every single morning.",
  },
  {
    icon: Leaf,
    title: "Less is more",
    text: "A consistent 3-step routine outperforms a complicated 10-step one. Focus on cleanser, treatment, moisturizer.",
  },
  {
    icon: Sparkles,
    title: "Patch test always",
    text: "New ingredients can cause reactions. Test on your inner forearm for 24 hours before applying to your face.",
  },
];

// 🔥 Animation Variants
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.32, 0.72, 0, 1],
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.32, 0.72, 0, 1],
    },
  },
};

const float: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={container}
        className="relative min-h-[90vh] flex items-center overflow-hidden"
      >
        {/* Background */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src={heroImage}
            alt="Aureva skincare collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />
        </motion.div>

        <div className="relative section-container pt-20">
          <motion.div variants={container} className="max-w-2xl">
            <motion.span variants={fadeUp} className="label-caps">
              The Science of Skin
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-[5.5rem] font-heading font-medium mt-6 leading-[1.08] text-foreground"
            >
              Your skin is a living ecosystem. Treat it with precision.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 text-base md:text-lg text-muted-foreground max-w-lg leading-[1.7]"
            >
              Aureva is your skincare encyclopedia with science-backed
              ingredients, personalized routines, and transparent education.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex gap-4 flex-wrap">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-[16px] bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
                >
                  Explore Products <ArrowRight size={16} />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/quiz"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-[16px] bg-secondary text-secondary-foreground font-medium text-sm hover:bg-secondary/80 transition-colors"
                >
                  Find Your Routine
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* WHY IT MATTERS */}
      <section className="section-padding">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="label-caps">Why It Matters</span>
            <h2 className="text-3xl md:text-4xl font-heading font-medium mt-4 text-foreground">
              94% of users reported improved barrier function within 14 days.
            </h2>
            <p className="mt-6 prose-aureva">
              Your skin is your largest organ. Understanding its biology, from
              the acid mantle to the microbiome, empowers you to make informed
              choices, not marketing-driven ones.
            </p>
            <Link
              to="/skin-guide"
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Read the Skin Guide <ArrowRight size={14} />
            </Link>
          </motion.div>

          <motion.div
            variants={float}
            animate="animate"
            whileHover={{ scale: 1.02 }}
          >
            <div className="rounded-[24px] overflow-hidden">
              <img
                src={textureImage}
                alt="Serum texture close-up"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section-padding bg-secondary/30">
        <div className="section-container">
          <motion.header
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-2xl mb-16"
          >
            <span className="label-caps">The Collection</span>
            <h2 className="text-3xl md:text-4xl font-heading font-medium mt-4 text-foreground">
              Formulated for results, not trends.
            </h2>
          </motion.header>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </motion.div>

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

      {/* SKIN TIPS */}
      <section className="section-padding">
        <div className="section-container">
          <motion.header
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-2xl mb-16"
          >
            <span className="label-caps">Fundamentals</span>
            <h2 className="text-3xl md:text-4xl font-heading font-medium mt-4 text-foreground">
              Four principles for healthier skin.
            </h2>
          </motion.header>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skinTips.map((tip) => (
              <motion.div
                key={tip.title}
                variants={scaleIn}
                whileHover={{ y: -6, scale: 1.03 }}
                className="card-aureva"
              >
                <motion.div
                  className="w-10 h-10 rounded-[12px] bg-secondary flex items-center justify-center mb-4"
                  whileHover={{ rotate: 6 }}
                >
                  <tip.icon size={18} className="text-primary" />
                </motion.div>

                <h3 className="font-medium text-foreground">{tip.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {tip.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary/5">
        <div className="section-container text-center max-w-2xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="label-caps">Personalized</span>
            <h2 className="text-3xl md:text-4xl font-heading font-medium mt-4 text-foreground">
              Not sure where to start?
            </h2>
            <p className="mt-4 prose-aureva mx-auto">
              Take our 2-minute skin quiz to discover your skin type and get a
              personalized routine recommendation.
            </p>

            <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/quiz"
                className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-[16px] bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Take the Quiz <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
