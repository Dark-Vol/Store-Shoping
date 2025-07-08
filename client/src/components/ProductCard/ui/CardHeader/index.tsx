import styles from "../../ProductForm/ProductCard.module.scss";

type CardHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

const CardHeader: React.FC<CardHeaderProps> = ({ children, className = "" }) => (
  <div className={`${styles.cardHeader} ${className}`}>{children}</div>
);

export default CardHeader;
