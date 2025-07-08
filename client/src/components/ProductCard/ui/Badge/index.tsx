import styles from "../../ProductForm/ProductCard.module.scss";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "destructive" | "secondary";
  className?: string;
};

const Badge: React.FC<BadgeProps> = ({ children, variant, className = "" }) => (
  <span className={`${styles.badge} ${variant ? styles[variant] : ""} ${className}`}>{children}</span>
);

export default Badge;
