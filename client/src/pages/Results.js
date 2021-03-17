import React, { Component } from "react";
import Searchform from "../components/Searchform";
import api from "../utils/api";

class Results extends Component {
  state = {
    books: [],
    query: ""
  }
  handleInputChange = event => {
    this.setState({
      query: event.target.value
    });
  }
  SearchBooks = () => {
    api.getBooks(this.state.query).then(books => {
      this.setState({
        books: books.data.items
      })
    })
    console.log(this.state);
  }
  handleFormSubmit = event => {
    event.preventDefault();
    console.log("click button");
    this.SearchBooks();
  }
  render() {
    return (
      <Searchform
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
        query={this.state.query} />
    )
  }
}

export default Results;