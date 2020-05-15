import React,{ useState , useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import * as reduxActions from '../../common/actions';
//import Particles from 'react-particles-js';
import RatingList from './RatingsList';
import RatingProgress from './RatingProgress';
// import ParticlesBg from "particles-bg";

import Moment from 'react-moment';
import Button from '@material-ui/core/Button';
const axios = require('axios').default;

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
const handleSubmit = (evt) => {
  evt.preventDefault();
 
 
  
}




export function RatingsCom({username,addRating,getRatings,ratingList,userRole,progressRating,avgRating,countRatings,product}) {
  
  console.log('idddddddddddddddddddddddddddddddddddfu',product,username);

const [userReview, setUserReview] = useState("");
const [modifiedArray, setModifiedArray] = useState("");

const [idd, setItemIdd] = useState("");

const [data, setData] = useState("");

useEffect(() => {

setItemIdd(product);
getRatings(product);
console.log('iddddddddddddddddddddddddddddddddddd',product);

},[product])


  // checkUserIsRated
  
 
  useEffect(() => {
    const fetchData = async () => {
      const reqBody = {username};
      const id = String(product);
      console.log('reqqqqqqqqqqqqqqqqbodyyy',reqBody);
      const response = await axios.request({
        method: 'POST',
        url: `http://localhost:4000/api/checkUserIsRated/${id}`,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
                  "Access-Control-Allow-Origin": "*"
        },
        data: JSON.stringify(reqBody),
       
         
      
      }).then((res) => {
    
        console.log('output of ratings',res.data);
        setData(res.data.rated);
        console.log('rateedddddddddddddddddddddddd',data);
      
      });
     
 
      // setData(result.data);
    };
 
    fetchData();
   
  }, [product]);



console.log('userRole',progressRating);

const [comment, setComment] = useState("");

const [userAlreadyRated, setuserAlreadyRated] = useState(false);


const [value, setValue] = React.useState(0);

  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  const validate = (id,userName,value,comment) =>
  {
    const date = new Date();
    console.log(date);
    addRating(id,userName,value,comment,date);
  }
 


  
return (
      
     
        <div>
<div style={{marginLeft: '5%', marginRight: "5%", marginTop: "5%", marginBottom:"5%"}}>
<div className="row">
<div className="col" style={{marginLeft: '5%', marginRight: "5%"}}>

<RatingProgress 
    progress={progressRating}
    avgRating={avgRating}
    countRatings={countRatings}
></RatingProgress>

</div>
<div className="col" style={{textAlign:'center'}}>

         

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

<br/>

<textarea class="form-control" onChange={e => setComment(e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>


<br></br>

<button type="button"  onClick = {  () => validate(product,username,value,comment)  } class="btn btn-outline-success">Rate Us!</button>

<div className={classes.root}>
</div>
</form>


      
      </div>
      </div>
      </div>
      <div>
      <div style={{backgroundColor: '#123245', marginLeft:"5%", marginRight:"5%"}}>
      
      <div className="container" style={{width: "50%"}}>
      <div style={{}}>
      <br/>
      <br/>

<RatingList 
list={ratingList}
newList={ratingList}
 userName={username} 
 ></RatingList>
 
 <br/>
 <br/>

</div>
</div>
</div>
    </div>
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
    countRatings : state.item.itemRatingDetails.countRatings,
    username : state.usernames
    
  }
};


const mapDispachToProps = (dispach) => {

  return {
   
    addRating : (itemId,userName,rate,comment,date) => dispach(reduxActions.AddRatingAction({itemId,userName,rate,comment,date})) ,
    getRatings : (ProductId) => dispach(reduxActions.GetRatingAction(ProductId)),


  }
}

export default connect(mapStateToProps,mapDispachToProps) (RatingsCom);