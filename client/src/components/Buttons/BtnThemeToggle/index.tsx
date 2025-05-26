import { useContext } from 'react';
import { ThemeContext } from '../../../RouterSystem';
import styles from './BtnThemeToggle.module.scss';

function BtnThemeToggle() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('ThemeToggle must be used within a ThemeContext.Provider');
  }

  const { theme, setTheme } = context;

  return (
    <button
      className={styles.BtnThemeToggle}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? '🌞' : '🌙'}
    </button>
  );
}

export default BtnThemeToggle;
