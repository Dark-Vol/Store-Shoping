import React from "react";
import style from "./Home.module.scss";

const Home: React.FC = () => {
  return (
    <section className={style.homePage}>
      <div className={style.hero}>
        <h1>Добро пожаловать в наш магазин</h1>
        <p>Найдите лучшие товары по выгодным ценам</p>
      </div>
      
      <div className={style.content}>
        <h2>Наши преимущества</h2>
        <div className={style.features}>
          <div className={style.feature}>
            <h3>Быстрая доставка</h3>
            <p>Доставляем по всей Украине в течение 1-3 дней</p>
          </div>
          <div className={style.feature}>
            <h3>Качественные товары</h3>
            <p>Только проверенные бренды и качественные материалы</p>
          </div>
          <div className={style.feature}>
            <h3>Гарантия возврата</h3>
            <p>30 дней на возврат товара без объяснения причин</p>
          </div>
        </div>
        
        {/* Добавляем много контента для тестирования */}
        <div className={style.testContent}>
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className={style.testSection}>
              <h3>Секция {i + 1}</h3>
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