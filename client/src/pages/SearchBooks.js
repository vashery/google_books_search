import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import API from "../utils/API";
import Book from "../components/Book"

class SearchBooks extends Component {

  state = {
    books: [],
    inputValue: ""
  };

  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;
    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  loadBooks = searchval => {
    API.bookSearch(this.state.inputValue)
      .then(res => {
        let newarr = [];
        this.setState({ books: [], inputValue: "" })
        console.log("Function was run")
        console.log(this.state.books)
        for (let i = 0; i < res.data.items.length; i++) {
          newarr.push(res.data.items[i])
        }
        this.setState({books: newarr})
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid >
        <Row>
          <Col size="md-12">
            <Jumbotron >
              <div className="h1" >Google Book Search</div>
              <br></br>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Enter Book Name"
                  name="inputValue"
                  value={this.state.inputValue}
                  onChange={this.handleInputChange}
                  type="text"
                />
                <InputGroup.Append>
                  <Button type="button" onClick={this.loadBooks} variant="outline-secondary">Search</Button>
                </InputGroup.Append>
              </InputGroup>
            </Jumbotron>
          </Col>
        </Row>
        {this.state.books.map(book => (
          <Book 
          booktitle={book.volumeInfo.title}
          bookimage={book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1920px-SNice.svg.png"} 
          bookauthors={book.volumeInfo.authors}
          bookdescription={book.volumeInfo.description}
          booklink={book.volumeInfo.canonicalVolumeLink}
           />
        ))}
      </Container >
    );
  }
}

export default SearchBooks;
