import React from 'react';
import {Button} from "react-bootstrap";
import {AiFillHeart} from "react-icons/ai";

const Favorite = ({count, onlyFavorite}) => {
  return (
    <div style={{marginTop: '-25px'}} onClick={onlyFavorite}>
          <span style={{fontSize: '17px', height: '25px', color: 'red', width: '25px', fontWeight: 'bold', marginLeft: '5px'}}>
            {count}
          </span>
      <Button variant="danger" style={{marginRight: '20px', height: '40px'}} >
        <AiFillHeart  size={16}/>
      </Button>
    </div>
  );
};

export default Favorite;
