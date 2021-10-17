import React from 'react';
import {Rate,StarOuter,StarInner} from './styles'

export default function Rating(props) {
  const { rating, numReviews } = props;

  const totalStars = 5; 
  const starPercentage = (rating/totalStars)*100;
  const starPercentageRouned = `${Math.round(starPercentage/10)*10}%`

  
  
  return (
    <Rate>
      <StarOuter>
        <StarInner style={{width: starPercentageRouned}}/>
      </StarOuter>
      
    </Rate>
  )    
}