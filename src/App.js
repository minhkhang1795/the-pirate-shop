import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React, {Component} from 'react';
import {
  Container,
  Row,
} from 'mdbreact';
import './App.css';
import VideoCard from './VideoCard'
import NavBar from './NavBar'
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
      <div>
        <Container>
          <NavBar/>
          <section className="text-center my-5 py-5">
            <h2 className="h1-responsive font-weight-bold text-center my-3">The Pirate Shop</h2>
            <p className="grey-text text-center w-responsive mx-auto mb-3">Unlimited Edition for Star Wars fans</p>
            <Row>
              {videos && videos.constructor === Array && videos.map((video) =>
                <VideoCard key={video.id} video={video}/>
              )}
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default App;
