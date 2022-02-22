import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import "./styles.css";
const Card2 = (props) => {
  const { img, title,edition, des} = props.menuItem;
  return <>
  <article className='card1-contain'>
      <div className='mini-card'>
        <img src={img} alt="hello" className='m-card-img'/>
        <div className='detail'>
        <div className='detail1'>
        <h4 className='mini-h'>{title}</h4> 
        <FavoriteIcon  style={{color: "red"}}/>
        </div>
        <h5>{edition}</h5>
        <p className='mini-des'>{des}</p>
        </div>
          
      </div>
      </article>
  </>;
};

export default Card2;