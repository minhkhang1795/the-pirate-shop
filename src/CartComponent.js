import React from 'react';
import { Container, Row} from 'mdbreact';
import VideoCard from "./VideoCard";


class CartComponent extends React.Component {

  render() {
    const videos = this.props;
    return (
      <Container>
        <section className="text-center my-5 py-5">
          <h2 className="h1-responsive font-weight-bold text-center my-3">Your Cart</h2>
          <Row>
            {videos && videos.constructor === Array && videos.map((video) =>
              <VideoCard key={video.id}
                         video={video}
                         onCartClick={(video) => this.onCartClick(video)}
                         onFavClick={() => this.onFavClick()}
              />
            )}
          </Row>
        </section>
      </Container>
    );
  }
}

export default CartComponent;