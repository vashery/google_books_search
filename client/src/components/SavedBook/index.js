import React, { Component } from "react";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import API from "../../utils/API";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
class SavedBook extends Component {
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


    handleDelete = () => {
        this.props.callbackFromParent(this.props.identifier)
        }
        
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>
                        {this.props.booktitle}
                        <Button identifier={this.props.identifier} onClick={this.handleDelete} className="float-right" variant="outline-secondary" style={this.buttonstyle} >Delete</Button>
                        <Button href={this.props.booklink} className="float-right" variant="outline-secondary" style={this.buttonstyle} >View </Button>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Author(s):
                    {this.props.bookauthors.map(author => (
                            " " + author + " "
                        ))}
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

export default SavedBook;
