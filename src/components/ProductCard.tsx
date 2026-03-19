import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import productImg1 from "@/assets/product-1.jpg";
import productImg2 from "@/assets/product-2.jpg";
import productImg3 from "@/assets/product-3.jpg";

const productImages = [productImg1, productImg2, productImg3];

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  category: string;
  skinType: string[];
  image?: string;
}

const ProductCard = ({ id, name, price, category, skinType }: ProductCardProps) => {
  const img = productImages[(id - 1) % productImages.length];

  return (
    <Link to={`/products/${id}`}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
        className="group card-aureva cursor-pointer"
      >
        <div className="aspect-[4/5] overflow-hidden rounded-[16px] bg-secondary mb-6">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-heading text-lg font-semibold">{name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{category}</p>
          </div>
          <span className="tabular-nums font-medium text-sm">{price}</span>
        </div>
        <div className="mt-3 flex gap-2 flex-wrap">
          {skinType.map((type) => (
            <span key={type} className="ingredient-badge text-[10px]">
              {type}
            </span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
