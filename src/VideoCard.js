import {Card, CardBody, CardFooter, CardImage, CardText, CardTitle, Col, Tooltip, Badge} from "mdbreact";
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
              <h5 color="unique-color-dark">{video.Title}</h5>
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
                <Badge color={video.cdType === 'DVD' ? "green" : "orange"} pill>{video.cdType}</Badge>{'    '}
                <a onClick={(video) => this.props.onCartClick(video)}><Tooltip placement="top" tag="a" component="i"
                                                                     componentClass="fa fa-shopping-cart grey-text ml-3"
                                                                     tooltipContent="Add to Cart"/></a>
                <a onClick={() => this.props.onFavClick()}><Tooltip placement="top" tag="a" component="i"
                                                                    componentClass="fa fa-heart grey-text ml-3"
                                                                    tooltipContent="Add to Watchlist"/></a>
              </span>
            </CardFooter>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default VideoCard
