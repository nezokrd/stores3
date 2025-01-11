import React from 'react'
import { GET_ALL_REGIONS, GET_ERROR } from '../type';
import useGetData from '../../hooks/useGetData';

export const getAllRegions = () => async (dispatch) => {
    try {
       
        const response = await useGetData("/api/Region/GetAllRegions");
        
        dispatch({
            type: GET_ALL_REGIONS,
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