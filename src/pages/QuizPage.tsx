import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";

interface Question {
  question: string;
  options: { label: string; value: string }[];
}

const questions: Question[] = [
  {
    question: "How does your skin feel after washing your face?",
    options: [
      { label: "Tight and dry", value: "dry" },
      { label: "Oily within an hour", value: "oily" },
      { label: "Comfortable and balanced", value: "normal" },
      { label: "Oily T-zone, dry cheeks", value: "combination" },
    ],
  },
  {
    question: "How often do you experience breakouts?",
    options: [
      { label: "Rarely or never", value: "dry" },
      { label: "Frequently, especially on forehead and chin", value: "oily" },
      { label: "Occasionally", value: "normal" },
      { label: "Mostly in the T-zone", value: "combination" },
    ],
  },
  {
    question: "How does your skin react to new products?",
    options: [
      { label: "Often gets red or irritated", value: "sensitive" },
      { label: "No issues, absorbs everything quickly", value: "oily" },
      { label: "Usually fine", value: "normal" },
      { label: "Sometimes reacts, depends on the area", value: "combination" },
    ],
  },
  {
    question: "What's your biggest skin concern?",
    options: [
      { label: "Dryness, flaking, or tightness", value: "dry" },
      { label: "Excess shine and large pores", value: "oily" },
      { label: "Dullness or uneven tone", value: "normal" },
      { label: "Redness and sensitivity", value: "sensitive" },
    ],
  },
  {
    question: "How does your skin look by midday?",
    options: [
      { label: "Still feels dry or tight", value: "dry" },
      { label: "Very shiny all over", value: "oily" },
      { label: "Looks about the same as morning", value: "normal" },
      { label: "Shiny nose but dry everywhere else", value: "combination" },
    ],
  },
];

const results: Record<string, { title: string; description: string; tips: string[] }> = {
  dry: {
    title: "Dry Skin",
    description: "Your skin tends to lack moisture and natural oils. Focus on hydration and barrier repair.",
    tips: ["Use cream-based cleansers", "Layer hydrating serums (Hyaluronic Acid)", "Choose rich moisturizers with Ceramides", "Avoid hot water when washing", "Use SPF daily to prevent moisture loss"],
  },
  oily: {
    title: "Oily Skin",
    description: "Your skin produces excess sebum, leading to shine and potential breakouts. Focus on balance, not stripping.",
    tips: ["Use gel or foam cleansers", "Niacinamide serums control oil", "Lightweight, oil-free moisturizers", "BHA (Salicylic Acid) for pores", "Don't skip moisturizer — it helps regulate oil"],
  },
  combination: {
    title: "Combination Skin",
    description: "You have different needs in different zones. The key is targeted treatment without over-doing it.",
    tips: ["Gentle cleanser for whole face", "Apply BHA only to oily zones", "Lightweight moisturizer everywhere", "Multi-masking: clay on T-zone, hydrating on cheeks", "Balance is everything"],
  },
  normal: {
    title: "Normal Skin",
    description: "Your skin is well-balanced. Focus on maintenance and prevention.",
    tips: ["Gentle cleanser to maintain balance", "Vitamin C for brightness and protection", "Moisturize to maintain hydration", "Retinol for anti-aging prevention", "SPF always"],
  },
  sensitive: {
    title: "Sensitive Skin",
    description: "Your skin reacts easily to products and environmental factors. Focus on calming and strengthening your barrier.",
    tips: ["Fragrance-free products only", "Centella Asiatica for calming", "Ceramides to strengthen barrier", "Patch test every new product", "Minimal routine — less is more"],
  },
};

const QuizPage = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      // Calculate result
      const counts: Record<string, number> = {};
      newAnswers.forEach((a) => {
        counts[a] = (counts[a] || 0) + 1;
      });
      const maxType = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
      setResult(maxType);
    }
  };

  const reset = () => {
    setCurrent(0);
    setAnswers([]);
    setResult(null);
  };

  const skinResult = result ? results[result] : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="section-container pt-28 md:pt-32 section-padding">
        <div className="max-w-2xl mx-auto">
          <header className="text-center mb-12">
            <span className="label-caps">Skin Quiz</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mt-4 text-foreground">
              Discover your skin type.
            </h1>
            <p className="mt-4 prose-aureva mx-auto text-center">
              Answer 5 quick questions to get personalized skincare recommendations.
            </p>
          </header>

          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              >
                {/* Progress */}
                <div className="flex gap-1 mb-8">
                  {questions.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-colors ${
                        i <= current ? "bg-primary" : "bg-secondary"
                      }`}
                    />
                  ))}
                </div>

                <h2 className="text-xl font-serif italic text-foreground mb-6">
                  {questions[current].question}
                </h2>

                <div className="space-y-3">
                  {questions[current].options.map((option, i) => (
                    <motion.button
                      key={option.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      onClick={() => handleAnswer(option.value)}
                      className="w-full text-left p-4 rounded-[16px] bg-card text-foreground text-sm hover:bg-secondary transition-colors"
                      style={{ boxShadow: "var(--shadow-sm)" }}
                    >
                      {option.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                className="card-aureva text-center"
              >
                <span className="label-caps">Your Result</span>
                <h2 className="text-3xl font-serif italic text-foreground mt-2">{skinResult?.title}</h2>
                <p className="mt-4 prose-aureva mx-auto text-center">{skinResult?.description}</p>

                <div className="mt-8 text-left">
                  <h3 className="text-sm font-semibold text-foreground mb-3">Recommended Tips</h3>
                  <ul className="space-y-2">
                    {skinResult?.tips.map((tip) => (
                      <li key={tip} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary">•</span> {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex gap-4 justify-center flex-wrap">
                  <button
                    onClick={reset}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[16px] bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 transition-colors"
                  >
                    <RotateCcw size={14} /> Retake Quiz
                  </button>
                  <Link
                    to="/skin-guide"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[16px] bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    Read Skin Guide <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuizPage;
