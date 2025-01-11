import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRegions } from '../redux/actions/regionAction';

 const ViewRegionsHook = () => {
  const dispatch=useDispatch();
  useEffect(()=>{dispatch(getAllRegions())},[]);
  const Regions=useSelector((state)=>state.allRegions.allRegions)

  return [Regions]
}
export default ViewRegionsHook
