import React from "react";
import styles from "../Header/Header.module.scss";
import LazyLoad from "react-lazyload";
import banner from "../../assets/banner.jpg";

const HeaderBanner = (props) => {
    return (
        <div className={styles.HeaderBanner}>
            <div className={` ${styles.topHeader} ${styles.textCenter} ${styles.mb3}`}>
                <LazyLoad
                    height={250}
                >
                    <img
                        src={banner}
                        className={styles.imgFluid}
                        alt='banner'
                    />
                </LazyLoad>
            </div>
        </div>
    );
}

export default HeaderBanner;