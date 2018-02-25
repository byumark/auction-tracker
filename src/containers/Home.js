import React from 'react'
import { withSiteData } from 'react-static'
import { Router, Link, Redirect } from 'react-static'
//
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import logoImg from '../logo.png'

export default withSiteData((props) => (
  <div style={{ textAlign: 'center' }}>
    <h1>Auction Admin</h1>
    <br />
    <Button
      outline
      color="primary"
      onClick={() => props.history.push('/people-and-items')}
    >
      Enter People and Items
      </Button>
    <br />
    <br />
    <Button
      outline
      color="primary"
      onClick={() => props.history.push('/final-bids')}
    >
      Enter Final Bids
      </Button>
    <br />
    <br />
    <Button
      outline
      color="primary"
      onClick={() => props.history.push('/total-per-person')}
    >
      View Total per Person
      </Button>
  </div>
))
