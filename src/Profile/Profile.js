import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import './profile.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="ProfilePage">
        <Card style={{ width: '100%' }}>
          <Card.Body>
            <Card.Title>Profile</Card.Title>

          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Profile;