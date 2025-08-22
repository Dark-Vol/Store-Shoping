import React from 'react';
import styles from './BlogCard.module.scss';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  image,
  author,
  date,
  category,
  readTime
}) => {
  return (
    <article className={styles.blogCard}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.category}>{category}</div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
        
        <div className={styles.meta}>
          <div className={styles.author}>
            <span className={styles.authorLabel}>Автор:</span>
            <span className={styles.authorName}>{author}</span>
          </div>
          
          <div className={styles.details}>
            <span className={styles.date}>{date}</span>
            <span className={styles.readTime}>{readTime}</span>
          </div>
        </div>
        
        <button className={styles.readMore}>
          Читать далее
        </button>
      </div>
    </article>
  );
};

export default BlogCard;
