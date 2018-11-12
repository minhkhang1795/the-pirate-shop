import React from 'react';
import { Container, Row } from 'mdbreact';
import VideoCard from "./VideoCard";


class ShopComponent extends React.Component {

  render() {
    const { videos } = this.props;
    return (
      <Container>
        <section className="text-center my-5 py-5">
          <h2 className="h1-responsive font-weight-bold text-center my-3">The Pirate Shop</h2>
          <p className="grey-text text-center w-responsive mx-auto mb-3">Unlimited Edition for Star Wars fans</p>
          <Row>
            {videos && videos.constructor === Array && videos.map((video) =>
              <VideoCard key={video.id}
                         video={video}
                         onCartClick={() => this.props.onCartClick()}
                         onFavClick={() => this.props.onFavClick()}
              />
            )}
          </Row>
        </section>
      </Container>
    );
  }
}

export default ShopComponent;