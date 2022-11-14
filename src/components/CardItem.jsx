import React from 'react';
import {Button, Card} from "react-bootstrap";

const CardItem = ({ category, description, id, image, price, rating, title }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {category}
                </Card.Text>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>
                    {price}$
                </Card.Text>
                <Button variant="success">Buy</Button>
            </Card.Body>
        </Card>
    );
};

export default CardItem;