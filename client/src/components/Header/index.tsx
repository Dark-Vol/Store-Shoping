import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, CircleUserRound, ShoppingCart, ChevronDown } from "lucide-react";
import styles from "./Header.module.scss";
import { categories } from "../../data/categoriesData";

const Header: React.FC = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const categoriesRef = useRef<HTMLLIElement>(null);


  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoriesRef.current && !categoriesRef.current.contains(event.target as Node)) {
        setIsCategoriesOpen(false);
      }
    };

    if (isCategoriesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCategoriesOpen]);

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
                <li ref={categoriesRef} className={styles.categoriesDropdown}>
                  <Link 
                    to="/categories"
                    className={styles.categoriesButton}
                    onClick={toggleCategories}
                    aria-expanded={isCategoriesOpen}
                  >
                    Categories
                    <ChevronDown 
                      className={`${styles.chevron} ${isCategoriesOpen ? styles.rotate : ''}`} 
                    />
                  </Link>
                  {isCategoriesOpen && (
                    <ul className={styles.dropdownMenu}>
                      {categories.map((category) => (
                        <li key={category.id} className={styles.dropdownItem}>
                          <Link 
                            to={`/categories/${category.id}`}
                            onClick={() => setIsCategoriesOpen(false)}
                          >
                            {category.name}
                          </Link>
                          {category.subcategories.length > 0 && (
                            <ul className={styles.submenu}>
                              {category.subcategories.map((subcategory, index) => (
                                <li key={index}>
                                  <Link 
                                    to={`/categories/${category.id}/${subcategory.toLowerCase()}`}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setIsCategoriesOpen(false);
                                    }}
                                  >
                                    {subcategory}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
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
