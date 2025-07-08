import styles from "../../ProductForm/ProductCard.module.scss";

type CardContentProps = {
  children: React.ReactNode;
  className?: string;
};

const CardContent: React.FC<CardContentProps> = ({ children, className = "" }) => (
  <div className={`${styles.cardContent} ${className}`}>{children}</div>
);

export default CardContent;
