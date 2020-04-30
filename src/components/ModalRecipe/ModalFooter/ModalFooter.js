import React from "react";
import styles from "../ModalRecipe.module.scss";

const ModalFooter = (props) => {

    let favourite = (
        <i className={`far fa-heart fa-2x ${styles.heartOff}`}></i>
    );
    if(props.favourites && props.recipe && props.favourites.find(r => r.id === props.recipe.id)){
        favourite = (
            <i className={`fas fa-heart fa-2x ${styles.heartOn}`}></i>
        );
    }

    return (
        <div className={`${styles.modalFooter}`}>
            <div className={`${styles.row} ${styles.w100}`}>
                <div className={`${styles.col} ${styles.textCenter}`}>
                    <button
                        type="button"
                        className={`${styles.btn} ${styles.btnLink} ${styles.btnSm}`}
                        onClick={e => {
                            props.favourite(props.recipe)
                        }}
                    >
                        {favourite}
                    </button>
                </div>
                <div className={`${styles.col} ${styles.textCenter}`}>
                    <button
                        type="button"
                        className={`${styles.btn} ${styles.btnLink} ${styles.btnSm}`}
                    >
                        <i className="fas fa-clipboard-list fa-2x"></i>
                    </button>
                </div>
                <div className={`${styles.col} ${styles.textCenter}`}>
                    <button
                        type="button"
                        className={`${styles.btn} ${styles.btnLink} ${styles.btnSm}`}
                        onClick={props.close.bind(this, '', false)}
                        aria-label="Close"
                    >
                        <i className="fas fa-times fa-2x"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default ModalFooter;