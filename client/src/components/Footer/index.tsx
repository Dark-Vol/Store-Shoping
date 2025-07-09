import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerMain}>
          <div className={styles.footerSection}>
            <nav aria-label="Company Information">
              <h4>Company</h4>
              <ul>
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/services">Our Services</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/affiliate">Affiliate Program</a></li>
              </ul>
            </nav>
          </div>
          <div className={styles.footerSection}>
            <nav aria-label="Customer Support">
              <h4>Get Help</h4>
              <ul>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/shipping">Shipping</a></li>
                <li><a href="/returns">Returns</a></li>
                <li><a href="/order-status">Order Status</a></li>
                <li><a href="/payment-options">Payment Options</a></li>
              </ul>
            </nav>
          </div>
          <div className={styles.footerSection}>
            <nav aria-label="Online Shop">
              <h4>Online Shop</h4>
              <ul>
                <li><a href="/shop/watch">Watch</a></li>
                <li><a href="/shop/bag">Bag</a></li>
                <li><a href="/shop/shoes">Shoes</a></li>
                <li><a href="/shop/dress">Dress</a></li>
              </ul>
            </nav>
          </div>
          <div className={styles.footerSection}>
            <h4>Follow Us</h4>
            <div className={styles.socialLinks}>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <img src="/assets/icons/linkedin-1-svgrepo-com.svg" alt="LinkedIn" />
              </a>
              <a href="https://t.me/" aria-label="Telegram">
                <img src="/assets/icons/telegram-svgrepo-com.svg" alt="Telegram" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <img src="/assets/icons/twitter-svgrepo-com.svg" alt="Twitter" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <img src="/assets/icons/instagram-1-svgrepo-com.svg" alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
