import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getOneStore } from '../redux/actions/storesAction';


const ViewOneStoreHook = (id) => {

    const dispatch = useDispatch();
    console.log(id)
    useEffect(() => {
        
        dispatch(getOneStore(id))
        
    }, [])
    
    
    const onestore = useSelector((state) => state.allstores.oneStore)
    console.log(onestore)
    let store = [];
    if (onestore)
        store = onestore;
        //Stores = allStores.slice(0, 4);
    else
    store = []

    return [store]

}

export default ViewOneStoreHook