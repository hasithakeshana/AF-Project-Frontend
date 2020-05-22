import * as ACTIONS from '../common/constants';
import {forEach} from "react-bootstrap/cjs/ElementChildren";


export const initialState = {

    usernames: "user20",
    userIs: "guest",
    rateUserDeatils: "",
    user: {
        cart: [],
        cartTotal: 0
    },
    products: [],
    item: {
        currentSelectedItem: {},
        itemRatingDetails: {
            countRatings: {},
            avgRating: 0,
            ratingCount: {},
            ratingList: {},

        }

    },
    auth: {
        currentUser: {

            role: 'guest'
        },
        isAuthenticated: false,
        isTokenChecked: false,
        isRegistered: false,
        wishList: {},
        wishListCount: 0
    },
    items: [],

    menCategories: [],
    womenCategories: [],
    kidsCategories: [],
    sportsCategories: [],
    discountCategories: [],
    selectedMainCategory: "All",
    selectedSubCategory: "All",
    selectedItemsArray: [],
    itemInCartCount: 0,
    cartTotal: 0,
    searchedProduct :{},
    discountStatus : 0,
    cartCheck: false,
    cart: [{
        cartIn: true,
        description: "Beautiful frock for any occasion.Blow your friends' minds",
        discount: 7,
        images: [{
            0: {
                productImage: "2020-05-14T06-45-28.593Z-girl.jpg",
                _id: "5ec020267df10525e4a63c75"
            }
        }],
        itemID: 3010,
        mainCategory: "Men",
        name: "Luxury Shirt",
        price: 4500,
        quantityInCart: 0,
        cartTotal:0,
  }
    ]

};

const reducer = (state = initialState, {type, payload}) => {

    const newState = {...state};


    if (type === 'SIGNUP') {
        newState.auth.currentUser = payload.user;
    }
    if (type === 'UPDATE_MAIN_CATEGORY') {
        newState.selectedMainCategory = payload;
    }
    if (type === 'UPDATE_SUB_CATEGORY') {
        newState.selectedSubCategory = payload;
    }
    if (type === 'UPDATE_SELECTED_ITEMS_ARRAY') {
        newState.selectedItemsArray = payload;
    }
    if (type === 'UPDATE_CART') {
        newState.cart.push(payload)
    }
    if (type === 'UPDATE_CART_COUNT') {
        console.log("UPDATE_CART_COUNT")
        newState.itemInCartCount++;
    }
    if (type === 'UP_COUNT_IN_CART') {


        let index = state.cart.findIndex(x => x.itemID === payload);
       /* newState.cart[index].quantityInCart = newState.cart[index].quantityInCart + 1;
        newState.cartTotal = newState.cartTotal + newState.cart[index].price;*/

    }
    if (type === 'DOWN_COUNT_IN_CART') {

        let index = state.cart.findIndex(x => x.itemID === payload);
      /*  newState.cart[index].quantityInCart = newState.cart[index].quantityInCart - 1;
        newState.cartTotal = newState.cartTotal - newState.cart[index].price;*/

    }
    if (type === 'ADD_TO_TOTAL') {

        newState.cartTotal = newState.cartTotal + payload;


    }
    if (type === 'CART_CHECK_TRUE') {
        newState.cartCheck = !newState.cartCheck;
    }
    if (type === 'CART_CHECK_FALSE') {
        newState.cartCheck = false;
    }
    if (type === 'CHECK_CART') {
        let index = newState.items.findIndex(x => x.itemID === payload.itemID);
        newState.items[index].cartIn = true;

    }
    if (type === ACTIONS.GET_RATE_COMMENTS_SUCCESS) {

        // console.log(payload.data);

        newState.item.itemRatingDetails.countRatings = payload.data.countRatings;

        newState.item.itemRatingDetails.avgRating = payload.data.avg;

        newState.item.itemRatingDetails.ratingCount = payload.data.noOfRatings;

        newState.item.itemRatingDetails.ratingList = payload.data.ratings

    }

    if (type === ACTIONS.GET_VIEW_ITEM_SUCCESS) {

        newState.item.currentSelectedItem = payload.data;

    }

    if (type === ACTIONS.GET_USER_WISHLIST_SUCCESS) {

        newState.auth.wishList = payload.data;
        const count = payload.data.length;
        newState.auth.wishListCount = count;
    }
    // GET_ALL_PRODUCTS_SUCCESS
    if (type === ACTIONS.GET_ALL_PRODUCTS_SUCCESS) {

        newState.items = payload;
        // const count = payload.data.length;
        // console.log('count',count); // wishListCount
        // newState.auth.wishListCount = count;
        // action = login success -> currentUser = payload.user/ isauthenticated = true
        // action logout -> isauthenticated / false
        // register success -> isregistered = success
        // toekn checked -> tokenchecked = true

    }
    if (type === 'GET_CATEGORIES_SUCCESS') {

        newState.menCategories = payload.data[0].menCategories;
        newState.womenCategories = payload.data[0].womenCategories;
        newState.kidsCategories = payload.data[0].kidsCategories;
        newState.sportsCategories = payload.data[0].sportsCategories;
        newState.discountCategories = payload.data[0].discountCategories;
    }

    if (type === "CHECK_USER_RATED_SUCCESS") {

        newState.rateUserDeatils = payload;

    }if(type==="ZERO_TOTAL"){

        newState.cartTotal=0;
    }if(type==="REMOVE_FROM_CART"){

        let arr = newState.cart;
        newState.cart = [];
        arr.map(item=>{
            if(item._id !== payload._id){
                newState.cart.push(item)
            }
        })
        newState.cartTotal=0;
        newState.cart.map(item=>{
            newState.cartTotal = newState.cartTotal+(item.price * ((100 - item.discount) / 100));
        });
        newState.itemInCartCount--;

    }if(type === 'SEARCH_PRODUCT_SUCCESS'){

        newState.searchedProduct = payload;
    }if(type==='UPDATE_PRODUCT_DISCOUNT_SUCCESS'){
        newState.discountStatus = payload;
    }

    return newState;

}


export default reducer;
