import React from "react";
import {Link} from 'react-router-dom';
import styles from "../ModalRecipe.module.scss";

const ModalFooter = (props) => {

    let favourite = (
        <i className={`far fa-heart fa-2x ${styles.heartOff}`}></i>
    );
    if (props.favourites && props.recipe && props.favourites.find(r => r.id === props.recipe.id)) {
        favourite = (
            <i className={`fas fa-heart fa-2x ${styles.heartOn}`}></i>
        );
    }

    let chosen = (
        <i className={`fas fa-clipboard-list fa-2x ${styles.listOff}`}></i>
    );
    if (props.chosenList && props.recipe && props.chosenList.find(r => r.id === props.recipe.id)) {
        chosen = (
            <i className={`fas fa-clipboard-list fa-2x ${styles.listOn}`}></i>
        );
    }

    if(!props.recipe){
        return null;
    }

    const animationHandler = () => {
        props.close();
        props.showFireworks(true);
    }

    return (
        <div className={`${styles.modalFooter}`}>
            <div className={`${styles.row} ${styles.w100}`}>
                {
                    props.chosenMode &&
                    <div className={`${styles.col} ${styles.textCenter}`}>
                        <Link
                            type="button"
                            className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg}`}
                            to={`/recipe/${props.recipe.id}/?recipe=chosen`}
                            onClick={ animationHandler }
                        >
                            <i className="fas fa-utensils"></i> Chose!
                        </Link>
                    </div>
                }
                {
                    !props.chosenMode &&
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
                }
                {
                    !props.chosenMode &&
                    <div className={`${styles.col} ${styles.textCenter}`}>
                        <button
                            type="button"
                            className={`${styles.btn} ${styles.btnLink} ${styles.btnSm}`}
                            onClick={e => {
                                props.chosen(props.recipe)
                            }}
                        >
                            {chosen}
                        </button>
                    </div>
                }
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