import React from "react";
import style from "./Home.module.scss";

const Home: React.FC = () => {
    return (
        <div className={style.wrapper}>
            <main className={style.home}>
                Home Page
            </main>
        </div>
    );
};

export default Home;