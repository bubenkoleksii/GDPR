import React from 'react';
import {Button} from "react-bootstrap";
import Sorting from "../elements/Sorting";
import Favorite from "../elements/Favorite";
import Filtering from "../elements/Filtering";

const Header = ({favoriteCount, onlyFavorite, sortByRate, sortByPrice, clearFilters, filterByCategory}) => {
    return (
        <div
            style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px'}}>
            <div style={{display: 'flex', alignItems: 'space-between', width: '70%', marginTop: '25px'}}>
                <div>
                  <Filtering filterByCategory={filterByCategory}/>
                </div>

                <div style={{width: '100%', height: '50px', color: "red", fontSize: '20px'}}>
                    <h1>My store</h1>
                </div>

                <Favorite count={favoriteCount} onlyFavorite={onlyFavorite}/>

                <div>
                    <Sorting sortByPrice={sortByPrice} sortByRate={sortByRate}/>
                </div>

                <Button variant="outline-warning" style={{marginBottom: '20px', height: '40px', marginLeft: '20px'}}
                        onClick={() => clearFilters()}>Очистити</Button>
            </div>
        </div>
    );
};

export default Header;
