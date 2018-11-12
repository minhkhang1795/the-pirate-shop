import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import NavBar from './NavBar'
import FavModalPage from './FavModalPage'
import CartModalPage from './CartModalPage'
import * as DBHelper from './DBhelper'
import ShopComponent from "./ShopComponent";
import CartComponent from "./CartComponent";
import SignInComponent from "./SignInComponent";
import SignUpComponent from "./SignUpComponent";

class App extends Component {

  state = {
    videos: [],
    cartItems: [],
    currentItem: null,
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

  onCartClick(item) {
    console.log(item)
    this.setState({currentItem: item})
  }

  onCloseCartModal() {
    this.setState({currentItem: null})
  }


  onFavClick() {
    this.setState({showFavNoti: true})
  }

  onCloseFavNotiModal() {
    this.setState({showFavNoti: false})
  }

  onCartUpdate(quantity) {
    console.log(quantity)
  }

  updateNavItem(item) {
    this.setState({navItem: item})
  }

  render() {
    const {videos, cartItems, currentItem, showFavNoti, navItem} = this.state;
    return (
      <div>
        <NavBar activeItem={navItem} updateNavItem={(item) => this.updateNavItem(item)}/>
        {currentItem && <CartModalPage item={currentItem} onClose={() => this.onCloseCartModal()}
                                       onCartUpdate={(quantity) => this.onCartUpdate(quantity)}/>}
        {showFavNoti && <FavModalPage onClose={() => this.onCloseFavNotiModal()}/>}
        <Route exact path='/' render={() => (
          <ShopComponent videos={videos}
                         onCartClick={(item) => this.onCartClick(item)}
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
