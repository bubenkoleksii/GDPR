import React from 'react';
import {CardGroup} from "react-bootstrap";
import CardItem from "./CardItem";

const CardRow = ({products, addFavorite, removeFavorite, checkIsFavorite}) => {
    return (
        <CardGroup>
            {products && products.map((item) =>
                <CardItem
                    key={item.id}
                    category={item.category}
                    description={item.description}
                    id={item.id}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    title={item.title}
                    addFavorite={addFavorite}
                    removeFavorite={removeFavorite}
                    checkIsFavorite={checkIsFavorite}
                />
            )}
        </CardGroup>
    );
};

export default CardRow;