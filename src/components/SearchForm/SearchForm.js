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
                    className={`${deleteIngredientEdit} ${styles.ingredientBadge} ${styles.badge} ${styles.badgePill} ${styles.badgeSecondary} ${styles.mr1} ${styles.mb2} ${styles.mbMdSm1}`}
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

    if(props.results.isLoading) {
        searchBtn = (
            <div>
                <div className={`${styles.textCenter} ${styles.my1}`}>
                    <i className="fas fa-circle-notch fa-spin fa-2x"></i>
                </div>
            </div>
        );
    }

    if (props.results.results && props.results.paginator.totalResults > 0) {
        searchBtn = (
            <div className={styles.textCenter}>
                <h5 className={`${styles.textMuted} ${styles.mt3} ${styles.mb0} animated bounce`}>
                    {props.results.paginator.totalResults} recipes found!
                </h5>
                <div className={`animated bounce`}>
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>
        );
    }

    const intolerances = props.intolerances.map((intolerance) => {
        return (
            <div
                key={`intolerance-${intolerance.id}`}
                className={`${styles.col6} ${styles.colSm4} ${styles.colSm4} ${styles.mb2}`}
            >
                <div
                    className={`${styles.customControl} ${styles.customSwitch}`}
                >
                    <input
                        type="checkbox"
                        className={styles.customControlInput}
                        id={intolerance.id}
                    />
                    <label
                        className={styles.customControlLabel}
                        htmlFor={intolerance.id}
                        onClick={e => {
                            props.intolerancesToogle(intolerance.id)
                        }}
                    >
                        {intolerance.name}
                    </label>
                </div>
            </div>
        );
    })

    return (
        <div className={`${styles.SearchForm} ${styles.mb3}`}>
            <div className={styles.container}>
                <div className={`${styles.cardMain } ${styles.card} ${styles.borderWhite} ${styles.shadow}`}>
                    <div className={styles.cardBody}>
                        <h3 className={styles.my3}>
                            <i className="fas fa-utensils"></i> My pantry
                        </h3>
                        <p>Select some ingredients you have to find some recipe ideas.</p>
                        <div className={styles.mb3}>
                            {selectedIngredients}
                        </div>
                        <div className={styles.mb1}>
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
                        <div className={`${styles.card} ${styles.shadowSm} animated fadeInUp`}>
                            <div className={styles.cardBody}>
                                <h5 className={`${styles.mb3} ${styles.h6}`}>
                                    <i className="fas fa-exclamation-triangle"></i> Intolerances
                                </h5>
                                <div className={styles.row}>
                                    {intolerances}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        id='recipesFound'
                        className={`${styles.cardFooter} ${styles.textCenter} ${styles.bgWhite}`}>
                        {searchBtn}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default searchForm