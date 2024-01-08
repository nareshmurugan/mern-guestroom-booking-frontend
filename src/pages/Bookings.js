import React, { useEffect, useState } from "react";
import Cookies from "js-cookies";
import DateComp from "../components/DateComp";
import Loading from "../components/Loading";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import "./bb.css";
import moment from "moment";

function Bookings() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    console.log("Submited");
    setSearch("");
  };
  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const token = `Bearer ${Cookies.getItem("Credentials")}`;
        console.log(token);
        const data = (
          await axios.post("/api/rooms/getbookings", { token: token })
        ).data;
        console.log(data);
        setRooms(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log(error);
        setError(false);
      }
    };
    (async () => await fetch())();
  }, []);

  return (
    <div>
      <div>
        <SearchBar
          search={search}
          setSearch={setSearch}
          handleSubmit={handleSubmit}
        />
        {loading ? (
          <div className="d-flex justify-content-center align-items-center vh-100">
            <Loading />
          </div>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          <div className="cards">
            {rooms
              .filter((r) => {
                return (
                  r._doc.name.toLowerCase().includes(search.toLowerCase()) 
                );
              })
              .map((room) => {
                return (
                  <a href="" class="card">
                    <img src={room._doc.img[0]} class="card__image" alt="" />
                    <div class="card__overlay">
                      <div class="card__header">
                        <svg
                          class="card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <div class="border border-success border-dashed card__thumb">
                          {room.item.roomStatus}
                        </div>

                        <div class="card__header-text">
                          <h3 class="card__title">{room._doc.name}</h3>
                          <span class="card__tagline">
                            Lorem ipsum dolor sit amet consectetur
                          </span>
                          <span class="card__status">
                            {moment(room.item.roomBookedDate).format('DD-MM-YYYY')}
                          </span>
                        </div>
                      </div>
                      <p class="card__description">{room._doc.description}</p>
                    </div>
                  </a>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Bookings;
