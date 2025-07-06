import GetLayoutChat from '@components/Chat/GetLayoutChat';
import Footer from '@components/Footer';
import Header from '@components/Header';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

const LayOut: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <GetLayoutChat />
      <Footer />
    </div>
  );
};

export default LayOut;