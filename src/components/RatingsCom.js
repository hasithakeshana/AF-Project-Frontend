import React,{ useState , useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import * as reduxActions from '../common/actions';

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



export function RatingsCom({addRating}) {

  const [itemId, setItemId] = useState("5e8b1fe1cb02cd4a45957688");

  const [userName, setUserName] = useState("keshana@meetrix.io");

  const [comment, setComment] = useState("");

  const [value, setValue] = React.useState(2);

  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();


  const handleSubmit = (evt) => {
    evt.preventDefault();
   
    console.log('comment',comment);
    console.log('rate',value);
    
}

  console.log('value = ',value);
    return (
        <div>
          <form onSubmit={handleSubmit}>
        <input type="text" 
         onChange={e => setComment(e.target.value)}
        /> 
        <br></br>
        <button
         onClick = {  () => addRating(itemId,userName,value,comment)  }
        
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
    </div>
    );
}

RatingsCom.propTypes = {
  
  addRating: PropTypes.func,
};



const mapStateToProps = (state)=> {

  console.log('state',state);
  return{
   
    emails : state.email
  }
};


const mapDispachToProps = (dispach) => {

  return {
   
    addRating : (itemId,userName,rate,comment) => dispach(reduxActions.AddRatingAction({itemId,userName,rate,comment})) ,


  }
}

export default connect(mapStateToProps,mapDispachToProps) (RatingsCom);