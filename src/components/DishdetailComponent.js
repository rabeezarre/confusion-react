import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null){
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    renderComments(comments){
        if (comments != null){
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        { comments.map((oneComment)=> {
                                function formatDate(string){
                                    let options = { year: 'numeric', month: 'short', day: 'numeric' };
                                    return new Date(string).toLocaleDateString([],options);
                                }

                                return ([
                                        <li>{oneComment.comment}</li>,
                                        <li>-- {oneComment.author}, {formatDate(oneComment.date)}</li>
                                    ]
                                );
                            }
                        )
                        }

                    </ul>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }

    }

    render() {
        if (this.props.selectedDish != null){
            return (
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.selectedDish.comments)}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;