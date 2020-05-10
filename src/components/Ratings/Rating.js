import React,{ useState , useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import PropTypes from 'prop-types';

import {connect} from 'react-redux';

// import * as reduxActions from '../common/actions';
//import Particles from 'react-particles-js';
//import RatingList from './RatingsList';
//import RatingProgress from './RatingProgress';
//import ParticlesBg from "particles-bg";

//import Moment from 'react-moment';
import Button from '@material-ui/core/Button';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});



//npm install @material-ui/lab





export function RatingsCom() {

const [itemId, setItemId] = useState("5e933a529b9e6363f89edebb"); // get from the store
const [userName, setUserName] = useState("mal"); // get from the store
const [userReview, setUserReview] = useState("");
const [modifiedArray, setModifiedArray] = useState("");


const [comment, setComment] = useState("");

const [userAlreadyRated, setuserAlreadyRated] = useState(false);




const [value, setValue] = React.useState(0);

  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

 
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(value);
   
    
  }
 
  
  
return (
     
     
        <div>




          <form onSubmit={handleSubmit}>

            <Rating

             name="hover-feedback"
            value={value}
            precision={0.5}
            onChange={(event, newValue) => {
              setValue(newValue);
                        }}
            onChangeActive={(event, newHover) => {
           setHover(newHover);
                }}
                size="large"

              />

              

{value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}

<textarea class="form-control" onChange={e => setComment(e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>


        <br></br>
        
        <button type="button" class="btn btn-outline-success">Rate Us!</button>

        <div className={classes.root}>
     
    


     
     
    </div>
    </form>

   
  


  



    </div>
    

    );
}

RatingsCom.propTypes = {
  
  addRating: PropTypes.func,
  getRatings: PropTypes.func,
  ratingList:PropTypes.object,
//  userRole:PropTypes.object,
  progressRating: PropTypes.object,
  avgRating:PropTypes.object,
  countRatings:PropTypes.object
  
};



const mapStateToProps = (state)=> {

  //console.log('ratings',ratingList);
  return{
   
    ratingList : state.item.itemRatingDetails.ratingList,
    userRole : state.auth.currentUser.role,
    progressRating : state.item.itemRatingDetails.ratingCount,
    avgRating : state.item.itemRatingDetails.avgRating, 
    countRatings : state.item.itemRatingDetails.countRatings
    
  }
};


const mapDispachToProps = (dispach) => {

  return {
   
    


  }
}

export default connect(mapStateToProps,mapDispachToProps) (RatingsCom);