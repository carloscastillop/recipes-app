import React from "react";
import styles from './SearchForm.module.scss';
import 'animate.css'
import AddIngredient from './AddIngredient/AddIngredient';

const searchForm = (props) => {

    let ingredients = null;
    let selectedIngredients = null;
    let disabledSearchBtn = true;
    let disabledSearchBtnCss = '';

    //Edit Ingredients BTN
    let editIngredients = null;
    if (props.ingredients.filter(ingredient => (ingredient.erasable && !ingredient.selected)).length > 0) {
        editIngredients = (
            <button
                className={`${styles.btn} ${styles.btnOutlineSecondary} ${styles.btnSm} ${styles.floatRight}`}
                onClick={e => {
                    props.edit()
                }}
            >
                {props.editStatus && <i className="fas fa-check"></i>}
                {!props.editStatus && <i className="fas fa-pen"></i>}

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
        disabledSearchBtnCss = 'animated pulse';
    }

    let searchBtn = (
        <button
            type="button"
            className={`${styles.btn} ${styles.btnOutlinePrimary} ${styles.btnLg} ${disabledSearchBtnCss}`}
            onClick={e => {
                props.click();
            }}
            disabled={disabledSearchBtn}
        >
            <i className="far fa-hand-point-down"></i> Get recipes!
        </button>
    );

    if (props.paginator.totalResults > 0) {
        searchBtn = (
            <div className={styles.textCenter}>
                <h5 className={`${styles.textMuted} ${styles.my3} animated bounce`}>
                    {props.paginator.totalResults} recipes found!
                </h5>
            </div>
        );
    }

    const intolerances = props.intolerances.map((intolerance) => {
        return (
            <div>
                <div className={`${styles.customControl} ${styles.customSwitch}`}>
                    <input
                        type="checkbox"
                        className={styles.customControlInput}
                        id={intolerance.id}/>
                    <label
                        className={styles.customControlLabel}
                        htmlFor={intolerance.id}
                    >
                        {intolerance.name} <span className={styles.small}>(test)</span>
                    </label>
                </div>
            </div>
        );
    })

    return (
        <div className={`${styles.SearchForm} ${styles.mb3}`}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.cardBody}>
                        <h3><i className="fas fa-utensils"></i> My pantry</h3>
                        <p>Select some ingredients you have to find some recipes ideas.</p>
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
                        {intolerances}
                    </div>
                    <div
                        className={`${styles.cardFooter} ${styles.textCenter} ${styles.bgWhite}`}>
                        {searchBtn}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default searchForm