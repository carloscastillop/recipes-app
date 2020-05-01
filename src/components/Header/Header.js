import React from "react";
import styles from "./Header.module.scss";

const header = (props) => {
    const favouritesCounter = (props.favourites) ? props.favourites.length : 0;
    const listCounter = 0;
    return (
        <React.Fragment>
            <header className={styles.Header}>
                <nav
                    className={`${styles.navbar} ${styles.stickyTop} ${styles.navbarLight} ${styles.bgLight} ${styles.mx0}`}
                >
                    <div className={`${styles.container}`}>
                        <span className="navbar-brand">Recipes app</span>
                        <div>
                            <button className={`${styles.btn}`}>
                                <i className="far fa-heart"></i>
                                <span
                                    className={`${styles.badge} ${styles.badgePill} ${styles.badgePrimary} ${styles.mr1}`}>
                                    {favouritesCounter}
                                </span>
                            </button>
                            <button className={`${styles.btn}`}>
                                <i className="fas fa-clipboard-list"></i>
                                <span
                                    className={`${styles.badge} ${styles.badgePill} ${styles.badgePrimary} ${styles.mr1}`}>
                                    {listCounter}
                                </span>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
            <div className={`${styles.topHeader} ${styles.textCenter} ${styles.mb3}`}>
                <img
                    src='https://via.placeholder.com/800x250?text=A BANNER'
                    className={styles.imgFluid}
                    alt='banner'
                />
            </div>
        </React.Fragment>
    );
}

export default header;