
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