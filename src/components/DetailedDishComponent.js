import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
} from "reactstrap";


  function RenderDish({dish}) {
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

  function RenderComments({comments}) {
    if (comments != null) {
      const cmnts = comments.map(comment => {
          return (
            <li key={comment.id}>
             
                <p>{comment.comment}</p>
                <p>
                --{comment.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                 
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
  const DetailedDish = (props)=> {
    const dish = props.dish;
    
    if (props.dish == null) {
        return (<div></div>);
    }
    return (
      <div className="container">
        <div className='row'>
            <div className="col-12 col-md-5 m-1">
              < RenderDish dish = {props.dish}/>
            </div>
            <div className="col-12 col-md-5 m-1">
              <RenderComments comments = {props.dish.comments}/>
            </div>
        </div>
        </div>
    )
}

export default DetailedDish;
