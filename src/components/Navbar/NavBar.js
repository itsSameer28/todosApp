import React from 'react'

export default function NavBar({toggleForm,searchQuery,setSearchQuery,sort,setSort}) {
  return (
    <div>
    <div className="heading">
    <h3>Make A Notes With Us...</h3>
  </div>
  <div className="header">
    <button className="create-button" onClick={toggleForm}>
      Create Note
    </button>
    <input
      type="text"
      className="search-input"
      placeholder="Search Note By Title Or Body"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <select
      className="sort-select"
      value={sort}
      onChange={(e) => setSort(e.target.value)}
    >
      <option value="title">Sort by Title</option>
      <option value="createdAt">Sort by Created At</option>
      <option value="updatedAt">Sort by Updated At</option>
    </select>
  </div>
    </div>
  )
}

//DSR:
// Today's Task:- Reading and Implementation of JavaScript