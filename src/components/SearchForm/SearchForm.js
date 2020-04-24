import React from "react";
import styles from './SearchForm.module.scss';

const searchForm = (props) => {
    return (
        <div className={`${styles.SearchForm} ${styles.mb3}`}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.cardBody}>
                        <h3>Recipe finder</h3>
                        <p>Search by main ingredients in my kitchen</p>
                        <div className={styles.mb1}>
                            <span className={`${styles.badge} ${styles.badgePill} ${styles.badgePrimary} ${styles.mr1}`}>
                                <i className="fas fa-minus"></i> Eggs
                            </span>
                        </div>
                        <div className={styles.mb2}>
                            <span className={`${styles.badge} ${styles.badgePill} ${styles.badgeSecondary} ${styles.mr1}`}>
                                <i className="fas fa-plus"></i> Meat
                            </span>
                            <span className={`${styles.badge} ${styles.badgePill} ${styles.badgeSecondary} ${styles.mr1}`}>
                                <i class="fas fa-plus"></i> Chicken
                            </span>
                            <span className={`${styles.badge} ${styles.badgePill} ${styles.badgeSecondary} ${styles.mr1}`}>
                                <i class="fas fa-plus"></i> Fish
                            </span>
                            <span className={`${styles.badge} ${styles.badgePill} ${styles.badgeSecondary} ${styles.mr1}`}>
                                <i class="fas fa-plus"></i> Pasta
                            </span>
                            <span className={`${styles.badge} ${styles.badgePill} ${styles.badgeSecondary} ${styles.mr1}`}>
                                <i class="fas fa-plus"></i> Potatoes
                            </span>
                        </div>
                        <div className={styles.mb1}>
                            <button
                                type="button"
                                className={`${styles.btn} ${styles.btnOutlineSecondary} ${styles.btnSm}`}
                            >
                                <i className="fas fa-plus"></i> Add ingredient
                            </button>
                        </div>
                    </div>
                    <div className={`${styles.cardFooter} ${styles.textCenter} ${styles.bgWhite}`}>
                        <button
                            type="button"
                            className={`${styles.btn} ${styles.btnOutlinePrimary} ${styles.btnLg}`}
                        >
                            <i className="far fa-hand-point-down"></i> Get recipes!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default searchForm