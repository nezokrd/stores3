import {GET_ALL_CATEGORIES, GET_ALL_CATEGORIES_BYTYPEID, GET_ERROR } from "../type";

const inital = {
    allCategories: [],
    allCategoriesType:[],
    loading: true,
}
const categoriesReducer = (state = inital, action) => {
    switch (action.type) {
           
            case GET_ALL_CATEGORIES:
                return {
                    ...state,
                    allCategories: action.payload,
                    loading: false,
                }
                case GET_ALL_CATEGORIES_BYTYPEID:
                return {
                    ...state,
                    allCategoriesType: action.payload,
                    loading: false,
                }
         
            case GET_ERROR:
              return {
                loading: true,
                allCategories: action.payload,
            }
            default:
              return state;
    }
}
export default categoriesReducer