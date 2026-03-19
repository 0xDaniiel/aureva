import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="section-container pt-28 md:pt-32 section-padding">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="label-caps">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mt-4 text-foreground">
              We'd love to hear from you.
            </h1>
            <p className="mt-4 prose-aureva">
              Have a question about skincare, ingredients, or routines? Reach out — we're here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <a href="mailto:hello@aureva.com" className="card-aureva group hover:bg-secondary/50 transition-colors">
              <div className="w-10 h-10 rounded-[12px] bg-secondary flex items-center justify-center mb-4">
                <Mail size={18} className="text-primary" />
              </div>
              <h3 className="font-medium text-foreground">Email Us</h3>
              <p className="text-sm text-muted-foreground mt-1">hello@aureva.com</p>
            </a>
            <div className="card-aureva">
              <div className="w-10 h-10 rounded-[12px] bg-secondary flex items-center justify-center mb-4">
                <MessageCircle size={18} className="text-primary" />
              </div>
              <h3 className="font-medium text-foreground">Social Media</h3>
              <p className="text-sm text-muted-foreground mt-1">@aureva on Instagram & Twitter</p>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
            className="mt-12 card-aureva space-y-6"
          >
            <h2 className="text-xl font-heading font-semibold text-foreground">Send a Message</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="px-4 py-3 rounded-[16px] bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/30"
              />
              <input
                type="email"
                placeholder="your@email.com"
                className="px-4 py-3 rounded-[16px] bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/30"
              />
            </div>
            <textarea
              rows={4}
              placeholder="Your message..."
              className="w-full px-4 py-3 rounded-[16px] bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/30 resize-none"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-[16px] bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
