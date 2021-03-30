import React, { Component } from "react";
import Searchform from "../components/Searchform";
import api from "../utils/api";
import Bookcard from "../components/Bookcards";

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
      console.log(this.state);
    })
  }
  handleFormSubmit = event => {
    event.preventDefault();
    console.log("click button");
    this.SearchBooks();
  }
  handleSave = id => {
    console.log(id);
    const book = this.state.books.find(book=>book.id===id);
    const bookData = {
      googleID: book.id,
      title: book.volumeInfo.title, 
      link: book.volumeInfo.infoLink,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
    }
    console.log(bookData);
    api.saveBook(bookData)
  }
  render() {
    return (
      <div>
        <Searchform
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          query={this.state.query} />
        <div className="container">{this.state.books.map(book => (
          <Bookcard 
          title={book.volumeInfo.title}
          key={book.id}
          image={book.volumeInfo.imageLinks.smallThumbnail}
          description={book.volumeInfo.description}
          Button={()=>(
            <button onClick={()=>this.handleSave(book.id)}>Save</button>
          )}
          />

        ))}</div>
      </div>
    )
  }
}

export default Results;