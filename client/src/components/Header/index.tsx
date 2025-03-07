// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import stytles from "./Header.module.scss";

const Header = () => {
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
    //     setMenuOpen(!menuOpen);
    // };

    return (
        <header className={stytles.header}>header</header>
        // <header className={`header ${scrolled ? "scrolled" : ""}`}>
        //     <div className="header-container">
        //         <div className="logo">LOGO</div>
        //         <nav className="desktop-nav">
        //         <Link to="/">Home</Link>
        //             <Link to="/about">About</Link>
        //             <Link to="#">Services</Link>
        //             <Link to="/contact">Contact</Link>
        //             <Link to="/products">Products</Link>
        //         </nav>
        //         <div className="button-container">
        //             {/* <form id="searchbox" action="">
        //                 <input type="search" placeholder="Найти" />
        //                 <input type="submit" id="btn-search" value="" />
        //             </form> */}
        //             <button className="cta-button">Get Started</button>
        //             <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        //                 <span></span>
        //                 <span></span>
        //                 <span></span>
        //             </button>
        //         </div>
        //     </div>
        //     <div className=
        //     {
        //         `mobile-menu ${menuOpen ? "open" : ""}`
        //     } 
        //     onClick={toggleMenu}>
        //         <Link to="/">Home</Link>
        //         <Link to="/about">About</Link>
        //         <Link to="#">Services</Link>
        //         <Link to="/contact">Contact</Link>
        //         <Link to="/products">Products</Link>
        //         <button className="mobile-cta-button">Get Started</button>
        //     </div>
        // </header>
    );
};

export default Header;
