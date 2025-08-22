import React from 'react';
import BlogHero from '@components/Blogs/BlogHero';
import BlogSidebar from '@components/Blogs/BlogSidebar';
import BlogGrid from '@components/Blogs/BlogGrid';
import Pagination from '@components/Pagination';
import mockPosts from '@components/Blogs/mockPosts';
import styles from './Blog.module.scss';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 6; // Показываем 6 постов на странице

  // Извлекаем уникальные категории из постов
  const categories = [...new Set(mockPosts.map(post => post.category))];

  const filteredPosts = mockPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Вычисляем посты для текущей страницы
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Прокручиваем наверх страницы
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Сбрасываем страницу при изменении фильтров
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  return (
    <div className={styles.blogPage}>
      <div className={styles.blogLayout}>
        <BlogHero />

        <div className={styles.mainContent}>
          <div className={styles.container}>
            <div className={styles.contentWrapper}>
              <aside className={styles.sidebarWrapper}>
                <BlogSidebar
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  onSearchChange={setSearchQuery}
                />
              </aside>

              <main className={styles.main}>
                <BlogGrid posts={currentPosts} />
                
                {/* Пагинация */}
                <Pagination
                  currentPage={currentPage}
                  totalItems={filteredPosts.length}
                  itemsPerPage={itemsPerPage}
                  onPageChange={handlePageChange}
                  maxVisiblePages={5}
                  showFirstLast={true}
                  showPrevNext={true}
                />
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}