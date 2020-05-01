import React, {useState} from "react";
import styles from "./AddIngredient.module.scss";

const AddIngredient = (props) => {

    const [showIngredientFormState, setShowIngredientFormState] = useState({
        show: false
    });

    const showIngredientFormHandler = () => {
        if(!showIngredientFormState.show){
            props.clear();
        }
        setShowIngredientFormState({
            show: !showIngredientFormState.show,
        });
    }

    const clickAddHandler = () => {
        props.add();
        showIngredientFormHandler();
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
        let disabledBtn = true;
        if(props.ingredientForm.length > 2){
            disabledBtn = false;
        }
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
                                value={props.ingredientForm}
                                className={styles.formControl}
                                placeholder="Add an ingredient"
                                aria-label="Add an ingredient"
                                aria-describedby="addIngredientInputBtn"
                                onChange={props.changed}
                                autoFocus
                            />
                            <div className={styles.inputGroupAppend}>
                                <button
                                    className={`${styles.btn} ${styles.btnOutlineSecondary}`}
                                    type="button"
                                    id="addIngredientInputBtn"
                                    onClick={e => {
                                        clickAddHandler();
                                    }}
                                    disabled={disabledBtn}
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
        <div className={`${styles.addIngredient} ${styles.mb4}`}>
            {ingredientForm}
        </div>
    );
}
export default AddIngredient;