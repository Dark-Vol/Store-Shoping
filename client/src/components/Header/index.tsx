// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Search, CircleUserRound, ShoppingCart  } from "lucide-react"
import styles from "./Header.module.scss";

const Header: React.FC = () => {
    // const [scrolled, setScrolled] = useState(false);
    // const [menuOpen, setMenuOpen] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrolled(window.scrollY > 50);
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    // const toggleMenu = () => {
    //     setMenuOpen((prev) => !prev);
    // };

    return (
        // <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        //     <div className={styles.header_container}>
        //         <div className={styles.logo}>LOGO</div>
        //         <nav className={styles.desktop_nav}>
        //             <Link to="/">Home</Link>
        //             <Link to="/about">About</Link>
        //             <Link to="#">Services</Link>
        //             <Link to="/contact">Contact</Link>
        //             <Link to="/products">Products</Link>
        //         </nav>
        //         <div className={styles.button_container}>
        //             <button className={styles.cta_button}>Get Started</button>
        //             <button className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`} onClick={toggleMenu}>
        //                 <span></span>
        //                 <span></span>
        //                 <span></span>
        //             </button>
        //         </div>
        //     </div>
        //     <div className={`${styles.mobile_menu} ${menuOpen ? styles.open : ""}`} onClick={toggleMenu}>
        //         <Link to="/">Home</Link>
        //         <Link to="/about">About</Link>
        //         <Link to="#">Services</Link>
        //         <Link to="/contact">Contact</Link>
        //         <Link to="/products">Products</Link>
        //         <button className={styles.mobile_cta_button}>Get Started</button>
        //     </div>
        // </header>
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
            <CircleUserRound className={styles.icon} />
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
        </div>
      </header>
    );
};

export default Header;