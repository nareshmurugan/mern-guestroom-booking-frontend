import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Bookingrooms from "./Bookingrooms";
import Loading from "./Loading";
import Filter from "./Filter";
import SearchFil from "./SearchFil";

const Roomscreen = ({ search }) => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const data = (await axios.get("/api/rooms/getallrooms")).data;

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
      <h1>Home</h1>
        {loading ? (
          <div className="d-flex justify-content-center align-items-center vh-100">
            <Loading />
          </div>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          <div className="row">
            <SearchFil />
            <div className="col-md-3">
            <Filter />
              </div>
            <div className="col-md-8">
            {
          rooms
            .filter((r) => r.name.toLowerCase().includes(search.toLowerCase()))
            .map((room) => {
              return (
                <div className="card-list" style={{ padding: "20px" }}>
                  <Bookingrooms room={room} />
                </div>
              );
            })
          }
          </div>
          </div>)}
      </div>
  );
};

export default Roomscreen;
