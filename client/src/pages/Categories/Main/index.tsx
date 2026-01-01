import React from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { Music } from 'lucide-react';
import styles from './Categories.module.scss';
import { categories } from '../../../data/categoriesData';
import CategoriesList from './Categorieslist';
import { categoryIconsLarge } from './Categoriesicon';
export { CategoriesList };

// Компонент для отображения конкретной категории с Outlet для подкатегорий
export const Categories: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const categoryId = id ? parseInt(id, 10) : null;
  const category = categoryId ? categories.find(cat => cat.id === categoryId) : null;

  if (!category) {
    return (
      <div className={styles.categories}>
        <div className={styles.container}>
          <h1>Категория не найдена</h1>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.categories}>
      <CategoriesList />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroIcon}>{categoryIconsLarge[category.id] || <Music size={64} />}</div>
          <h1 className={styles.heroTitle}>{category.name}</h1>
          <p className={styles.heroSubtitle}>
            Изучите нашу коллекцию {category.name.toLowerCase()}
          </p>
        </div>
      </section>

      <div className={styles.container}>
        <div className={styles.categoryDetail}>
          <h2 className={styles.subcategoriesTitle}>Подкатегории</h2>
          <div className={styles.subcategoriesGrid}>
            {category.subcategories.map((subcategory, index) => {
              const subcategoryPath = `/categories/${category.id}/${subcategory.toLowerCase().replace(/\s+/g, '-')}`;
              return (
                <Link
                  key={index}
                  to={subcategoryPath}
                  className={styles.subcategoryCard}
                >
                  <h3>{subcategory}</h3>
                  <span className={styles.subcategoryArrow}>→</span>
                </Link>
              );
            })}
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
