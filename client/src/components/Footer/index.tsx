import styles from './Footer.module.scss';
const Footer: React.FC = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.footer_col}>
                        <h4>company</h4>
                        <ul>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">our services</a></li>
                            <li><a href="#">privacy policy</a></li>
                            <li><a href="#">affiliate program</a></li>
                        </ul>
                    </div>
                    <div className={styles.footer_col}>
                        <h4>get help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">shipping</a></li>
                            <li><a href="#">returns</a></li>
                            <li><a href="#">order status</a></li>
                            <li><a href="#">payment options</a></li>
                        </ul>
                    </div>
                    <div className={styles.footer_col}>
                        <h4>online shop</h4>
                        <ul>
                            <li><a href="#">watch</a></li>
                            <li><a href="#">bag</a></li>
                            <li><a href="#">shoes</a></li>
                            <li><a href="#">dress</a></li>
                        </ul>
                    </div>
                    <div className={styles.footer_col}>
                        <h4>follow us</h4>
                        <div className={styles.social_links}>
                            <a href="#">
                                <i className={styles.fab}>
                                    <img src="/assets/icons/linkedin-1-svgrepo-com.svg" alt="linkedin" />
                                </i>
                            </a>
                            <a href="#">
                                <i className={styles.fab}>
                                    <img src="/assets/icons/telegram-svgrepo-com.svg" alt="telegram" />
                                </i>
                            </a>
                            <a href="#">
                                <i className={styles.fab}>
                                    <img src="/assets/icons/twitter-svgrepo-com.svg" alt="twitter" />
                                </i>
                            </a>
                            <a href="#">
                                <i className={styles.fab}>
                                    <img src="/assets/icons/instagram-1-svgrepo-com.svg" alt="instagram" />
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;