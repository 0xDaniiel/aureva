import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const morningSteps = [
  { step: 1, name: "Cleanser", description: "Start with a gentle, hydrating cleanser to remove overnight buildup without stripping your skin.", duration: "60 sec" },
  { step: 2, name: "Toner", description: "Balance your skin's pH and prep it to absorb subsequent products more effectively.", duration: "30 sec" },
  { step: 3, name: "Serum", description: "Apply your targeted treatment — Vitamin C for brightening, Niacinamide for oil control, or Hyaluronic Acid for hydration.", duration: "30 sec" },
  { step: 4, name: "Moisturizer", description: "Lock in hydration with a moisturizer suited to your skin type. Lightweight gel for oily, rich cream for dry.", duration: "30 sec" },
  { step: 5, name: "Sunscreen SPF 30+", description: "The most important step. Apply broad-spectrum SPF generously. Reapply every 2 hours when outdoors.", duration: "30 sec" },
];

const nightSteps = [
  { step: 1, name: "Oil Cleanser / Micellar Water", description: "First cleanse to dissolve sunscreen, makeup, and sebum accumulated during the day.", duration: "60 sec" },
  { step: 2, name: "Water-Based Cleanser", description: "Second cleanse to remove remaining impurities and ensure a perfectly clean canvas.", duration: "60 sec" },
  { step: 3, name: "Treatment", description: "Apply your active — Retinol for anti-aging, BHA for acne, or AHA for texture. Start slow, 2-3x per week.", duration: "30 sec" },
  { step: 4, name: "Moisturizer", description: "Use a slightly richer moisturizer at night. Your skin repairs while you sleep and benefits from extra hydration.", duration: "30 sec" },
];

const RoutineStep = ({ step, name, description, duration, index }: { step: number; name: string; description: string; duration: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1, ease: [0.32, 0.72, 0, 1] }}
    className="flex gap-4 items-start"
  >
    <div className="w-10 h-10 rounded-[12px] bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold shrink-0">
      {step}
    </div>
    <div className="flex-1 pb-6 border-b border-border last:border-0">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-foreground">{name}</h3>
        <span className="text-xs text-muted-foreground tabular-nums">{duration}</span>
      </div>
      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const RoutinePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="section-container pt-28 md:pt-32 section-padding">
        <header className="max-w-2xl mb-16">
          <span className="label-caps">Build Your Routine</span>
          <h1 className="text-4xl md:text-5xl font-serif italic mt-4 text-foreground">
            Consistency beats complexity. Every time.
          </h1>
          <p className="mt-4 prose-aureva">
            A well-structured routine takes less than 5 minutes and delivers visible results within weeks. Here's how to build yours.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Morning */}
          <div className="card-aureva">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-[12px] bg-accent flex items-center justify-center">
                <Sun size={18} className="text-accent-foreground" />
              </div>
              <div>
                <h2 className="text-xl font-serif italic text-foreground">Morning Routine</h2>
                <p className="text-xs text-muted-foreground">~3 minutes</p>
              </div>
            </div>
            <div className="space-y-4">
              {morningSteps.map((step, i) => (
                <RoutineStep key={step.step} {...step} index={i} />
              ))}
            </div>
          </div>

          {/* Night */}
          <div className="card-aureva">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-[12px] bg-accent flex items-center justify-center">
                <Moon size={18} className="text-accent-foreground" />
              </div>
              <div>
                <h2 className="text-xl font-serif italic text-foreground">Night Routine</h2>
                <p className="text-xs text-muted-foreground">~4 minutes</p>
              </div>
            </div>
            <div className="space-y-4">
              {nightSteps.map((step, i) => (
                <RoutineStep key={step.step} {...step} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RoutinePage;
