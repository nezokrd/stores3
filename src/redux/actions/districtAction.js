import useGetData from "../../hooks/useGetData";
import { GET_ALL_DISTRICTS, GET_ERROR } from "../type";



export const getAllDistricts = () => async (dispatch) => {
    try {
       
        const response = await useGetData("/api/District/GetAllDistricts");
        
        dispatch({
            type: GET_ALL_DISTRICTS,
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


