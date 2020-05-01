import React from "react";
import styles from "./Header.module.scss";
import {Link} from "react-router-dom";
import banner from "../../assets/banner.jpg";
import LazyLoad from 'react-lazyload';

const header = (props) => {
    const favouritesCounter = (props.favourites) ? props.favourites.length : 0;
    const chosenCounter = (props.chosen) ? props.chosen.length : 0;
    return (
        <React.Fragment>
            <header className={styles.Header}>
                <nav
                    className={`${styles.navbar} ${styles.stickyTop} ${styles.navbarLight} ${styles.bgLight} ${styles.mx0}`}
                >
                    <div className={`${styles.container}`}>
                        <Link to="/">
                            <span className={styles.navbarBrand}>
                                <i className={`fas fa-utensils ${styles.logo}`}></i> Recipes app
                            </span>
                        </Link>
                        <div>
                            <Link to="/favourites" className={`${styles.btn} ${styles.favouritesBtn}`}>
                                <i className="fas fa-heart"></i>
                                <span
                                    className={`${styles.badge} ${styles.badgePill} ${styles.badgePrimary} ${styles.mr1}`}>
                                    {favouritesCounter}
                                </span>
                            </Link>
                            <Link to="/chosen" className={`${styles.btn} ${styles.chosenBtn}`}>
                                <i className="fas fa-clipboard-list"></i>
                                <span
                                    className={`${styles.badge} ${styles.badgePill} ${styles.badgePrimary} ${styles.mr1}`}>
                                    {chosenCounter}
                                </span>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
            <div className={`${styles.topHeader} ${styles.textCenter} ${styles.mb3}`}>
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
        </React.Fragment>
    );
}

export default header;