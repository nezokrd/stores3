import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllDistricts } from '../redux/actions/districtAction';

 const ViewDistrictsHook = () => {
  const dispatch=useDispatch();
  useEffect(()=>{dispatch(getAllDistricts())},[]);
  const Distrcts=useSelector((state)=>state.alldistricts.allDistricts)

  return [Distrcts]
}
export default ViewDistrictsHook
