import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRegions } from '../redux/actions/regionAction';
import { getAllCities } from '../redux/actions/cityAction';

 const ViewCitiesHook = () => {
  const dispatch=useDispatch();
  useEffect(()=>{dispatch(getAllCities())},[]);
  const Cities=useSelector((state)=>state.allcities.allCities)

  return [Cities]
}
export default ViewCitiesHook
