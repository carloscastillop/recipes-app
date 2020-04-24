import React from "react";
import styles from "./RecipeCard.module.scss";

const RecipeCard = () => {
    return (
        <div className={`${styles.card} ${styles.RecipeCard} ${styles.mb5}`}>
            <img src='https://via.placeholder.com/640x480?text=RECIPE' className={styles.imgFluid}/>
            <div className={styles.cardBody}>
                <h5 className={styles.cardTitle}>
                    Recipe title
                </h5>
                <a href="#" className={`${styles.btn} ${styles.btnPrimary}`}>
                    View
                </a>
            </div>
        </div>
    );
}

export default RecipeCard;
