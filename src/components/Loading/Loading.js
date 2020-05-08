import React from "react";
import styles from "./Loading.module.scss";

const Loading = () => {
    return (
        <div className={`${styles.Loading}`}>
            <div className={`${styles.textCenter} ${styles.my5}`}>
                <i className="fas fa-circle-notch fa-spin fa-2x"></i>
            </div>
        </div>
    );
}

export default Loading;