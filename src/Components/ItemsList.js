import React from 'react'
import {Card, Col, Row } from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import imagestore from '../images/storeimage.jpg'
import { Link } from 'react-router-dom'


 const ItemsList = ({itemsData}) => {
  console.log('input')
  console.log(itemsData)
  return (
   
    <Row>
    

    {
      
      itemsData.length>=1 ? (itemsData.map((item)=>{
        return( <Col key={item.id} sm="12" className="mb-3">
          <Zoom>
          <Link to={`/StoreDetailsPage/${item.storeID}`} style={{ textDecoration: "none" }}>
             <Card className="d-flex flex-row" style={{backgroundColor:'#F8F8F8'}}>
            <Card.Img className="img-item" style={{width:'35%'}} variant="top" src={imagestore} />
            <Card.Body>
              <Card.Title className="d-flex justify-content-between">
                 <div className="item-title">{item.name}</div>
                 <div className="item-price">التقييم:{item.rating}</div>
              </Card.Title>

              <Card.Text className="py-2">
              <div className="item-description">

               {item.categoryName}
              </div>
               
              </Card.Text>
            </Card.Body>
          </Card>
      </Link>
          </Zoom>
     </Col>



        )


      }))
      
      :<h3 className="text-center"></h3>




    }

   
    </Row>
   
  )
}
export default ItemsList