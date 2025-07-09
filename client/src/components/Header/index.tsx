import { Search, CircleUserRound, ShoppingCart } from "lucide-react";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBanner}>
        <div className={styles.bannerContent}>
          <p className={styles.bannerText}>Бесплатная доставка при заказе от 5000 UAH</p>
          <div className={styles.bannerLinks}>
            <a href="/help">Помощь</a>
            <a href="/faq">FAQ</a>
          </div>
        </div>
      </div>
      <div className={styles.mainHeader}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <a href="/">ShopLogo</a>
          </div>
          <div className={styles.navigation}>
            <nav>
              <ul>
                <li><a href="/shop">Магазин</a></li>
                <li><a href="/categories">Категории</a></li>
                <li><a href="/deals">Скидки</a></li>
                <li><a href="/aboutus">О нас</a></li>
                <li><a href="/contact">Контакты</a></li>
              </ul>
            </nav>
          </div>
          <div className={styles.headerActions}>
            <Search className={styles.searchIcon} />
            <a href="/login">
              <CircleUserRound className={styles.userIcon} />
            </a>
            <ShoppingCart className={styles.cartIcon} />
          </div>
        </div>
      </div>
      <div className={styles.bottomNav}>
        <div className={styles.bottomNavContent}>
          <ul>
            <li><a href="/new">Новинки</a></li>
            <li><a href="/best-sellers">Популярное</a></li>
            <li><a href="/gift-cards">Подарочные карты</a></li>
            <li><a href="/blog">Блог</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
