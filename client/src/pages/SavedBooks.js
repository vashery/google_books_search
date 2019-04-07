import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import SavedBook from "../components/SavedBook"

class SavedBooks extends Component {

  state = {
    books: [],
  };

  myCallback = (dataFromChild) => {
    let tempbook = [];
    API.deleteBook(dataFromChild).then(res => {
      tempbook = this.state.books.filter(book => book._id !== dataFromChild)
      this.setState({books: tempbook})


    })
  }

  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;
    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  componentDidMount(){
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => {
        let newarr = [];
        this.setState({ books: [] })
        console.log("Function was run")
        console.log(this.state.books)
        for (let i = 0; i < res.data.length; i++) {
          newarr.push(res.data[i])
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
              <div className="h1" >Saved Books</div>
              <br></br>
            </Jumbotron>
          </Col>
        </Row>
        {this.state.books.map(book => (
          <SavedBook
          callbackFromParent={this.myCallback}
          identifier={book._id}
          booktitle={book.title}
          bookimage={book.image}
          bookauthors={book.authors}
          bookdescription={book.description}
          booklink={book.link}
           />
        ))}
      </Container >
    );
  };
}

export default SavedBooks;
