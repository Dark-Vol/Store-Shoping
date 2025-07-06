import { useTheme } from '../../../contexts/ThemeContext';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { toggleTheme } from '../../../store/themeSlice';
import styles from './BtnThemeToggle.module.scss';

function BtnThemeToggle() {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const reduxTheme = useAppSelector(state => state.theme.theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      className={styles.BtnThemeToggle}
      onClick={handleToggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? '🌞' : '🌙'}
    </button>
  );
}

export default BtnThemeToggle;
