import HeartIcon from "../icons/HeartIcon";
import StarIcon from "../icons/StarIcon";
import ZapIcon from "../icons/ZapIcon";
import VolumeIcon from "../icons/VolumeIcon";
import ShoppingCartIcon from "../icons/ShoppingCartIcon";
import Badge from "../ui/Badge";
import Card from "../ui/Card";
import CardHeader from "../ui/CardHeader";
import CardContent from "../ui/CardContent";
import CardFooter from "../ui/CardFooter";
import styles from "./ProductCard.module.scss";

const ProductCard: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Card className={styles.cardCustom}>
        <CardHeader className={styles.headerCustom}>
          <div className={styles.imageWrapper}>
            <img
              src="/assets/arrows/percent.svg"
              alt="Электрогитара Fender Stratocaster"
              className={styles.productImage}
            />
            <div className={styles.badgeDiscount}>
              <Badge variant="destructive">-15%</Badge>
            </div>
            <div className={styles.heartButton}>
              <button className={styles.heartBtn}>
                <HeartIcon className={styles.heartIcon} />
              </button>
            </div>
            <div className={styles.badgeType}>
              <Badge variant="secondary">
                <ZapIcon className={styles.zapIcon} /> Электро
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className={styles.contentCustom}>
          <div className={styles.titleBlock}>
            <h3 className={styles.productTitle}>Fender Player Stratocaster</h3>
            <p className={styles.productDesc}>Электрогитара, 6 струн, корпус из ольхи</p>
          </div>
          <div className={styles.ratingBlock}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className={i < 4 ? styles.starFilled : styles.starEmpty} />
              ))}
            </div>
            <span className={styles.ratingCount}>(127)</span>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <VolumeIcon className={styles.featureIcon} />
              <span>3 звукоснимателя</span>
            </div>
            <div className={styles.featureItem}>
              <span>Кленовый гриф</span>
            </div>
          </div>
          <div className={styles.priceBlock}>
            <span className={styles.price}>₴29,990</span>
            <span className={styles.oldPrice}>₴34,500</span>
          </div>
          <div className={styles.inStock}>✓ В наличии • Доставка завтра</div>
        </CardContent>
        <CardFooter className={styles.footerCustom}>
          <button className={styles.addToCartBtn}>
            <ShoppingCartIcon className={styles.cartIcon} />В корзину
          </button>
          <div className={styles.footerGrid}>
            <button className={styles.outlineBtn}>Купить в 1 клик</button>
            <button className={styles.outlineBtn}>Сравнить</button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard; 