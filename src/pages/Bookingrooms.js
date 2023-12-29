import React, { useState } from "react";
import { Card, Button, Modal, Carousel } from "react-bootstrap";
import '../App.css';
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';

const ProductCard = ({
  _id,
  name,
  maxCount,
  phoneNumber,
  rentPrice,
  img,
  cur_Booking,
  type,
  description,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Card className="row"
        style={{
          margin: "auto",
          textAlign: "left",
          marginTop: "10px",
          border: "1px solid #ccc",
          display: "flex",
          flexDirection: "row",
          boxShadow:"2px 2px 5px #888888",
        }}
        
      >
        <Carousel className="col-md-3">
          {img.map((imgs, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  style={{height:'16rem', width:'16rem'}}
                  src={imgs}
                  alt={`${name}-image-${index + 1}`}
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Body className="col-md-6">
          <Card.Title className="justify-content-center">{name}</Card.Title>
          <Card.Text>
          
            <p ><span className="bold">Max Count:</span > {maxCount}</p>
            <p ><span className="bold">Phone Number:</span > {phoneNumber}</p>
            <p ><span className="bold">Rent Price:</span > {rentPrice}</p>
            <p ><span className="bold">Type:</span > {type}</p>
            <p ><span className="bold">Description:</span > {description}</p>
      
          </Card.Text>
          
        </Card.Body>
        <Card.Footer className="col-md-3" style={{display: "block"}}>
          <Card.Title style={{flex:1}}>For Booking</Card.Title>
          <Card.Text style={{flex:3}}><p>  lkhfggh g hfd yfd yd  ddj </p></Card.Text>
          <div style={{flex:1}}>
          <Button variant="secondary" onClick={handleCardClick} >
            View Details
          </Button>
          <Link to={`/payment/${_id}`}><Button variant="secondary" >
            Book
          </Button></Link>
          </div>
        </Card.Footer>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {img.map((imgs, index) => (
              <Carousel.Item key={index}>
                <div className="d-flex justify-content-center">
                  <img
                    src={imgs}
                    alt={`${name}-image-${index + 1}`}
                    style={{width:'250px',hegth:'200px'}}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
          <p ><span className="bold">Max Count:</span > {maxCount}</p>
            <p ><span className="bold">Phone Number:</span > {phoneNumber}</p>
            <p ><span className="bold">Rent Price:</span > {rentPrice}</p>
            <p ><span className="bold">Type:</span > {type}</p>
            <p ><span className="bold">Description:</span > {description}</p>
        </Modal.Body>
        <Modal.Footer>
        <Link to={`/payment/${_id}`}><Button variant="secondary" >
            Book
          </Button>
          </Link>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const Bookingrooms = ({ room }) => {
  return (
    <>
      <ProductCard key={room._id} {...room} />
      
    </>
  );
};

export default Bookingrooms;
