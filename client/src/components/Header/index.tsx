import { Search, CircleUserRound, ShoppingCart } from "lucide-react"
import styles from "./Header.module.scss";
import BtnThemeToggle from "@components/Buttons/BtnThemeToggle";

const Header: React.FC = () => {
    return (
        <header className={styles.header_large}>
        <div className={styles.top_bar}>
          <div className={styles.container}>
            <p>Бесплатная доставка при заказе от 5000 UAH</p>
            <div className={styles.top_links}>
              <a href="/help">Помощь</a>
              <a href="/faq">FAQ</a>
            </div>
          </div>
        </div>
        <div className={styles.container_main_header}>
          <div className={styles.logo}>
            <a href="/">ShopLogo</a>
          </div>
          <nav className={styles.nav}>
            <ul>
              <li><a href="/shop">Магазин</a></li>
              <li><a href="/categories">Категории</a></li>
              <li><a href="/deals">Скидки</a></li>
              <li><a href="/about">О нас</a></li>
              <li><a href="/contact">Контакты</a></li>
            </ul>
          </nav>
          <div className={styles.actions}>
            <Search  className={styles.icon} />
            <a href="/login">
              <CircleUserRound className={styles.icon} />
            </a>
            <ShoppingCart className={styles.icon} />
          </div>
        </div>
        <div className={styles.bottom_bar}>
          <div className={styles.container}>
            <ul>
              <li><a href="/new">Новинки</a></li>
              <li><a href="/best-sellers">Популярное</a></li>
              <li><a href="/gift-cards">Подарочные карты</a></li>
              <li><a href="/blog">Блог</a></li>
            </ul>
          </div>
          <BtnThemeToggle />
        </div>
      </header>
    );
};

export default Header;