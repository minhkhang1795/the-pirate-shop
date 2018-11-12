import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React, {Component} from 'react';
import { Container, Row, Col, Card, CardImage, CardBody, CardTitle, CardText, CardFooter, Fa, Tooltip, Badge, Button } from 'mdbreact';
import './App.css';
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
      console.log(videos);
      this.setState({ videos })
    })
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
