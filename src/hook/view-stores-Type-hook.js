import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllStores, getAllStoresType } from '../redux/actions/storesAction';


const ViewStoresTypeHook = (typeid) => {

    const dispatch = useDispatch();
   
    useEffect(() => {
       
        dispatch(getAllStores())
        
    }, [])
    
    
    const allStoresType = useSelector((state) => state.allstores.allStores)
    console.log(allStoresType)
    
    const storesType = useMemo(() => {
        return allStoresType ? allStoresType.filter((item) => item.typeID === typeid) : [];
    }, [allStoresType, typeid]);

  
    let StoresTypes = [];

    if (storesType)
        StoresTypes = storesType;
       
    else
        StoresTypes = []


    console.log(StoresTypes)    
    return [StoresTypes]

}

export default ViewStoresTypeHook