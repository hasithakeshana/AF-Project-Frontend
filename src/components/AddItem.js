import React, { useState, useEffect }  from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import uuid from 'react-uuid';
import ImageUploader from 'react-images-upload';
import axios from 'axios';


import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import * as reduxActions from '../common/actions';

import { useFormik } from 'formik';
import * as Yup from "yup";



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',   
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  section: {
    margin: theme.spacing(4, 0)
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    margin: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}));

const validationSchema = Yup.object({
  title: Yup.string().required("Please fill the field"),
  category: Yup.string().required("Please fill the field"),
  subCategory: Yup.string().required("Please fill the field"),
  description: Yup.string().required("Please fill the field"),
  price: Yup.number("Please enter a valid price").min(1).required("Please fill the field"),
  discount: Yup.number("Please enter a valid discount").default(0).max(99),
  quantity: Yup.number("Please enter a valid quantity").moreThan(0).required("Please fill the field"),
});


  

  




function AddItem({addItem}) {
  
    const id = uuid();

    const [productImage, setData] = useState({ images: [] });
 
    const [data, setCat] = useState( []  );

    const [subs, setSub] = useState( []  );

    const [subCategory, setSubCat] = useState( []  );

    useEffect(async () => {
      const result = await axios.get('http://localhost:4000/api/getCategoriesToNav');
      const length = Object.keys(result.data[0]).length - 2 
      const arr = Object.keys(result.data[0]).slice(0, length)
      setCat(arr)
      setSub(result.data)
      }, []);    

    function onChangeSubCat(cat)  {

      const data1 = cat.target.value;
      var sub = subs[0]
      var subs1 = sub[data1]
      setSubCat(subs1)

    }
  

    //onChange function for images  
    function onChangeHandler(data)  {
      setData({
        images : productImage.images.concat(data),
      })
     console.log(productImage)
    }


    
    
    const { handleSubmit, handleChange, values, errors } = useFormik({
      initialValues: {
        title: "",
        category: "",
        description: "",
        price: 0,
        discount: 0,
        quantity: 0,
      },
      validationSchema,
      onSubmit(values) {
          console.log(values);   
      }
    });
    
    const isDisabled = Object.keys(errors).some(x => errors[x]);


  const classes = useStyles();

  

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Add Item
          </Typography>

        <form className={classes.form} id="itemForm" noValidate onSubmit={handleSubmit}>
            
            <Grid className={ classes.section} item xs={12}>
              <TextField
                error
                autoComplete="title"
                name="title"
                variant="outlined"
                fullWidth
                id="title"
                label="Name"
                autoFocus
                onChange={handleChange}
              />{errors.title}
            </Grid>
            
            <Grid className={ classes.section} item xs={12}>
              <InputLabel id="category">Category of Item</InputLabel> 
              <Select 
                id="category"
                labelId="category"
                name="category"
                fullWidth
                autoFocus
                variant="outlined"
                onChange={handleChange}
                onClick={onChangeSubCat}
                >
                {data.map(item => (
                  <MenuItem
                  value={item}>
                  {item}
                  </MenuItem>
                ))} 
              </Select>
              {errors.category}
            </Grid>

            <Grid className={ classes.section} item xs={12}>
            <InputLabel id="subCategory">SubCategory of Item</InputLabel> 
              <Select 
                id="subCategory"
                labelId="subCategory"
                name="subCategory"
                fullWidth
                autoFocus
                variant="outlined"
                onChange={handleChange}>            
                {subCategory.map(item => (
                  <MenuItem 
                  value={item}>
                  {item}
                  </MenuItem>
                ))}
              </Select>
              {errors.subcategory}
            </Grid>
              
            
            <Grid className={ classes.section} item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="description"
                label="Brief Description of Item"
                name="description"
                autoComplete="description"
                onChange={handleChange}
              />
            </Grid>
            {errors.description}

            <Grid className={ classes.section} item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="price"
                label="Price"
                id="price"
                onChange={handleChange}
              />
            </Grid>
            {errors.price}

            <Grid className={ classes.section} item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="discount"
                label="Discount"
                id="discount"
                onChange={handleChange}
              />
            </Grid>
            {errors.discount}

            <Grid className={ classes.section} item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="quantity"
                label="Quantity"
                id="quantity"
                onChange={handleChange}
              />
            </Grid>
            {errors.quantity}

            <Grid className={ classes.section} item xs={12}>
            <ImageUploader
              name="productImage"
              withIcon={true} 
              withPreview={true}
              label="Maximum 3 images of .jpg .png .jpeg formats are accepted"
              imgExtension={[".jpg", ".png", ".jpeg"]}
              maxFileSize={1048576}
              onChange = {onChangeHandler}
            />
            </Grid>  
          
          <Button
            type="reset"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isDisabled}
            onClick = {  () => addItem(id, values.title,values.description,values.category,values.subCategory,values.price, values.discount, values.quantity, productImage)  }
          >
            Add Item
          </Button>

        </form>
      </div>
    </Grid>
  </Grid>
  );
}

AddItem.propTypes = {

  addItem: PropTypes.func,
};

const mapStateToProps = (state)=> {
  
  console.log('state',state);
  return{
   
    titles : state.title
  }
};

const mapDispachToProps = (dispach) => {
  
  return {
   
    addItem : (id,title,description,category,subCategory, price,discount, quantity, productImage) => dispach(reduxActions.addItemAction({id,title,description,category, subCategory, price, discount, quantity, productImage})) ,


  }
}


export default connect(mapStateToProps,mapDispachToProps) (AddItem);