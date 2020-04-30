import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './App.module.scss';
import Header from '../components/Header/Header';
import SearchForm from '../components/SearchForm/SearchForm';
import RecipeList from '../components/RecipeList/RecipeList';
import ModalRecipe from "../components/ModalRecipe/ModalRecipe";
import constants from '../constants';

const App = () => {

    // recipe page
    const [recipeState, setRecipeState] = useState({
        //INGREDIENTS BY DEFAULT
        recipe: {},
        isLoading: false
    });
    // Ingredients filters
    const [ingredientsState, setIngredientsState] = useState({
        //INGREDIENTS BY DEFAULT
        ingredients: [
            {'id': 1, 'name': 'eggs', 'selected': false, 'erasable': false},
            {'id': 2, 'name': 'meat', 'selected': false, 'erasable': false},
            {'id': 3, 'name': 'chicken', 'selected': false, 'erasable': false},
            {'id': 4, 'name': 'fish', 'selected': false, 'erasable': false},
            {'id': 5, 'name': 'pasta', 'selected': false, 'erasable': false},
            {'id': 6, 'name': 'potatoes', 'selected': false, 'erasable': false},
        ]
    });
    const [resultsState, setResultsState] = useState({
        results: [],
        paginator: {
            offset: 0,
            number: constants.pagination.number,
            totalResults: null,
            page: null,
            pages: null,
            displaying: null
        },
        isLoading: false
    });

    const [ingredientFormState, setIngredientFormStateState] = useState({
        formIngredient: ''
    });

    const [intolerancesState, setIntolerancesState] = useState({
        intolerances: [
            {id: 'intolerance-1', name: 'Dairy', selected: false},
            {id: 'intolerance-2', name: 'Egg', selected: false},
            {id: 'intolerance-3', name: 'Gluten', selected: false},
            {id: 'intolerance-4', name: 'Grain', selected: false},
            {id: 'intolerance-5', name: 'Peanut', selected: false},
            {id: 'intolerance-6', name: 'Seafood', selected: false},
            {id: 'intolerance-7', name: 'Sesame', selected: false},
            {id: 'intolerance-8', name: 'Shellfish', selected: false},
            {id: 'intolerance-9', name: 'Soy', selected: false},
            {id: 'intolerance-10', name: 'Sulfite', selected: false},
            {id: 'intolerance-11', name: 'Tree Nut', selected: false},
            {id: 'intolerance-12', name: 'Wheat', selected: false},
        ]
    });

    const [favouritesState, setFavouritesState] = useState({
        recipes: [],
    });

    const [modalState, setModalState] = useState({
        show: false,
        content: ('empty')
    });

    const [editIngredientsState, setEditIngredientsState] = useState({
        edit: false
    });

    const toogleFavouriteHandler = (recipe) => {
        const recipes = favouritesState.recipes;
        const found = recipes.find(r => r.id === recipe.id);
        let newRecipes = null;
        if(!found){
            recipes.push(recipe);
            newRecipes = recipes;
        }else{
            newRecipes = recipes.filter(function(r) {
                return r.id !== recipe.id;
            });
        }

        setFavouritesState({
            recipes: newRecipes
        })
    }

    useEffect(() => {
        addIngredientsToStates();
    }, []);


    const ingredientsHandler = (newIngredient) => {
        const ingredients = [...ingredientsState.ingredients];
        const newIngredientObj = {
            'id': getNewId(),
            'name': newIngredient,
            'selected': true,
            'erasable': true
        };
        ingredients.push(newIngredientObj);
        setIngredientsState({
            ingredients: ingredients,
        });
        addIngredientLocalStorage(newIngredientObj);
        clearResults();
    }

    const addIngredientsToStates = () => {
        const ingredientsStorage = getIngredientsLocalStorage();
        const ingredients = [...ingredientsState.ingredients];
        if (ingredientsStorage) {
            ingredientsStorage.forEach((elem) => {
                elem.selected = false;
                ingredients.push(elem);
            });
            setIngredientsState({
                ingredients: ingredients,
            });
        }
    }

    const deleteIngredientsStates = (ingredientId) => {
        const ingredients = [...ingredientsState.ingredients];
        const newIngredients = ingredients.filter(
            ingredient => ingredient.id !== ingredientId
        );
        setIngredientsState({
            ingredients: newIngredients,
        });
    }

    const getIngredientsLocalStorage = () => {
        const ingredients = JSON.parse(localStorage.getItem('myIngredients'));
        return ingredients;
    }

    const addIngredientLocalStorage = (ingredient) => {
        let ingredients = getIngredientsLocalStorage();
        const ingredientList = [];
        if (ingredients) {
            ingredients.forEach((elem) => {
                ingredientList.push(elem);
            });
        }
        ingredientList.push(ingredient);
        localStorage.setItem('myIngredients', JSON.stringify(ingredientList));
    }

    const removeIngredientLocalStorage = (ingredientId) => {
        let ingredients = getIngredientsLocalStorage();
        const test = ingredients.filter(
            ingredient => ingredient.id !== ingredientId
        );
        deleteIngredientsStates(ingredientId);
        if (test.length === 0) {
            setEditIngredientsState({
                edit: false
            })
        }
        localStorage.setItem('myIngredients', JSON.stringify(test));
    }

    const getRecipesByIngredients = (paginate = false) => {
        let url = constants.url + '/recipes/search';
        const selectedIngredients = ingredientsState.ingredients.filter(ingredient => ingredient.selected);
        let query = selectedIngredients.map(ingredient => {
            return ingredient.name;
        })
        const number = resultsState.paginator.number;
        const offset = resultsState.paginator.offset;
        const apiKey = constants.apiKey;
        const intolerances = intolerancesState.intolerances
            .filter(intolerance => intolerance.selected)
            .map(function (intolerance) {
                return intolerance.name;
            });
        url = `${url}?query=${query.join("+")}&intolerances=${intolerances.join("+")}`;
        url = `${url}&number=${number}&apiKey=${apiKey}&offset=${offset}`
        const currentPaginator = resultsState.paginator;

        setResultsState({
            results: [...resultsState.results],
            paginator: currentPaginator,
            isLoading: true
        });

        axios.get(url)
            .then(res => {
                const data = res.data;
                const newPage = data.results;
                const currentPage = [...resultsState.results];
                const offset = data.offset + 1;
                let page = null;
                const pages = Math.ceil(data.totalResults / data.number);
                if (paginate) {
                    page = [...currentPage, ...newPage]
                } else {
                    page = [...newPage];
                }
                setResultsState({
                    results: page,
                    paginator: {
                        offset: offset,
                        number: data.number,
                        totalResults: data.totalResults,
                        page: data.offset + 1,
                        pages: pages,
                        displaying: offset * data.number
                    },
                    isLoading: false
                });
            })
    }

    const getRecipeByd = (id) => {
        let url = constants.url;
        const apiKey = constants.apiKey;
        url = `${url}/recipes/${id}/information?apiKey=${apiKey}`
        setRecipeState({
            isLoading: true,
        });
        axios.get(url)
            .then(res => {
                const data = res.data;
                console.log(data)
                setRecipeState({
                    recipe: data,
                    isLoading: false
                });
            });
    }

    //Intolerance's
    const toogleIntoleranceFilterHandler = (id) => {
        const intoleranceIndex = intolerancesState.intolerances.findIndex(intolerance => {
            return intolerance.id === id
        });
        const intolerance = {
            ...intolerancesState.intolerances[intoleranceIndex]
        };
        const intolerances = [...intolerancesState.intolerances];

        intolerance.selected = !intolerance.selected;
        intolerances[intoleranceIndex] = intolerance;

        setIntolerancesState({
            intolerances: intolerances,
        });
        clearResults();
    }

    const intolerancesHandler = (id) => {
        toogleIntoleranceFilterHandler(id)
        //clearResults();
    }


    //form
    const toogleIngredientFilterHandler = (id) => {
        const ingredientIndex = ingredientsState.ingredients.findIndex(ingredient => {
            return ingredient.id === id
        });
        const ingredient = {
            ...ingredientsState.ingredients[ingredientIndex]
        };
        const ingredients = [...ingredientsState.ingredients];

        ingredient.selected = !ingredient.selected;
        ingredients[ingredientIndex] = ingredient;

        setIngredientsState({
            ingredients: ingredients,
        });
        clearResults();
    }

    const ingredientFormChangeHandler = (event) => {
        setIngredientFormStateState({
            formIngredient: event.target.value
        });
    }

    const ingredientFormAddHandler = () => {
        ingredientsHandler(ingredientFormState.formIngredient);
        ingredientFormClear();
    }

    const ingredientFormClear = () => {
        setIngredientFormStateState({
            formIngredient: ''
        });
    }

    const getRecipesByIngredientsHandler = () => {
        getRecipesByIngredients();
    }

    const clearResults = () => {
        setResultsState({
            results: [],
            paginator: {
                offset: 0,
                number: constants.pagination.number,
                totalResults: null,
                page: null,
                pages: null,
                displaying: null
            }
        });
    }

    //Edit Ingredients
    const setEditIngredientsStateHandler = () => {
        setEditIngredientsState({
            edit: !editIngredientsState.edit
        })
    }

    const deleteIngredientsStateHandler = (id) => {
        removeIngredientLocalStorage(id);
    }

    // Modal
    const modalHandler = (content = null, option = true) => {
        setModalState({
            show: option,
            content: (content) ? content : modalState.content
        });
    }

    const getNewId = () => {
        let date = new Date();
        return date.getTime();
    }

    return (
        <div className={styles.App}>
            <Header/>
            <SearchForm
                ingredients={ingredientsState.ingredients}
                ingredientForm={ingredientFormState.formIngredient}
                selectedFilters={ingredientsHandler}
                click={getRecipesByIngredientsHandler}
                toogle={toogleIngredientFilterHandler}
                changed={ingredientFormChangeHandler.bind(this)}
                add={ingredientFormAddHandler}
                clear={ingredientFormClear}
                remove={removeIngredientLocalStorage}
                editStatus={editIngredientsState.edit}
                edit={setEditIngredientsStateHandler}
                deleteIngredient={deleteIngredientsStateHandler}
                results={resultsState}
                intolerances={intolerancesState.intolerances}
                intolerancesToogle={intolerancesHandler}
            />
            <RecipeList
                show={modalHandler}
                recipes={resultsState}
                getMore={getRecipesByIngredients}
                getRecipe={getRecipeByd}
            />
            <ModalRecipe
                show={modalState.show}
                close={modalHandler}
                title={'A recipe'}
                recipe={recipeState.recipe}
                isLoading={recipeState.isLoading}
                favourite={toogleFavouriteHandler}
                favourites={favouritesState.recipes}
            />

        </div>
    );
}

export default App;
