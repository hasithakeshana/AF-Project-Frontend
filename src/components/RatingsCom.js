import React,{ useState , useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import * as reduxActions from '../common/actions';
import Particles from 'react-particles-js';
import RatingList from './RatingsList';
import RatingProgress from './RatingProgress';
import ParticlesBg from "particles-bg";

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



export function RatingsCom({addRating,getRatings,ratingList,userRole,progressRating,avgRating,countRatings}) {

console.log('userRole',progressRating);

//const returnedArray = Array.from(ratingList);

  useEffect(() => {

     
      getRatings(itemId)

  },[])

  const [itemId, setItemId] = useState("5e877028a1dcc10dee1d253e"); // get from the store

  const [userName, setUserName] = useState("keshana@meetrix.io"); // get from the store

  const [comment, setComment] = useState("");

  // const [role, setRole] = useState(userRole);

  // setRole(userRole);

  // console.log('roleeeeeeeee',role);
 

  const [value, setValue] = React.useState(2);

  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  const validate = (itemId,userName,value,comment) =>
  {
    addRating(itemId,userName,value,comment);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
   
    console.log('comment',comment);
    console.log('rate',value);
    
}


  console.log('value = ',value);
    return (
     
        <div>
          <form onSubmit={handleSubmit}>

            {

              userRole === 'guest' ? <h1>cant add ratings only view </h1> : <h2>can add rate and comments</h2>


            }
        <input type="text" 
         onChange={e => setComment(e.target.value)}
        /> 
        <br></br>
        <button
         onClick = {  () => validate(itemId,userName,value,comment)  }
        
        >button</button>

        <div className={classes.root}>
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
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}

     
    </div>
    </form>
    <RatingProgress 
    progress={progressRating}
    avgRating={avgRating}
    countRatings={countRatings}
    
    ></RatingProgress>

<RatingList list={ratingList}>


</RatingList>
  



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
   
    addRating : (itemId,userName,rate,comment) => dispach(reduxActions.AddRatingAction({itemId,userName,rate,comment})) ,
    getRatings : (ProductId) => dispach(reduxActions.GetRatingAction(ProductId)),


  }
}

export default connect(mapStateToProps,mapDispachToProps) (RatingsCom);