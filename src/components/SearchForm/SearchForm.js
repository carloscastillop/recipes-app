import React from "react";
import styles from './SearchForm.module.scss';
import AddIngredient from './AddIngredient/AddIngredient';

const searchForm = (props) => {

    let ingredients = null;
    let selectedIngredients = null;
    let disabledSearchBtn = true;

    if (props.ingredients) {
        const notSelected = props.ingredients.filter(ingredient => !ingredient.selected);
        const selected = props.ingredients.filter(ingredient => ingredient.selected);
        ingredients = notSelected.map((ingredient, index) => {
            return (
                <span
                    className={`${styles.ingredientBadge} ${styles.badge} ${styles.badgePill} ${styles.badgeSecondary} ${styles.mr1}`}
                    key={`filter-ingredient-${ingredient.name}-${index}`}
                    onClick={e => {
                        props.toogle(ingredient.id);
                    }}
                >
                    <i className="fas fa-plus"></i> {ingredient.name}
                </span>
            );
        });
        selectedIngredients = selected.map((ingredient, index) => {
            return (
                <span
                    className={`${styles.ingredientBadge} ${styles.badge} ${styles.badgePill} ${styles.badgePrimary} ${styles.mr1}`}
                    key={`filter-ingredient-${ingredient.name}-${index}`}
                    onClick={e => {
                        props.toogle(ingredient.id);
                    }}
                >
                    <i className="fas fa-minus"></i> {ingredient.name}
                </span>
            );
        });
    }
    if (selectedIngredients.length > 0) {
        disabledSearchBtn = false;
    }
    return (
        <div className={`${styles.SearchForm} ${styles.mb3}`}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.cardBody}>
                        <h3>Recipe finder</h3>
                        <p>Search by main ingredients in my kitchen</p>
                        <div className={styles.mb3}>
                            {selectedIngredients}
                        </div>
                        <div className={styles.mb3}>
                            {ingredients}
                        </div>

                        <AddIngredient
                            changed={props.changed}
                            add={props.add}
                            ingredientForm={props.ingredientForm}
                            clear={props.clear}
                        />

                        {/*Switch Example*/}
                        <div>
                            <div className={`${styles.customControl} ${styles.customSwitch}`}>
                                <input
                                    type="checkbox"
                                    className={styles.customControlInput}
                                    id="customSwitch1"/>
                                <label
                                    className={styles.customControlLabel}
                                    htmlFor="customSwitch1"
                                >Toggle this
                                    switch element</label>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.cardFooter} ${styles.textCenter} ${styles.bgWhite}`}>
                        <button
                            type="button"
                            className={`${styles.btn} ${styles.btnOutlinePrimary} ${styles.btnLg}`}
                            onClick={e => {
                                props.click();
                            }}
                            disabled={disabledSearchBtn}
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