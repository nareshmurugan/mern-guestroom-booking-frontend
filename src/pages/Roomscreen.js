import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Bookingrooms from "./Bookingrooms";
import Loading from "../components/Loading";
import Filter from "../components/Filter";
import DateComp from "../components/DateComp";
import SearchBar from "../components/SearchBar";

const Roomscreen = ({ search, setSearch, handleSubmit }) => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
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
      <DateComp
        startDate={startDate}
        endDate={endDate}
        setEndDate={setEndDate}
        setStartDate={setStartDate}
      />
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
        <div className="row">
          {/* <SearchFil /> */}
          {/* <div className="col-md-3">
            <Filter />
              </div> */}
          {rooms
             .filter((r) => {
              return (
                r.name.toLowerCase().includes(search.toLowerCase()) &&
                (!r.dateOfBooked.some(({ start, end }) => {
                  return new Date(start) <= new Date(endDate) &&
                    new Date(end) >= new Date(startDate);
                }))
              );
            })
            .map((room) => {
              return (
                <div className="card-list" style={{ padding: "20px" }}>
                  <Bookingrooms room={room} />
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Roomscreen;
