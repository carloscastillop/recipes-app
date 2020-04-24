import React from "react";
import styles from "./Header.module.scss";

const header = (props) => {
    return (
        <header className={styles.Header}>
            <nav
                className={`${styles.navbar} ${styles.stickyTop} ${styles.navbarLight} ${styles.bgLight} ${styles.mx0}`}
            >
                <div className={`${styles.container}`}>
                    <a className="navbar-brand">Recipes app</a>
                    <div>
                        <button className={`${styles.btn}`}>
                            <i className="far fa-heart"></i>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default header;