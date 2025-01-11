import useGetData from "../../hooks/useGetData";
import { GET_ALL_STORES, GET_ALL_STORES_TYPE, GET_ERROR, GET_STORE_DETALIS } from "../type";



export const getAllStores = () => async (dispatch) => {
    try {
        const response = await useGetData("/api/stores/GetAllStores");
        dispatch({
            type: GET_ALL_STORES,
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

export const getAllStoresType = (typeid) => async (dispatch) => {
    try {
        const response = await useGetData("/api/stores/GetAllStores");
        dispatch({
            type: GET_ALL_STORES_TYPE,
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

export const getOneStore = (id) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/stores/FindStoreAr/${id}`);
       
        dispatch({
            type: GET_STORE_DETALIS,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e
        })
    }
}
    