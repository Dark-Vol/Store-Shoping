import React from "react";
import style from "./Home.module.scss";

const Home: React.FC = () => {
  return (
    <section className={style.homePage}>
      <div className={style.hero}>
        <h1>Welcome to our store</h1>
        <p>Find the best products at competitive prices</p>
      </div>
      
      <div className={style.content}>
        <h2>Our advantages</h2>
        <div className={style.features}>
          <div className={style.feature}>
            <h3>Fast delivery</h3>
            <p>Delivered across the country within 1-3 days</p>
          </div>
          <div className={style.feature}>
            <h3>Quality products</h3>
            <p>Only verified brands and quality materials</p>
          </div>
          <div className={style.feature}>
            <h3>Return guarantee</h3>
            <p>30 days to return the product without explanation</p>
          </div>
        </div>
        
        {/* Добавляем много контента для тестирования */}
        <div className={style.testContent}>
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className={style.testSection}>
              <h3>Section {i + 1}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;