import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom/dist/umd/react-router-dom.development";
import DateComp from "../components/DateComp.js";
import axios from "axios";
import GooglePayButton from "@google-pay/button-react";
import { Carousel } from "react-bootstrap";
import "../App.css";

function Payment() {
  
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const handleClick=async()=>{
    try {
      const data = (await axios.post("/api/rooms/bookroom", { _id, startDate, endDate })).data;
      setRoom(data);
    } catch (error) {
      console.log("No Token");
    }
  }
  const { _id } = useParams();
  const [room, setRoom] = useState({
    name: "Room Name",
    maxCount: 5,
    phoneNumber: "643534546",
    rentPrice: 32446,
    img: [],
    cur_Booking: [],
    type: "dekux",
    description: "kjhgfd",
    dateOfBooked: [
      {
        start: new Date(),
        end: new Date(),
      },
    ],
  });


  useEffect(() => {
    const getRooms = async () => {
      try {
        const data = (await axios.post("/api/rooms/getRoom", { _id })).data;
        setRoom(data);
      } catch (error) {
        console.log("No Token");
      }
    };
    (async () => await getRooms())();
  }, []);

  return (
    <div>
      <DateComp
        startDate={startDate}
        endDate={endDate}
        setEndDate={setEndDate}
        setStartDate={setStartDate}
      />

      <div id="rooms">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-3">
                  <div class="room-img">
                    <div class="box12">
                      {/* <img src="img/room/room-1.jpg" /> */}
                      <Carousel>
                        {room.img.map((imgs, index) => (
                          <Carousel.Item key={index}>
                            <img
                              src={imgs}
                              alt={`${room.name}-image-${index + 1}`}
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>
                      <div class="box-content">
                        <h3 class="title">{room.name}</h3>
                        <ul class="icon">
                          <li>
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
                        {room.name}
                      </a>
                    </h3>
                    <p>{room.description}</p>
                    <ul class="room-size">
                      <li>
                        <i class="fa fa-arrow-right"></i>
                        {room.type}{" "}
                      </li>
                      <li>
                        <i class="fa fa-arrow-right"></i>
                        {room.phoneNumber}{" "}
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
                    <h3>BOOK NOW</h3>
                    <h1>$150</h1>

                    <GooglePayButton
                      environment="TEST"
                      paymentRequest={{
                        apiVersion: 2,
                        apiVersionMinor: 0,
                        allowedPaymentMethods: [
                          {
                            type: "CARD",
                            parameters: {
                              allowedAuthMethods: [
                                "PAN_ONLY",
                                "CRYPTOGRAM_3DS",
                              ],
                              allowedCardNetworks: ["MASTERCARD", "VISA"],
                            },
                            tokenizationSpecification: {
                              type: "PAYMENT_GATEWAY",
                              parameters: {
                                gateway: "example",
                                gatewayMerchantId: "exampleGatewayMerchantId",
                              },
                            },
                          },
                        ],
                        merchantInfo: {
                          merchantId: "12345678901234567890",
                          merchantName: "Demo Merchant",
                        },
                        transactionInfo: {
                          totalPriceStatus: "FINAL",
                          totalPriceLabel: "Total",
                          totalPrice: "100.00",
                          currencyCode: "USD",
                          countryCode: "US",
                        },
                      }}
                      onLoadPaymentData={(paymentRequest) => {
                        console.log("load payment data", paymentRequest);
                      }}
                    />
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <Link to='/home'><button type="button" class="btn btn-warning" onClick={()=>handleClick()}>Pay</button></Link>
    </div>
  );
}

export default Payment;
