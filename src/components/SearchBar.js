import React from 'react'

function SearchBar({search, setSearch, handleSubmit}) {
  return (
    <div>
        <div
        className="d-flex justify-content-end"
        style={{ width: "100%", marginTop: "10px" }}
      >
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            style={{ width: "max(150px,30%)" }}
            type="search"
            placeholder="Hotel Name"
            aria-label="Search"
            required
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  )
}

export default SearchBar