import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import articles from "@/data/articles.json";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="section-container pt-28 md:pt-32 section-padding">
        <header className="max-w-2xl mb-16">
          <span className="label-caps">The Journal</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mt-4 text-foreground">
            Deep dives into the science of skin.
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-aureva group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="ingredient-badge">{article.category}</span>
                <span className="text-xs text-muted-foreground">{article.readTime}</span>
              </div>
              <h2 className="text-xl font-serif italic text-foreground group-hover:text-primary transition-colors">
                {article.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-primary font-medium">
                Read article <ArrowRight size={14} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
