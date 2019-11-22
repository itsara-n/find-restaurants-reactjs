import React, { PureComponent } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SCG from './SCG'

const styles = {
  logo: {
    color: '#ef2524',
    fontWeight: 'bold'
  },
  body: {
    paddingTop: 56
  }
}

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="https://www.scg.com" style={styles.logo}>SCG</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Restaurants</Nav.Link>
              <Nav.Link href="/math">Math</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav>
          </Navbar>
        </div>
        <div style={styles.body}>
          <SCG />
        </div>
        <div className="Footer">
          <p>Itsara Nulor</p>
        </div>
      </div>
    );
  }
}

export default App
