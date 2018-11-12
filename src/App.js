import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React, {Component} from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  Fa,
  Tooltip,
  Badge,
  Button
} from 'mdbreact';
import './App.css';
import VideoCard from './VideoCard'
import * as DBHelper from './DBhelper'

class App extends Component {

  state = {
    videos: []
  };

  componentDidMount() {
    this.fetchVideos();
  }

  fetchVideos() {
    DBHelper.getAll().then((videos) => {
      if (videos) {
        console.log(videos);
        this.setState({videos: videos});
      }
    }).catch((e) => {
      console.log(e);
    })
  }

  render() {
    const {videos} = this.state;
    return (
      <Container>
        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">The Pirate Shop</h2>
          <p className="grey-text text-center w-responsive mx-auto mb-5">Unlimited Edition for Star Wars fans</p>
          <Row>
            {videos && videos.constructor === Array && videos.map((video) =>
              <VideoCard key={video.id} video={video}/>
            )}
          </Row>
        </section>
      </Container>
    );
  }
}

export default App;
