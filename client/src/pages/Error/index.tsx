import { Link } from "react-router-dom";
import styles from "./Error.module.scss";

const Error: React.FC = () => {
    return (
        <div className={styles.container}>
            <img 
                src="https://raw.githubusercontent.com/ojsf930fawdj2q92jdq9j2dq29peuhdq82h8q2h/mixpn/main/404.png" 
                alt="404 Error" 
                className={styles.img_error}
            />
            <div className={styles.box_info}>
                <h2 className={styles.titleError}>Oops!</h2>
                <p className={styles.descriptionError}>
                    We couldn't find the page you were looking for
                </p>

                <Link to="/" className={styles.box_btn}>
                    <svg 
                        className={styles.arrow_btn} 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g 
                            id="SVGRepo_tracerCarrier" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path 
                                d="M6 12H18M6 12L11 7M6 12L11 17" 
                                stroke="#ffffff" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            />
                        </g>
                    </svg>
                    <span className={styles.go_home}>Go home</span>
                </Link>
            </div>
        </div>
    );
};

export default Error;
