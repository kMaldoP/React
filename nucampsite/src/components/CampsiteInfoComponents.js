import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
class CampsiteInfo extends React.Component{
 constructor(props) {
    super(props);
    this.state = {};
  }
  renderCampsite(campsite){
    return(
        <div className= "col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardTitle>{campsite.name}</CardTitle>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
  }
  renderComments(comments){
       if(comments){
      return(
        <div className="col-md-5 m-1 text-left">
            <h4>Comments</h4>
          {comments.map((comments) => (
            <div key={comments.id}>
              {comments.text}
              <br />
              ---{comments.author}&nbsp;
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comments.date)))}
              <br />
              <br />
            </div>
          ))}

        </div>
      );
    } else {
      return <div></div>;
    }
  }
  render() {
    if (this.props.campsite) {
      return <div className="row">
          {this.renderCampsite(this.props.campsite)}
          {this.renderComments(this.props.campsite.comments)}
      </div>
    } else {
      return <div></div>;
    }
  }
}



export default CampsiteInfo;
