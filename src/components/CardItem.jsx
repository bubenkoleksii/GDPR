import React, {useState} from 'react';
import {Button, Card} from "react-bootstrap";
import StarRatings from 'react-star-ratings';
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";

const CardItem = ({category, description, id, image, price, rating, title, removeFavorite, addFavorite, checkIsFavorite}) => {
    const [isLiked, setIsLiked] = useState( checkIsFavorite(id) );
    
    const likeHandler = () => {
        isLiked ? removeFavorite(id) : addFavorite({category, description, id, image, price, rating, title});
        
        setIsLiked(!isLiked);
    }

    const replaceDescription = (description) => {
        return description.substr(0, 50) + '...'
    }

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
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {category}
                </Card.Text>
                <Card.Text>
                    <p style={{color: '#c9c5c9'}}>
                        {replaceDescription(description)}
                    </p>
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
                <Button variant="success" style={{margin: '10px'}}>Buy</Button>
                <Button variant="outline-danger" onClick={likeHandler}>
                    {isLiked ? <AiFillHeart/> : <AiOutlineHeart/>}
                </Button>
            </Card.Body>
        </Card>
    );
};

export default CardItem;