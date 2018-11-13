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
    cartItems: {},
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
        this.onCartUpdate(this.state.videos[0], 10);
        this.onCartUpdate(this.state.videos[1], 10);
        this.onCartUpdate(this.state.videos[2], 10);
        this.onCartUpdate(this.state.videos[5], 5);
      }
    }).catch((e) => {
      console.log(e);
    })
  }

  onCartClick(item) {
    let currentItem = item.id in this.state.cartItems ? this.state.cartItems[item.id] : item;
    this.setState({currentItem: currentItem});
  }

  onCloseCartModal() {
    this.setState({currentItem: null});
  }


  onFavClick() {
    this.setState({showFavNoti: true});
  }

  onCloseFavNotiModal() {
    this.setState({showFavNoti: false});
  }

  onCartUpdate(item, quantity) {
    let cartItems = this.state.cartItems;
    let id = item.id;
    if (quantity === 0) {
      cartItems[id].quantity = 0;
      delete cartItems[item.id];
    } else {
      if (id in cartItems) {
        cartItems[id].quantity = quantity;
      } else {
        item.quantity = quantity;
        cartItems[item.id] = item;
      }
    }
    this.setState({cartItems: cartItems, currentItem: null});
  }

  updateNavItem(item) {
    this.setState({navItem: item});
  }

  render() {
    const {videos, cartItems, currentItem, showFavNoti, navItem} = this.state;
    return (
      <div>
        <NavBar activeItem={navItem} updateNavItem={(item) => this.updateNavItem(item)}/>
        {currentItem && <CartModalPage item={currentItem} onClose={() => this.onCloseCartModal()}
                                       onCartUpdate={(item, quantity) => this.onCartUpdate(item, quantity)}/>}
        {showFavNoti && <FavModalPage onClose={() => this.onCloseFavNotiModal()}/>}
        <Route exact path='/' render={() => (
          <ShopComponent videos={videos}
                         onCartClick={(item) => this.onCartClick(item)}
                         onFavClick={() => this.onFavClick()}/>
        )}/>
        <Route path='/cart' render={() => (
          <CartComponent items={cartItems}/>
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
