import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Categories.module.scss';
import { categories } from '../../../../data/categoriesData';
import { categoryIcons } from '../Categoriesicon';

const CategoriesList: React.FC = () => {
  return (
    <div className={styles.categories}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Категории товаров</h1>
          <p className={styles.heroSubtitle}>
            Выберите категорию музыкальных инструментов и найдите то, что вам нужно
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <div className={styles.container}>
        <div className={styles.categoriesGrid}>
          {categories.map((category) => {
            const categoryPath = `/categories/${category.id}`;
            
            return (
              <Link
                key={category.id}
                to={categoryPath}
                className={styles.categoryCard}
              >
                <div className={styles.cardIcon}>
                  {categoryIcons[category.id] || categoryIcons[1]}
                </div>
                <h2 className={styles.cardTitle}>{category.name}</h2>
                <div className={styles.cardSubcategories}>
                  {category.subcategories.map((subcategory, index) => (
                    <span key={index} className={styles.subcategoryTag}>
                      {subcategory}
                    </span>
                  ))}
                </div>
                <div className={styles.cardArrow}>→</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
