import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
} from "reactstrap";
class DetailedDish extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div> </div>;
    }
  }

  renderComments(comments) {
    if (comments != null) {
      const cmnts = comments.map(comment => {
          return (
            <li key={comment.id}>
             
                <p>{comment.comment}</p>
                <p>
                {comment.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                 
                </p>
            </li>
          );
        }
      );
      return (
        <div>
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {cmnts}
            </ul>

        </div>
    )
    } 
    else {
      return <div></div>;
    }
  }
  render(){
    const dish = this.props.dish;
    
    if (dish == null) {
        return (<div></div>);
    }

    const dishItem = this.renderDish(dish);
    const dishComment = this.renderComments(dish.comments);

    return (
      <div className="container">
        <div className='row'>
            <div className="col-12 col-md-5 m-1">{dishItem}</div>
            <div className="col-12 col-md-5 m-1">{dishComment}</div>
        </div>
        </div>
    )
}
}

export default DetailedDish;