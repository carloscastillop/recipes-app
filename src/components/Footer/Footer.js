import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className={styles.Footer}>
            <div className={styles.textCenter}>
                {process.env.REACT_APP_RECIPE_NAME} © {year}
            </div>
        </div>
    );
}

export default Footer;