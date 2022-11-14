import React from 'react';
import {CardGroup} from "react-bootstrap";
import CardItem from "./CardItem";

const CardRow = ({products}) => {
    return (
        <CardGroup>
            {products && products.map((item) =>
                <CardItem
                    category={item.category}
                    description={item.description}
                    id={item.id}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    title={item.title}
                />
            )}
        </CardGroup>
    );
};

export default CardRow;