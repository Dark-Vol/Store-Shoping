import React from 'react';
import styles from './Pagination.module.scss';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number; // Максимальное количество видимых страниц
  showFirstLast?: boolean; // Показывать ли кнопки "Первая" и "Последняя"
  showPrevNext?: boolean; // Показывать ли кнопки "Предыдущая" и "Следующая"
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  maxVisiblePages = 5,
  showFirstLast = true,
  showPrevNext = true,
  className = ''
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  if (totalPages <= 1) {
    return null;
  }

  // Вычисляем диапазон страниц для отображения
  const getVisiblePages = () => {
    const halfVisible = Math.floor(maxVisiblePages / 2);
    let startPage = Math.max(1, currentPage - halfVisible);
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    // Корректируем начальную страницу, если не хватает страниц в конце
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

  const visiblePages = getVisiblePages();

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <nav className={`${styles.pagination} ${className}`} aria-label="Навигация по страницам">
      <ul className={styles.paginationList}>
        {/* Кнопка "Первая страница" */}
        {showFirstLast && currentPage > 1 && (
          <li className={styles.paginationItem}>
            <button
              className={`${styles.paginationButton} ${styles.firstButton}`}
              onClick={() => handlePageChange(1)}
              aria-label="Перейти на первую страницу"
            >
              <span className={styles.buttonText}>Первая</span>
            </button>
          </li>
        )}

        {/* Кнопка "Предыдущая страница" */}
        {showPrevNext && currentPage > 1 && (
          <li className={styles.paginationItem}>
            <button
              className={`${styles.paginationButton} ${styles.prevButton}`}
              onClick={() => handlePageChange(currentPage - 1)}
              aria-label="Перейти на предыдущую страницу"
            >
              <span className={styles.buttonText}>‹</span>
            </button>
          </li>
        )}

        {/* Номера страниц */}
        {visiblePages.map((page) => (
          <li key={page} className={styles.paginationItem}>
            <button
              className={`${styles.paginationButton} ${
                page === currentPage ? styles.active : ''
              }`}
              onClick={() => handlePageChange(page)}
              aria-label={`Перейти на страницу ${page}`}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </button>
          </li>
        ))}

        {/* Кнопка "Следующая страница" */}
        {showPrevNext && currentPage < totalPages && (
          <li className={styles.paginationItem}>
            <button
              className={`${styles.paginationButton} ${styles.nextButton}`}
              onClick={() => handlePageChange(currentPage + 1)}
              aria-label="Перейти на следующую страницу"
            >
              <span className={styles.buttonText}>›</span>
            </button>
          </li>
        )}

        {/* Кнопка "Последняя страница" */}
        {showFirstLast && currentPage < totalPages && (
          <li className={styles.paginationItem}>
            <button
              className={`${styles.paginationButton} ${styles.lastButton}`}
              onClick={() => handlePageChange(totalPages)}
              aria-label="Перейти на последнюю страницу"
            >
              <span className={styles.buttonText}>Последняя</span>
            </button>
          </li>
        )}
      </ul>

      {/* Информация о текущем состоянии */}
      <div className={styles.paginationInfo}>
        <span className={styles.infoText}>
          Страница {currentPage} из {totalPages}
        </span>
        <span className={styles.infoText}>
          Показано {Math.min((currentPage - 1) * itemsPerPage + 1, totalItems)} - {Math.min(currentPage * itemsPerPage, totalItems)} из {totalItems} элементов
        </span>
      </div>
    </nav>
  );
};

export default Pagination;
