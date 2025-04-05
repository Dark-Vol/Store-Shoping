import React from "react";
import style from "./Home.module.scss";
import InputEmail from "@components/Inputs/InputEmail";
import InputPassword from "@components/Inputs/InputPassword";
import InputPasswordConfirm from "@components/Inputs/InputPasswordConfirm";

const Home: React.FC = () => {
    return (
        <div className={style.wrapper}>
            <main className={style.home}>
              Home Page
              <InputEmail />
              <InputPassword />
              <InputPasswordConfirm  />
            </main>
        </div>
    );
};

export default Home;