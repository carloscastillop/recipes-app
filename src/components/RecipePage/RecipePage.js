import React, {useState, useEffect} from "react";
import styles from "./RecipePage.module.scss";
import {Redirect} from 'react-router-dom'
import constants from "../../constants";
import axios from "axios";
import Loading from "../Loading/Loading";
import Recipe from "../Recipe/Recipe";
import ChosenAnimation from "../ChosenAnimation/ChosenAnimation";

const RecipePage = (props) => {
    const recipeId = props.match.params.recipeId;
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    let testAnimation = null;
    let chosenAnimation = props.location.search;
    useEffect(() => {
        const apiKey = constants.api.apiKey;
        const fetchRecipe = async () => {
            setLoading(true);
            setError(false);
            let url = constants.api.url;
            url = `${url}/recipes/${recipeId}/information?apiKey=${apiKey}`;
            try {
                const result = await axios.get(`${url}`);
                setRecipe(result.data);
            } catch (error) {
                setError(true);
            }
            setLoading(false);
        };
        fetchRecipe();
    }, [recipeId]);

    if (isNaN(recipeId)) {
        return <Redirect to='/'/>
    }

    if (chosenAnimation === "?recipe=chosen") {
        window.history.replaceState({}, document.title, "/recipe/"+recipeId);
        testAnimation = (
            <ChosenAnimation seconds={10}/>
        );
    }


    return (
        <div className={`${styles.container} ${styles.my2}`}>
            {testAnimation}
            {loading && (
                <Loading/>
            )}
            {error && (
                <div className={`${styles.alert} ${styles.alertDanger}`}>
                    <h4><i className="far fa-sad-cry fa-2x"></i> We sorry!</h4>
                    <p>Some error occurred, while fetching recipe.<br/>
                        Please try again.</p>
                </div>
            )}
            {recipe && <Recipe recipe={recipe}/>}
        </div>

    );
}
export default RecipePage;