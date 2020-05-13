import React from "react";
import styles from "../Header/Header.module.scss";
import banner from "../../assets/banner.jpg";

const HeaderBanner = (props) => {
    return (
        <div className={styles.HeaderBanner}>
            <div className={` ${styles.topHeader} ${styles.textCenter} ${styles.mb3}`}>
                <img
                    src={banner}
                    className={styles.imgFluid}
                    alt='banner'
                />
            </div>
        </div>
    );
}

export default HeaderBanner;