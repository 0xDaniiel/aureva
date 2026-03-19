import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-secondary/50 section-padding">
    <div className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        <div className="md:col-span-1">
          <Link to="/" className="font-heading text-2xl font-bold tracking-tight text-foreground">
            Aureva
          </Link>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
            Science-backed skincare education. Understand your skin, build your routine, transform your confidence.
          </p>
        </div>

        <div>
          <h4 className="label-caps mb-4">Explore</h4>
          <div className="flex flex-col gap-2.5">
            <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Products</Link>
            <Link to="/ingredients" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Ingredients</Link>
            <Link to="/skin-guide" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Skin Guide</Link>
            <Link to="/routine" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Routines</Link>
          </div>
        </div>

        <div>
          <h4 className="label-caps mb-4">Learn</h4>
          <div className="flex flex-col gap-2.5">
            <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
            <Link to="/quiz" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Skin Quiz</Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="label-caps mb-4">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-4">Weekly skincare insights, ingredient deep-dives, and routine tips.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2.5 rounded-[16px] bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/30"
            />
            <button type="submit" className="px-4 py-2.5 rounded-[16px] bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">© 2026 Aureva. Education, not prescription. Always consult a dermatologist.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
