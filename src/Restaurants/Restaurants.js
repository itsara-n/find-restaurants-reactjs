import React, { PureComponent } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { FaDollarSign, FaStar } from "react-icons/fa";
import './restaurants.css';
import { getList } from './actions'

class Restaurants extends PureComponent {
  componentDidMount() {
    this.props.getList()
  }

  renderLoading = () => {
    return (
      <div className="Loading">
        <Spinner animation="border" variant="danger" />
      </div>
    )
  }

  renderRestaurant = (data) => {
    const { id, name, formatted_address, opening_hours, price_level, rating } = data

    let openStatus = 'N/A'
    if (opening_hours) {
      openStatus = opening_hours.open_now ? 'OPEN' : 'CLOSE'
    }

    let PriceRate = 'N/A'
    if (typeof price_level === 'number' && price_level !== 0) {
      PriceRate = []
      for (let i = 0; i < price_level; i++) {
        PriceRate.push(<FaDollarSign key={i} />)
      }
    }

    let Rating = 'N/A'
    if (typeof rating === 'number' && rating !== 0) {
      Rating = []
      for (let i = 0; i < rating; i++) {
        Rating.push(<FaStar key={i} />)
      }
    }

    return (
      <div key={id} className="RenderRestaurant">
        <div style={{ padding: 20 }}>
          <p id="restaurantName">{name}</p>
          <p>{formatted_address}</p>
          <p>Price: <span id="restaurantPrice">{PriceRate}</span></p>
          <p>Rating: <span id="restaurantRating">{Rating}</span></p>
          <p>Status: <span id="restaurantOpen">{openStatus}</span></p>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="RestaurantsPage">
        {this.props.loading && this.renderLoading()}
        <Card style={{ width: '200%' }}>
          <Card.Body>
            <Card.Title style={{ fontSize: 28, fontWeight: 'bold' }}>Restaurants</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              All restaurants in Bangsue area.
            </Card.Subtitle>
            {this.props.list.map((item, index) => this.renderRestaurant(item))}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.restaurants.list,
  loading: state.restaurants.loading,
  error: state.restaurants.error
})

const mapDispatchToProps = ({
  getList,
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Restaurants))
