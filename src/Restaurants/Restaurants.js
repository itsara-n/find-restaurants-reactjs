import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import './restaurants.css';
import { getList } from './actions'

class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.getList()
  }

  onFindRestaurants = () => {
    
  }

  render() {
    console.log(this.props.list);
    
    return (
      <div className="RestaurantsPage">
        <Card style={{ width: '100%' }}>
          <Card.Body>
            <Card.Title>Restaurants</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              All restaurants in Bangsue area.
            </Card.Subtitle>
            {/* <Button variant="success" onClick={this.onFindRestaurants}>Find restaurants</Button> */}
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
