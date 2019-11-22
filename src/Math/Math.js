import React, { PureComponent } from 'react';
import { Button, Card, Spinner, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './math.css';
import { getXYZ } from './actions'

class Math extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      answers: []
    }
  }

  onGetAnswers = () => {
    this.props.getXYZ()
  }

  renderError = () => {
    return (
      <div style={{ minHeight: 30, marginTop: 20 }}>
        <Alert variant="danger">
          {this.props.error}
        </Alert>
      </div>
    )
  }

  renderAnswer = () => {
    return (
      <div style={{ minHeight: 30, marginTop: 20 }}>
        {
          this.props.loading && <Spinner animation="border" variant="danger" />
        }
        {
          !this.props.loading && (
            <Card.Text>
              {`Answers : ${this.props.answer}`}
            </Card.Text>
          )
        }
      </div>
    )
  }

  render() {
    return (
      <div className="MathPage">
        <Card style={{ width: '100%' }}>
          <Card.Body>
            <Card.Title>Math</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              X, 5, 9, 15, 23, Y, Z
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Please create a new function for finding X, Y, Z value
            </Card.Subtitle>
            <Button variant="success" onClick={this.onGetAnswers}>Get X, Y Z</Button>
            {
              (this.props.error === null)
                ? this.renderAnswer()
                : this.renderError()
            }
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  answer: state.math.answer,
  loading: state.math.loading,
  error: state.math.error
})

const mapDispatchToProps = ({
  getXYZ,
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Math))
