import React from 'react';
import styles from './App.module.scss';
import Header from "../components/Header/Header";

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


function App() {
    return (
        <div className={styles.App}>
            <Header/>
            <div className="topHeader textCenter mb3">
                <a href="#">
                    <img src='https://via.placeholder.com/800x400?text=A BANNER' className={styles.imgFluid}/>
                </a>
            </div>

            <div className="container">
                <div className="card">
                    <div className="cardBody">
                        <h3>Recipe finder</h3>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className={`${styles.p3} ${styles.Category}`}>
                    <h2 className={styles.h4}>Category name 1</h2>
                    <div>
                        <Carousel
                            clickToChange
                            slidesPerPage={2}
                            centered
                        >
                            <img src='https://via.placeholder.com/640x400' className={`${styles.imgFluid} ${styles.product}`}/>
                            <img src='https://via.placeholder.com/640x400' className={`${styles.imgFluid} ${styles.product}`}/>
                            <img src='https://via.placeholder.com/640x400' className={`${styles.imgFluid} ${styles.product}`}/>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
