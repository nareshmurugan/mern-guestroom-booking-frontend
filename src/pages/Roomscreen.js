import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Bookingrooms from "./Bookingrooms";
import Loading from "../components/Loading";
import Filter from "../components/Filter";


const Roomscreen = ({ search,setSearch,handleSubmit }) => {
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
      <div className="d-flex justify-content-end" style={{width:"100%", marginTop:"10px"}}>
        <form className="d-flex" role="search" onSubmit={handleSubmit} >
        <input className="form-control me-2" style={{width:"max(150px,30%)"}}
        type="search" 
        placeholder="Hotel Name" 
        aria-label="Search"
        required
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit" >Search</button>
      </form> 
      </div>
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
          </div>)}
      </div>
  );
};

export default Roomscreen;
