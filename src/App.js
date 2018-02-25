import React from 'react'
import { Router, Link } from 'react-static'
//
import Routes from 'react-static-routes'
import { Container, Row, Col } from 'reactstrap';

import './app.css'

export default () => (

  <Router>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/people-and-items">People and Items</Link>
        <Link to="/final-bids">Final Bids</Link>
        <Link to="/total-per-person">Totals</Link>
      </nav>
      <Container>
        <div className="content">
          <Routes />
        </div>
      </Container>
    </div>
  </Router>
)
