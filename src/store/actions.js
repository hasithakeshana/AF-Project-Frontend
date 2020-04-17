import {func} from "prop-types";

export function update_selected_main_category(selectedMainCategory){
    return{
        type : 'UPDATE_MAIN_CATEGORY',
        payload : selectedMainCategory
    }

}
export function update_selected_sub_category(selectedSubCategory){
    return{
        type : 'UPDATE_SUB_CATEGORY',
        payload : selectedSubCategory
    }

}

export function update_buildSelectedItemsArray(selectedItemsArray){
    return{
        type : 'UPDATE_SELECTED_ITEMS_ARRAY',
        payload : selectedItemsArray
    }

}
export function update_cart(item) {
    return {
        type: 'UPDATE_CART',
        payload: item
    }
}
export function update_cart_count() {

    return {
        type: 'UPDATE_CART_COUNT',
        payload: 1
    }
}
export  function  up_count_in_cart(itemId){
    return {
        type: 'UP_COUNT_IN_CART',
        payload: itemId
    }

}
export  function  down_count_in_cart(itemId){
    return {
        type: 'DOWN_COUNT_IN_CART',
        payload: itemId
    }

}

//This function is called when user clicking cart icon of an item and when clicking it Total in the cart is also updated
export function add_to_total(item) {
    return{
        type: 'ADD_TO_TOTAL',
        payload:item
    }
}

export function cart_check_true() {
    return{
        type: 'CART_CHECK_TRUE',
        payload:1
    }
}
export function cart_check_false() {
    console.log('false')
    return{
        type: 'CART_CHECK_FALSE',
        payload:1
    }
}
export function check_cart(item) {
    return{
        type: 'CHECK_CART',
        payload:item
    }
}

