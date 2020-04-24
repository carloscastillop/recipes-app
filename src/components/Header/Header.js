import React from "react";
import styles from "./Header.module.scss";

const header = (props) => {
    return (
        <React.Fragment>
            <header className={styles.Header}>
                <nav
                    className={`${styles.navbar} ${styles.stickyTop} ${styles.navbarLight} ${styles.bgLight} ${styles.mx0}`}
                >
                    <div className={`${styles.container}`}>
                        <a className="navbar-brand">Recipes app</a>
                        <div>
                            <button className={`${styles.btn}`}>
                                <i className="far fa-heart"></i>
                                <span className={`${styles.badge} ${styles.badgePill} ${styles.badgePrimary} ${styles.mr1}`}>
                                    12
                                </span>
                            </button>
                            <button className={`${styles.btn}`}>
                                <i className="fas fa-clipboard-list"></i>
                                <span className={`${styles.badge} ${styles.badgePill} ${styles.badgePrimary} ${styles.mr1}`}>
                                    3
                                </span>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="topHeader textCenter mb3">
                <a href="#">
                    <img src='https://via.placeholder.com/800x400?text=A BANNER' className={styles.imgFluid}/>
                </a>
            </div>
        </React.Fragment>
    );
}

export default header;