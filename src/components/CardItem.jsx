import React from 'react';
import {Button, Card} from "react-bootstrap";
import StarRatings from 'react-star-ratings';

const CardItem = ({category, description, id, image, price, rating, title}) => {
    return (
        <Card style={{width: '18rem'}}>
            <div style={{
                height: '150px',
                width: '18rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <img src={image} style={{height: '130px', width: '110px'}} alt={'productImage'}/>
            </div>
            {/*<Card.Img variant="top" src={image}/>*/}
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {category}
                </Card.Text>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>
                    <StarRatings
                        rating={rating.rate}
                        starRatedColor="#f5c542"
                        numberOfStars={5}
                        name='rating'
                        starDimension="24px"
                        starSpacing="2px"
                    /> {rating.count} відгуків
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