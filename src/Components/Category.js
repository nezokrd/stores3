import React from 'react'
import { Col, Row } from 'react-bootstrap'

 const Category = ({FilterByCategory,AllCategory}) => {
 const onFilter=(cat)=>{

  FilterByCategory(cat);
  }
  return (
    <div>
     <Row >
      <Col sm="12" className="d-flex justify-content-center" style={{ flexWrap: "wrap" }}>
      {
        AllCategory.length>=1 ?( AllCategory.map((cat)=>
        {
          return(
          <div className='mb-3'>
            <button onClick={()=>onFilter(cat)} style={{border:'1px solid #b45b35'}} className='btn mx-2'>{cat}</button>

        </div>
        )}
        )):(<h3>لا يوجد تصنيفات</h3>)
      

      }
        

      </Col>


     </Row>

    </div>
  )
}
export default Category