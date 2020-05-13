import React, {useState, useEffect} from "react";
import styles from "./RecipePage.module.scss";
import constants from "../../constants";
import axios from "axios";
import Loading from "../Loading/Loading";
import Recipe from "../Recipe/Recipe";

const RecipePage = (props) => {
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const recipeId = props.match.params.recipeId;
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
        if (props.location.search) {
            const url = "/recipes-app#/recipe/"+recipeId;
            window.history.replaceState({}, document.title, url);
        }
        fetchRecipe();

    }, [props.match.params.recipeId]);

    return (
        <div className={`${styles.container} ${styles.my2}`}>
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