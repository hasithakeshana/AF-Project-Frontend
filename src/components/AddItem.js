import React , { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import uuid from 'react-uuid';


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
  description: Yup.string().required("Please fill the field"),
  price: Yup.number().required("Please fill the field"),
  quantity: Yup.number().required("Please fill the field")
});



function AddItem({addItem}) {
  
    const id = uuid();
    
    const { handleSubmit, handleChange, values, errors } = useFormik({
      initialValues: {
        title: "",
        category: "",
        description: "",
        price: "",
        quantity: "",
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
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
              <TextField
                variant="outlined"
                fullWidth
                id="category"
                label="Category of Item"
                name="category"
                autoComplete="category"
                onChange={handleChange}
              />{errors.category}
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
                name="quantity"
                label="Quantity"
                id="quantity"
                onChange={handleChange}
              />
            </Grid>
            {errors.quantity}

          
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isDisabled}
            onClick = {  () => addItem(id, values.title,values.description,values.category,values.price, values.quantity)  }
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
   
    addItem : (id,title,description,category,price, quantity) => dispach(reduxActions.addItemAction({id,title,description,category,price, quantity})) ,


  }
}


export default connect(mapStateToProps,mapDispachToProps) (AddItem);