import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Leaf, BookOpen, Heart } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="section-container pt-28 md:pt-32 section-padding">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="label-caps">About Aureva</span>
            <h1 className="text-4xl md:text-5xl font-serif italic mt-4 text-foreground">
              Education, not prescription.
            </h1>
            <p className="mt-6 prose-aureva text-lg">
              Aureva was born from a simple frustration: skincare information is overwhelming, contradictory, and often driven by marketing rather than science. We believe everyone deserves access to clear, transparent, evidence-based skincare education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { icon: BookOpen, title: "Education First", text: "We translate complex dermatological research into clear, actionable guidance. No jargon, no gatekeeping." },
              { icon: Leaf, title: "Ingredient Transparency", text: "Every ingredient explained — what it does, who it's for, and what to pair it with. Full transparency, always." },
              { icon: Heart, title: "Your Skin, Your Terms", text: "We don't sell products. We help you understand your skin so you can make informed decisions yourself." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-aureva"
              >
                <div className="w-10 h-10 rounded-[12px] bg-secondary flex items-center justify-center mb-4">
                  <item.icon size={18} className="text-primary" />
                </div>
                <h3 className="font-medium text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
