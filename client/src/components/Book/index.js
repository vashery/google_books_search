import React, { Component } from "react";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import API from "../../utils/API";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
class Book extends Component {
    state = {
        added: false
    }

    cardstyle = {
        width: '125px',
        height: '200px',
        margin: '10px'
    };

    buttonstyle = {
        margin: '10px'
    };

    handleAdd = event => {
        console.log("function was run")
        if (!this.state.added) {
            let bookdata = {
                authors: this.props.bookauthors ? this.props.bookauthors : ' ',
                description: this.props.bookdescription ? this.props.bookdescription : ' ',
                image: this.props.bookimage ? this.props.bookimage : ' ',
                link: this.props.booklink ? this.props.booklink : ' ',
                title: this.props.booktitle ? this.props.booktitle: ' '
            }
            API.saveBook(bookdata)
                .then(res => {
                    this.setState({added: true})
                })
                .catch(err => console.log(err));
        }
    }
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>
                        {this.props.booktitle}
                        <Button onClick={this.handleAdd} className="float-right" variant="outline-secondary" style={this.buttonstyle} >{this.state.added ? 'Added' : 'Add'}</Button>
                        <Button href={this.props.booklink} className="float-right" variant="outline-secondary" style={this.buttonstyle} >View </Button>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Author(s):
                        {this.props.bookauthors ? this.props.bookauthors.map(author => (
                            " " + author + " "
                        )) : 'No Author Listed'}
                    {}
                        </Card.Title>
                        <Card.Text>
                            <Card.Img className="float-left" variant="top" src={this.props.bookimage} style={this.cardstyle} />
                            {this.props.bookdescription}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
            </div>
        );
    }
}

export default Book;
