import React, { useState } from "react";
import { Card, Button, Modal, Carousel } from "react-bootstrap";
import "../App.css";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";

import "../vendor/bootstrap/css/bootstrap.min.css";
import "../vendor/font-awesome/css/font-awesome.min.css";
import "../vendor/slick/slick.css";
import "../vendor/slick/slick-theme.css";
import "../vendor/tempusdominus/css/tempusdominus-bootstrap-4.min.css";

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
      <div id="rooms">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-3">
                  <div class="room-img">
                    <div class="box12">
                      {/* <img src="img/room/room-1.jpg" /> */}
                      <Carousel >
                        {img.map((imgs, index) => (
                          <Carousel.Item key={index}>
                              <img
                                src={imgs}
                                alt={`${name}-image-${index + 1}`}
                              />
                          </Carousel.Item>
                        ))}
                      </Carousel>
                      <div class="box-content">
                        <h3 class="title">{name}</h3>
                        <ul class="icon">
                          <li onClick={handleCardClick}>
                            <a>
                              <i class="fa fa-link"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="room-des">
                    <h3>
                      <a href="#" data-toggle="modal" data-target="#modal-id">
                        {name}
                      </a>
                    </h3>
                    <p>{description}</p>
                    <ul class="room-size">
                      <li>
                        <i class="fa fa-arrow-right"></i>
                        {type}{" "}
                      </li>
                      <li>
                        <i class="fa fa-arrow-right"></i>
                        {phoneNumber}{" "}
                      </li>
                    </ul>
                    <ul class="room-icon">
                      <li class="icon-1"></li>
                      <li class="icon-2"></li>
                      <li class="icon-3"></li>
                      <li class="icon-4"></li>
                      <li class="icon-5"></li>
                      <li class="icon-6"></li>
                      <li class="icon-7"></li>
                      <li class="icon-8"></li>
                      <li class="icon-9"></li>
                      <li class="icon-10"></li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="room-rate">
                    <h3>From</h3>
                    <h1>$150</h1>
                  <Link to = {`/payment/${_id}`}><a>Book Now</a></Link>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>

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
          <div class="col-12">
          <p>
            <span className="bold">Max Count:</span> {maxCount}
          </p>
          <p>
            <span className="bold">Phone Number:</span> {phoneNumber}
          </p>
          <p>
            <span className="bold">Rent Price:</span> {rentPrice}
          </p>
          <p>
            <span className="bold">Type:</span> {type}
          </p>
          <p>
            <span className="bold">Description:</span> {description}
          </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Link to={`/payment/${_id}`}>
            <Button variant="secondary"><a>Book</a></Button>
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
