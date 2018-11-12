import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React, {Component} from 'react';
import {
  Container,
  Row,
} from 'mdbreact';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom'
import NavBar from './NavBar'
import ModelPage from './ModelPage'
import * as DBHelper from './DBhelper'
import ShopComponent from "./ShopComponent";
import CartComponent from "./CartComponent";
import SignInComponent from "./SignInComponent";
import SignUpComponent from "./SignUpComponent";
import VideoCard from "./VideoCard";

class App extends Component {

  state = {
    videos: [],
    cartItems: [],
    showFavNoti: false,
    navItem: 'shop'
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

  onCartClick() {

  }

  onFavClick() {
    this.setState({showFavNoti: true})
  }

  onCloseFavNotiModal() {
    this.setState({showFavNoti: false})
  }

  updateItem(item) {
    this.setState({navItem: item})
  }

  render() {
    const {videos, cartItems, showFavNoti, navItem} = this.state;
    return (
      <div>
        <NavBar currentItem={navItem} updateItem={(item) => this.updateItem(item)}/>
        {showFavNoti && <ModelPage isShown={showFavNoti} onClose={() => this.onCloseFavNotiModal()}/>}
          <Route exact path='/' render={() => (
            <ShopComponent videos={videos}
                           onCartClick={() => this.onCartClick()}
                           onFavClick={() => this.onFavClick()}/>
          )}/>
          <Route path='/cart' render={() => (
            <CartComponent
              items={cartItems}/>
          )}/>
          <Route path='/sign-in' render={() => (
            <SignInComponent/>
          )}/>
          <Route path='/sign-up' render={() => (
            <SignUpComponent/>
          )}/>
      </div>
    );
  }
}

export default App;
