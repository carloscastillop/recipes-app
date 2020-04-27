import React from "react";
import styles from './SearchForm.module.scss';
import AddIngredient from './AddIngredient/AddIngredient';

const searchForm = (props) => {

    let ingredients = null;
    let selectedIngredients = null;
    let disabledSearchBtn = true;

    //Edit Ingredients BTN
    let editIngredients = null;
    if (props.ingredients.filter(ingredient => (ingredient.erasable &&  !ingredient.selected)).length > 0) {
        editIngredients = (
            <button
                className={`${styles.btn} ${styles.btnOutlineSecondary} ${styles.btnSm} ${styles.floatRight}`}
                onClick={e => {
                    props.edit()
                }}
            >
                { props.editStatus && <i className="fas fa-check"></i> }
                { !props.editStatus && <i className="fas fa-pen"></i> }

            </button>
        );
    }

    if (props.ingredients) {
        const notSelected = props.ingredients.filter(ingredient => !ingredient.selected);
        const selected = props.ingredients.filter(ingredient => ingredient.selected);
        ingredients = notSelected.map((ingredient, index) => {
            let deleteIngredientEdit = '';
            if (props.editStatus && ingredient.erasable) {
                deleteIngredientEdit = styles.deleteIngredientEdit;
            }
            return (
                <span
                    className={`${deleteIngredientEdit} ${styles.ingredientBadge} ${styles.badge} ${styles.badgePill} ${styles.badgeSecondary} ${styles.mr1} ${styles.mb1}`}
                    key={`filter-ingredient-${ingredient.name}-${index}`}
                    onClick={e => {
                        if (!props.editStatus) {
                            props.toogle(ingredient.id);
                        }
                    }}
                >
                    {
                        (!props.editStatus || !ingredient.erasable) &&
                        <i className={`fas fa-plus ${styles.mr1}`}></i>
                    }
                    {ingredient.name}
                    {
                        (props.editStatus && ingredient.erasable) &&
                        <span
                            className={styles.deleteIngredient}
                            onClick={e => {
                                props.deleteIngredient(ingredient.id)
                            }}
                        >
                            <i className="fas fa-times"></i>
                        </span>
                    }
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
                            {editIngredients}
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