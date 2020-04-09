import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticlesBg from "particles-bg";

function RatingsList({list}) {

   const lists = Array.from(list);
    console.log('props',list);
 
    return (
        <div>
             {

lists.map((rating) =>



<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">{rating.userName} </h4>
             <p>{rating.rate}</p>
  <hr></hr>
             <p class="mb-0">{ rating.comment} </p>
</div>

 )
}

</div>

    );
}

export default RatingsList;

    