import styles from "./MainLoader.module.scss"

const MainLoader: React.FC = () => {
    return (
        <div className={styles.main_loader}>
            <div className="main-loader__container">
                <div className="main-loader__container-inner"></div>
            </div>
        </div>
    );
};

export default MainLoader;