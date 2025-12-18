import { Search, CircleUserRound, ShoppingCart } from "lucide-react";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBanner}>
        <div className={styles.bannerContent}>
          <p className={styles.bannerText}>Free shipping on orders over UAH 5,000</p>
          <div className={styles.bannerLinks}>
            <a href="/help">Help</a>
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
                <li><a href="/shop">Shop</a></li>
                <li><a href="/categories">Categories</a></li>
                <li><a href="/deals">Deals</a></li>
                <li><a href="/aboutus">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className={styles.headerActions}>
            <Search/>
            <a href="/login">
              <CircleUserRound />
            </a>
            <ShoppingCart />
          </div>
        </div>
      </div>
      <div className={styles.bottomNav}>
        <div className={styles.bottomNavContent}>
          <ul>
            <li><a href="/new">New</a></li>
            <li><a href="/best-sellers">Best Sellers</a></li>
            <li><a href="/gift-cards">Gift Cards</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
