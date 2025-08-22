import React from 'react';
import styles from './BlogHero.module.scss';

const BlogHero: React.FC = () => {
  return (
    <section className={styles.blogHero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Блог о музыкальных инструментах</h1>
        <p className={styles.subtitle}>
          Полезные статьи, советы по выбору и уходу за инструментами, новости музыкальной индустрии
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
