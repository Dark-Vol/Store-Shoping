import styles from "../../ProductForm/ProductCard.module.scss";

type CardFooterProps = {
  children: React.ReactNode;
  className?: string;
};

const CardFooter: React.FC<CardFooterProps> = ({ children, className = "" }) => (
  <div className={`${styles.cardFooter} ${className}`}>{children}</div>
);

export default CardFooter;
