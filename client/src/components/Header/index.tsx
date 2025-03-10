import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.header_container}>
                <div className={styles.logo}>LOGO</div>
                <nav className={styles.desktop_nav}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="#">Services</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/products">Products</Link>
                </nav>
                <div className={styles.button_container}>
                    <button className={styles.cta_button}>Get Started</button>
                    <button className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
            <div className={`${styles.mobile_menu} ${menuOpen ? styles.open : ""}`} onClick={toggleMenu}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="#">Services</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/products">Products</Link>
                <button className={styles.mobile_cta_button}>Get Started</button>
            </div>
        </header>
    );
};

export default Header;
