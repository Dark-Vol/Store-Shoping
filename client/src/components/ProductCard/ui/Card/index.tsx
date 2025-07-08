import styles from "../../ProductForm/ProductCard.module.scss";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`${styles.card} ${className}`}>{children}</div>
);

export default Card;
