import React from "react";
import styles from "./Header.module.scss";
import {Link} from "react-router-dom";

const header = (props) => {
    const favouritesCounter = (props.favourites) ? props.favourites.length : 0;
    const chosenCounter = (props.chosen) ? props.chosen.length : 0;
    return (
        <React.Fragment>
            <header className={styles.Header}>
                <nav
                    className={`${styles.navbar} ${styles.stickyTop} ${styles.navbarDark} ${styles.bgPrimary} ${styles.mx0}`}
                >
                    <div className={`${styles.container}`}>
                        <Link to="/">
                            <span className={styles.navbarBrand}>
                                <i className={`fas fa-utensils ${styles.logo} ${styles.mr2}`}></i> Recipes app
                            </span>
                        </Link>
                        <div>
                            <Link to="/favourites/" className={`${styles.btn} ${styles.favouritesBtn}`}>
                                <i className="fas fa-heart"></i>
                                <span
                                    className={`${styles.badge} ${styles.badgePill} ${styles.badgeLight} ${styles.mr1}`}>
                                    {favouritesCounter}
                                </span>
                            </Link>
                            <Link to="/chosen/" className={`${styles.btn} ${styles.chosenBtn}`}>
                                <i className="fas fa-clipboard-list"></i>
                                <span
                                    className={`${styles.badge} ${styles.badgePill} ${styles.badgeLight} ${styles.mr1}`}>
                                    {chosenCounter}
                                </span>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        </React.Fragment>
    );
}

export default header;