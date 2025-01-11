import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllStores } from '../redux/actions/storesAction';


const ViewHomeStoresHook = () => {

    const dispatch = useDispatch();
   
    useEffect(() => {
       
        dispatch(getAllStores())
        
    }, [])
    
    
    const allStores = useSelector((state) => state.allstores.allStores)
    
    let Stores = [];
    if (allStores)
        Stores = allStores;
        //Stores = allStores.slice(0, 4);
    else
       Stores = []

    return [Stores]

}

export default ViewHomeStoresHook