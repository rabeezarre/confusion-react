import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null){
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
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
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        { comments.map((oneComment)=> {
                                function formatDate(string){
                                    let options = { year: 'numeric', month: 'short', day: 'numeric' };
                                    return new Date(string).toLocaleDateString([],options);
                                }
                                return (
                                    <li key={oneComment.id}>
                                        <p>{oneComment.comment}</p>
                                        <p>-- {oneComment.author} , {formatDate(oneComment.date)}</p>
                                    </li>
                                )
                                // return ([
                                //         <li key = {oneComment.id} className="mb-2">{oneComment.comment}</li>,
                                //         <li key = {oneComment.id} className="mb-2">-- {oneComment.author}, {formatDate(oneComment.date)}</li>
                                //     ]
                                // );
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
        const dish = this.props.selectedDish;

        if (dish != null){
            return (
                <div className="row">
                    {this.renderDish(dish)}
                    {this.renderComments(dish.comments)}
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