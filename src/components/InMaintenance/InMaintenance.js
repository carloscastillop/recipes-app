import React from "react";
import styles from './InMaintenance.module.scss';

const InMaintenance = (props) => {
    return (
        <div className={styles.container}>
            <div className={`${styles.jumbotron} ${styles.shadowSm}`}>
                <h1 className={`${styles.display4} animated fadeInUp`}>We sorry!</h1>
                <p className={`${styles.lead} animated fadeInUp`}>
                    We are on maintenance, please come back tomorrow.
                </p>
                <div className={`${styles.my3} ${styles.textCenter} animated fadeInLeft`}>
                    <i className="fas fa-redo fa-3x"></i>
                </div>
            </div>
        </div>
    );
}

export default InMaintenance;