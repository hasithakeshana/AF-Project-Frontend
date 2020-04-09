import React from 'react'
import '../../src/ratings.css';
import { Progress } from 'reactstrap';


function RatingProgress(props) {

  const {progress,avgRating,countRatings} = props;

  console.log('avgRating cdddddddddd',countRatings.noOfRatings,avgRating.avg);

  //const avgRate =  avgRating.toFixed(2);

  //const count = countRatings;
  
 // console.log('progress 5',progress.one);

  

    return (
        <div>
            <span class="heading">User Rating</span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>

    <p>{avgRating.avg}average based on {countRatings.noOfRatings} reviews</p>

<div class="row">
  <div class="side">
    <div>5 star</div>
  </div>
  <div class="middle">
    <div class="bar-container">
     
    <Progress multi>
     <Progress bar animated color="warning"  value="50" max={100}>5</Progress>
      
    </Progress>
   

  
    </div>
  </div>
  <div class="side right">
    <div>{progress.five}</div>
  </div>
  <div class="side">
    <div>4 star</div>
  </div>
  <div class="middle">
    <div class="bar-container">
      
    <Progress multi>
      <Progress bar animated color="danger" value={19} max={55}>5</Progress>
      
    </Progress>

    </div>
  </div>
  <div class="side right">
    <div>{progress.four}</div>
  </div>
  <div class="side">
    <div>3 star</div>
  </div>
  <div class="middle">
    <div class="bar-container">
    
    <Progress multi>
    <Progress bar animated color="info" value="20" max={100}>10</Progress>
      
    </Progress>


    </div>
  </div>
  <div class="side right">
    <div>{progress.three}</div>
  </div>
  <div class="side">
    <div>2 star</div>
  </div>
  <div class="middle">
    <div class="bar-container">
    
<Progress multi>
<Progress bar animated color="success" value="50" max={100}>10</Progress>
</Progress>


    </div>
  </div>
  <div class="side right">
    <div>{progress.two}</div>
  </div>
  <div class="side">
    <div>1 star</div>
  </div>
  <div class="middle">
    <div class="bar-container">
     

    <Progress multi>
       <Progress bar animated  value="5" max={55}>5</Progress>
      
    </Progress>
    </div>
  </div>
  <div class="side right">
    <div>{progress.one}</div>
  </div>
</div>

            
        </div>
    )
}

export default RatingProgress;
