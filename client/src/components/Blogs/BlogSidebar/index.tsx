import React from 'react';
import styles from './BlogSidebar.module.scss';

interface BlogSidebarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onSearchChange: (search: string) => void;
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  onSearchChange
}) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.searchSection}>
        <h3>Поиск</h3>
        <input
          type="text"
          placeholder="Поиск по статьям..."
          className={styles.searchInput}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      
      <div className={styles.categoriesSection}>
        <h3>Категории</h3>
        <div className={styles.categoriesList}>
          <button
            className={`${styles.categoryItem} ${selectedCategory === 'all' ? styles.active : ''}`}
            onClick={() => onCategoryChange('all')}
          >
            Все статьи
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryItem} ${selectedCategory === category ? styles.active : ''}`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className={styles.popularSection}>
        <h3>Популярные теги</h3>
        <div className={styles.tags}>
          <span className={styles.tag}>Гитары</span>
          <span className={styles.tag}>Клавишные</span>
          <span className={styles.tag}>Струнные</span>
          <span className={styles.tag}>Ударные</span>
          <span className={styles.tag}>Духовые</span>
          <span className={styles.tag}>Оборудование</span>
          <span className={styles.tag}>Обучение</span>
          <span className={styles.tag}>Советы</span>
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;
