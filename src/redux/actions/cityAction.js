import useGetData from "../../hooks/useGetData";
import { GET_ALL_CITIES, GET_ERROR } from "../type";



export const getAllCities = () => async (dispatch) => {
    try {
       
        const response = await useGetData("/api/city/GetAllCities");
        
        dispatch({
            type: GET_ALL_CITIES,
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


