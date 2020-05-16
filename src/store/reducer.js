import * as ACTIONS from '../common/constants';


export const initialState = {

   usernames: "hasitha keshana",
    user: {
        cart: [],
        cartTotal:0
    },
    products : [],
    item:{
        currentSelectedItem : {} ,
        itemRatingDetails:{
            countRatings : {} ,
            avgRating : 0,
            ratingCount : {},
            ratingList : {},
            
        }

    },
    auth: {
        currentUser: {

            role : 'guest'
        },
        isAuthenticated: false,
        isTokenChecked: false,
        isRegistered: false,
        wishList : {},
        wishListCount : 0},
        items: [],
    // }, items: [{
    //     itemID: 1,
    //     itemRatingDetails: {},
    //     images: ['http://localhost:4000/1.jpeg'],
    //     name: "Crocodile Shirt",
    //     price: 500.00,
    //     size: "XL",
    //     description: "50% OFF TODAY",
    //     mainCategory: "Men",
    //     subCategory: "Jeans",
    //     quantityInCart: 1,
    //     cartIn: false
    // }, {
    //     itemID: 2,
    //     itemRatingDetails: {},
    //     images: ['http://localhost:4000/1.jpeg'],
    //     name: "Crocodile Shirt",
    //     price: 500.00,
    //     description: "50% OFF TODAY",
    //     mainCategory: "Men",
    //     subCategory: "Jeans",
    //     quantityInCart: 1,
    //     cartIn: false
    // },
    //     {
    //         itemID: 3,
    //         itemRatingDetails: {},
    //         images: ['https://unsplash.com/photos/QXevDflbl8A'],
    //         name: "Ralph Loren Shirt",
    //         price: 655.00,
    //         description: "70% OFF TODAY",
    //         mainCategory: "Women",
    //         subCategory: "Jeans",
    //         quantityInCart: 1,
    //         cartIn: false
    //     },
    //     {
    //         itemID: 4,
    //         itemRatingDetails: {},
    //         images: ['http://localhost:4000/1.jpeg'],
    //         name: "Crocodile Shirt",
    //         price: 500.00,
    //         description: "50% OFF TODAY",
    //         mainCategory: "Men",
    //         subCategory: "Shirts",
    //         quantityInCart: 1,
    //         cartIn: false
    //     },
    //     {
    //         itemID: 5,
    //         itemRatingDetails: {},
    //         images: ['https://www.123rf.com/stock-photo/fashion.html?sti=mjd9dc032p07t42mfx|&mediapopup=74168363'],
    //         name: "Crocodile Shirt",
    //         price: 500.00,
    //         description: "50% OFF TODAY",
    //         mainCategory: "Women",
    //         subCategory: "Jeans",
    //         quantityInCart: 1,
    //         cartIn: false
    //     },
    //     {
    //         itemID: 6,
    //         itemRatingDetails: {},
    //         images: ['http://localhost:4000/2.jpeg'],
    //         name: "Ralph Loren Shirt",
    //         price: 655.00,
    //         description: "70% OFF TODAY",
    //         quantityInCart: 1,
    //         cartIn: false
    //     }, {
    //         itemID: 7,
    //         itemRatingDetails: {},
    //         images: ['http://localhost:4000/1.jpeg'],
    //         name: "Crocodile Shirt",
    //         price: 500.00,
    //         description: "50% OFF TODAY",
    //         quantityInCart: 1,
    //         cartIn: false
    //     },
    //     {
    //         itemID: 8,
    //         itemRatingDetails: {},
    //         images: ['http://localhost:4000/2.jpeg'],
    //         name: "Ralph Loren Shirt",
    //         price: 655.00,
    //         description: "70% OFF TODAY",
    //         quantityInCart: 1,
    //         cartIn: false
    //     }, {
    //         itemID: 9,
    //         itemRatingDetails: {},
    //         images: ['http://localhost:4000/1.jpeg'],
    //         name: "Crocodile Shirt",
    //         price: 500.00,
    //         description: "50% OFF TODAY",
    //         quantityInCart: 1,
    //         cartIn: false
    //     },
    //     {
    //         itemID: 10,
    //         itemRatingDetails: {},
    //         images: ['http://localhost:4000/2.jpeg'],
    //         name: "Ralph Loren Shirt",
    //         price: 655.00,
    //         description: "70% OFF TODAY",
    //         quantityInCart: 1,
    //         cartIn: false
    //     }, {
    //         itemID: 11,
    //         itemRatingDetails: {},
    //         images: ['http://localhost:4000/1.jpeg'],
    //         name: "Crocodile Shirt",
    //         price: 500.00,
    //         description: "50% OFF TODAY",
    //         quantityInCart: 1,
    //         cartIn: false
    //     },
    //     {
    //         itemID: 12,
    //         itemRatingDetails: {},
    //         images: ['http://localhost:4000/2.jpeg'],
    //         name: "Ralph Loren Shirt",
    //         price: 655.00,
    //         description: "70% OFF TODAY",
    //         mainCategory: "Kids",
    //         subCategory: "Jeans",
    //         quantityInCart: 1,
    //         cartIn: false
    //     }
    // ],

    menCategories: ['Jeans', 'Shirts', 'T-Shirts', 'Footwear'],
    womenCategories: ['Jeans', 'Blouses', 'Life Style', 'Footwear'],
    kidsCategories: ['Jeans', 'Shirts', 'T-Shirts', 'Footwear'],
    sportsCategories: ['Jeans', 'Shirts', 'T-Shirts', 'Footwear'],
    discountCategories: ['Jeans', 'Shirts', 'Footwear'],
    selectedMainCategory: "All",
    selectedSubCategory: "All",
    selectedItemsArray: [],
    itemInCartCount: 0,
    cartTotal:0.0,
    cartCheck: false,
    cart: [/*{
        itemID: 1,
        itemRatingDetails: {},
        images: ['http://localhost:4000/1.jpeg'],
        name: "Crocodile Shirt",
        price: 500.00,
        size: "XL",
        description: "50% OFF TODAY",
        mainCategory: "Men",
        subCategory: "Jeans",
        quantityInCart: 0,

    }*/]

};

const reducer = (state = initialState, {type, payload}) => {

    const newState = {...state};


    if (type === 'SIGNUP') {
        newState.auth.currentUser = payload.user;
    }  if (type === 'UPDATE_MAIN_CATEGORY') {
        newState.selectedMainCategory = payload;
    }  if (type === 'UPDATE_SUB_CATEGORY') {
        newState.selectedSubCategory = payload;
    }  if (type === 'UPDATE_SELECTED_ITEMS_ARRAY') {
        newState.selectedItemsArray = payload;
    }  if (type === 'UPDATE_CART') {
        newState.cart.push(payload)
    }  if (type === 'UPDATE_CART_COUNT') {
        newState.itemInCartCount++;
    }  if (type === 'UP_COUNT_IN_CART') {


        let index = state.cart.findIndex(x=> x.itemID===payload);
        newState.cart[index].quantityInCart =   newState.cart[index].quantityInCart+1;
        newState.cartTotal = newState.cartTotal + newState.cart[index].price;

    }if (type === 'DOWN_COUNT_IN_CART') {

        let index = state.cart.findIndex(x=> x.itemID===payload);
        newState.cart[index].quantityInCart =   newState.cart[index].quantityInCart-1;
        newState.cartTotal = newState.cartTotal - newState.cart[index].price;

    } if(type === 'ADD_TO_TOTAL'){
        newState.cartTotal = newState.cartTotal+payload.price;
    }if(type === 'CART_CHECK_TRUE'){
            //console.log('CART_CHECK_TRUE')
            newState.cartCheck = !newState.cartCheck;
    } if(type === 'CART_CHECK_FALSE'){
        console.log('CART_CHECK_F')
        newState.cartCheck = false;
    }if(type === 'CHECK_CART'){
        let index = newState.items.findIndex(x=> x.itemID===payload.itemID);
        newState.items[index].cartIn=true;

    }
    if(type === ACTIONS.GET_RATE_COMMENTS_SUCCESS){

        // console.log(payload.data);
     
         newState.item.itemRatingDetails.countRatings = payload.data.countRatings;
         
         newState.item.itemRatingDetails.avgRating = payload.data.avg;
     
         newState.item.itemRatingDetails.ratingCount = payload.data.noOfRatings;
     
         newState.item.itemRatingDetails.ratingList = payload.data.ratings
     
     }
     
     if(type === ACTIONS.GET_VIEW_ITEM_SUCCESS){
     
         newState.item.currentSelectedItem = payload.data;
     
     
     
     }
     
     if(type === ACTIONS.GET_USER_WISHLIST_SUCCESS){
     
         console.log('reducer',payload.data);
         newState.auth.wishList = payload.data;

         const count = payload.data.length;

         console.log('count',count); // wishListCount
         
         newState.auth.wishListCount = count;
     }
     // GET_ALL_PRODUCTS_SUCCESS
     if(type === ACTIONS.GET_ALL_PRODUCTS_SUCCESS){
     
        console.log('reducer',payload);
        newState.items = payload;

        // const count = payload.data.length;

        // console.log('count',count); // wishListCount
        
        // newState.auth.wishListCount = count;
    }
     // action = login success -> currentUser = payload.user/ isauthenticated = true
     
     // action logout -> isauthenticated / false
     
     // register success -> isregistered = success
     
     // toekn checked -> tokenchecked = true
     
    return newState;

}


export default reducer;
