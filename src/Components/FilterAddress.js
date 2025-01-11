import React, { useMemo, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'


 const FilterAddress = ({Regions,Cities,Distrcts,itemsData,changeitem}) => {
    const [RegionID,setRegionID]=useState(0);
    const [CityID,setCityID]=useState(0);
    const [DistrctID,setDistrctID]=useState(0);
    console.log(itemsData);
    console.log(RegionID);
    console.log(CityID);
    console.log(DistrctID);
    const CitiesAfter=Cities.filter((item) => item.regionID === Number(RegionID));
    console.log(CitiesAfter);
    const DistrctsAfter=Distrcts.filter((item) => item.cityID === Number(CityID));
    console.log(DistrctsAfter);
    const [loading,setLoading]=useState(true);


    /*
    const newStores= useMemo (() => {
        return  itemsData ? itemsData.filter((item) => item.districtsID === DistrctID) : [];
    }, [itemsData]);
*/
   
    const onSearch=async(e)=>{
        e.preventDefault();
        setLoading(true);
        console.log(DistrctID)
        console.log(itemsData)
        const newStores= itemsData.filter(item => item.districtsID ===Number(DistrctID) && item.cityID ===Number(CityID)) ;
        console.log(newStores)
        changeitem(newStores)
        setLoading(false)
        console.log(loading)
        
    }
    const onChangeRegion=(e)=>{
        e.persist();
        setRegionID(e.target.value);
       
    }
    const onChangeCity=(e)=>{
        e.persist();
        setCityID(e.target.value);
      
    }
    const onChangeDistrct=(e)=>{
        e.persist();
        setDistrctID(e.target.value);
    }
   
  return (
    <div className="row">
    <Container>
    <Row>
      <Col className="col-4">
          <select name="languages" id="lang" className="select mt-3 mb-3 px-2" onChange={onChangeRegion} >
                        <option value="0">المنطقة</option>
                        {
                            Regions?(Regions.map(item=>{
                                return (<option key={item.regionID} value={item.regionID}>{item.regionNameAr}</option> ) 
                            })):null
                        }
                    
            </select>
       </Col> 
       <Col className="col-4"> 
            <select name="languages" id="lang" className="select mt-3 mb-3  px-2"  onChange={onChangeCity}>
                        <option value="0">المدينة</option>
                        {
                            
                            CitiesAfter?(CitiesAfter.map(item=>{
                                return (<option key={item.cityID} value={item.cityID}>{item.cityNameAr}</option> ) 
                            })):null
                        }
                    
            </select>
        </Col> 
        <Col className="col-4">
            <select name="languages" id="lang" className="select mt-3 mb-3  px-2 " onChange={onChangeDistrct}>
                        <option value="0">الحي</option>
                        {
                            DistrctsAfter?(DistrctsAfter.map(item=>{
                                return (<option key={item.districtsID} value={item.districtsID}>{item.districtsNameAr}</option> ) 
                            })):null
                        }
                    
            </select>
    
        </Col> 
    </Row>
    <Row>
      <Col  className="d-flex justify-content-end ">
            <button onClick={onSearch}  className="btn-serarch d-inline mt-1 mb-3">بحث</button>
      </Col>
    </Row>
    </Container>
    </div>
  )
}
export default FilterAddress