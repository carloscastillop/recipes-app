import React from "react";
import styles from './SearchForm.module.scss';

const searchForm = (props) => {

    let ingredients = null;
    let selectedIngredients = null;

    if (props.ingredients) {
        const notSelected = props.ingredients.filter(ingredient => !ingredient.selected);
        const selected = props.ingredients.filter(ingredient => ingredient.selected);
        ingredients = notSelected.map((ingredient, index) => {
            return (
                <span
                    className={`${styles.badge} ${styles.badgePill} ${styles.badgeSecondary} ${styles.mr1}`}
                    key={`filter-ingredient-${ingredient.name}-${index}`}
                >
                    <i className="fas fa-plus"></i> {ingredient.name}
                </span>
            );
        });
        selectedIngredients = selected.map((ingredient, index) => {
            return (
                <span
                    className={`${styles.badge} ${styles.badgePill} ${styles.badgePrimary} ${styles.mr1}`}
                    key={`filter-ingredient-${ingredient.name}-${index}`}
                >
                    <i className="fas fa-plus"></i> {ingredient.name}
                </span>
            );
        });
    }

    return (
        <div className={`${styles.SearchForm} ${styles.mb3}`}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.cardBody}>
                        <h3>Recipe finder</h3>
                        <p>Search by main ingredients in my kitchen</p>
                        <div className={styles.mb1}>
                            {selectedIngredients}
                        </div>
                        <div className={styles.mb2}>
                            {ingredients}
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
                            onClick={e => {
                                props.click();
                            }}
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