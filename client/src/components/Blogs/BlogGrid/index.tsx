import React from 'react';
import BlogCard from '../BlogCard';
import styles from './BlogGrid.module.scss';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

interface BlogGridProps {
  posts: BlogPost[];
}

const BlogGrid: React.FC<BlogGridProps> = ({ posts }) => {
  return (
    <section className={styles.blogGrid}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              {...post}
            />
          ))}
        </div>
        
        {posts.length === 0 && (
          <div className={styles.emptyState}>
            <h3>Пока нет статей</h3>
            <p>Мы работаем над созданием интересного контента для вас</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;
