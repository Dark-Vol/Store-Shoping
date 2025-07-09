import GetLayoutChat from '@components/Chat/GetLayoutChat';
import Footer from '@components/Footer';
import Header from '@components/Header';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

const LayOut: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.mainContent}>
        <div className={styles.pageContent}>
          <Outlet />
        </div>
        <GetLayoutChat />
      </div>
      <Footer />
    </div>
  );
};

export default LayOut;