import React from 'react';
import styles from './App.module.scss';
import Header from '../components/Header/Header';
import SearchForm from '../components/SearchForm/SearchForm';
import RecipeList from '../components/RecipeList/RecipeList';

// import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


function App() {
    return (
        <div className={styles.App}>
            <Header/>
            <SearchForm/>
            <RecipeList/>



            {/* SLIDER TEST */}
            {/*<div className="container">*/}
            {/*    <div className={`${styles.p3} ${styles.Category}`}>*/}
            {/*        <h2 className={styles.h4}>Carousel test</h2>*/}
            {/*        <div>*/}
            {/*            <Carousel*/}
            {/*                clickToChange*/}
            {/*                slidesPerPage={2}*/}
            {/*                centered*/}
            {/*            >*/}
            {/*                <img src='https://via.placeholder.com/640x400' className={`${styles.imgFluid} ${styles.product}`}/>*/}
            {/*                <img src='https://via.placeholder.com/640x400' className={`${styles.imgFluid} ${styles.product}`}/>*/}
            {/*                <img src='https://via.placeholder.com/640x400' className={`${styles.imgFluid} ${styles.product}`}/>*/}
            {/*            </Carousel>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

export default App;
