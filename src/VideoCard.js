import {Card, CardBody, CardFooter, CardImage, CardText, CardTitle, Col, Tooltip} from "mdbreact";
import React, {Component} from 'react';

class VideoCard extends Component {

  render() {
    const {video} = this.props;

    return (
      <Col lg="4" md="12" className="mb-4">
        <Card wide>
          <CardImage cascade src={video.Poster} top alt={video.Title}/>
          <CardBody cascade className="text-center">
            <a href="" className="text-muted">
              <h5>{video.Title}</h5>
            </a>
            <CardTitle>
              <strong>{video.Director}</strong>
            </CardTitle>
            <CardText>{video.Plot}</CardText>
            <CardFooter className="px-1">
                    <span className="float-left font-weight-bold">
                      <strong>${video.price}</strong>
                    </span>
              <span className="float-right">
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-shopping-cart grey-text ml-3"
                               tooltipContent="Add to Cart"/>
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-heart grey-text ml-3"
                               tooltipContent="Add to Watchlist"/>
                    </span>
            </CardFooter>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default VideoCard
