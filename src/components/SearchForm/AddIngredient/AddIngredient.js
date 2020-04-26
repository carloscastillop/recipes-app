import React, {useState} from "react";
import styles from "./AddIngredient.module.scss";

const AddIngredient = (props) => {

    const [showIngredientFormState, setShowIngredientFormState] = useState({
        show: false
    });

    const showIngredientFormHandler = () => {
        setShowIngredientFormState({
            show: !showIngredientFormState.show,
        });
    }

    let ingredientForm = (
        <button
            type="button"
            className={`${styles.btn} ${styles.btnOutlineSecondary} ${styles.btnSm}`}
            onClick={e => {
                showIngredientFormHandler()
            }}
        >
            <i className="fas fa-plus"></i> Add ingredient
        </button>
    );
    if (showIngredientFormState.show) {
        ingredientForm = (
            <div className={styles.my3}>
                <div className={`${styles.card} ${styles.shadowSm}`}>
                    <div className={styles.cardBody}>
                        <button
                            type="button"
                            className={`${styles.close} ${styles.addIngredientClose} `}
                            aria-label="Close"
                            onClick={e => {
                                showIngredientFormHandler()
                            }}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className={`${styles.inputGroup}`}>
                            <input
                                id="addIngredientInput"
                                type="text"
                                className={styles.formControl}
                                placeholder="Add an ingredient"
                                aria-label="Add an ingredient"
                                aria-describedby="button-addon2"
                                autoFocus
                            />
                            <div className={styles.inputGroupAppend}>
                                <button
                                    className={`${styles.btn} ${styles.btnOutlineSecondary}`}
                                    type="button"
                                    id="button-addon2"
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`${styles.addIngredient} ${styles.mb3}`}>
            {ingredientForm}
        </div>
    );
}
export default AddIngredient;