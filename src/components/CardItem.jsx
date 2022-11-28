import React, {useRef, useState} from 'react';
import {Button, Card} from "react-bootstrap";
import StarRatings from 'react-star-ratings';
import {HiHeart, HiOutlineHeart} from "react-icons/hi";
import {ImCart} from "react-icons/im";
import {toast} from "react-toastify";

const CardItem = ({category, description, id, image, price, rating, title, removeFavorite, addFavorite, checkIsFavorite}) => {
    const [isLiked, setIsLiked] = useState( checkIsFavorite(id) );
    const cartRef = useRef();

    const likeHandler = () => {
        isLiked ? removeFavorite(id) : addFavorite({category, description, id, image, price, rating, title});
    
        !isLiked ?
          toast.success(`${title} added to favorites`)
          : toast.error(`${title} deleted from favorites`);
        
        setIsLiked(!isLiked);
    }

    const replaceDescription = (description) => {
        return description.substr(0, 50) + '...'
    }

    const handleCartFocus = () => {
        cartRef.current.classList.toggle('button-focus');
    }


    return (
        <Card onClick={handleCartFocus} style={{width: '18rem', cursor: 'pointer'}}>
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
                <Button variant="success" style={{margin: '10px'}} ref={cartRef}><ImCart/></Button>
                <Button variant="outline-danger" onClick={likeHandler} style={{}}>
                    {isLiked ? <HiHeart/> : <HiOutlineHeart/>}
                </Button>
            </Card.Body>
        </Card>
    );
};

export default CardItem;