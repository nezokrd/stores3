import useGetData from "../../hooks/useGetData";
import { GET_ALL_CATEGORIES, GET_ALL_CATEGORIES_BYTYPEID, GET_ERROR } from "../type";



export const getAllCategories = () => async (dispatch) => {
    try {
        //const response = await useGetData("/api/Category/GetAllCategoryAr");
        const response = await useGetData("/api/Category/GetAllCategories");
        
        dispatch({
            type: GET_ALL_CATEGORIES,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}


export const getAllCategoriesByTypeID = (typeid) => async (dispatch) => {
    try {
        //const response = await useGetData("/api/Category/GetAllCategoryAr");
        const response = await useGetData(`/api/Category/GetAllCategoryAvailableByNameAr/${typeid}`);
        
        dispatch({
            type: GET_ALL_CATEGORIES_BYTYPEID,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}