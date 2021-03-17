import React from "react";

function Searchform (props){
    return (
        <form className="search">
      <div className="form-group">
        <label htmlFor="query">Book:</label>
        <input
          value={props.query}
          onChange={props.handleInputChange}
          name="book"
          type="text"
          className="form-control"
          placeholder="Type book to begin"
          id="title"
        />
         <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
    )
}

export default Searchform;
