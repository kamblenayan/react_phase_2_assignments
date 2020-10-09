
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Comp2 from "./Comp2"
import Home from "./Home"
import Summary from "./Summary"
import Comp1 from "./Comp1"
import AccountDetails from "./AccountDetails"
import PayeeList from "./PayeeList"
import AddPayee from "./AddPayee"
import { fetchData } from "../actions"
import { connect } from 'react-redux'
import EditPayee from "./EditPayee"

class App extends Component {
  constructor(props) {
    super(props)

    this.props.fetchData()
  }

  render() {
    return (

      <Router>
        <Container>
          <Row>
            <Col sm={6} className="tabText"><Link to={'/summary'}>Summary</Link></Col>
            <Col sm={6} className="tabText"><Link to={'/payee'}>Payee</Link></Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Switch>
                <Route exact path="/editPayee" component={EditPayee} />
                <Route exact path="/myaccount/:id" component={AccountDetails} />
                <Route exact path='/summary' component={Summary} />
                <Route exact path='/payee' component={PayeeList} />
                <Route exact path='/addPayee' component={AddPayee}></Route>
                <Route exact path='/' component={Home} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>

    )
  }
}


const mapStateToProps = (state) => {
  return {
    payeeList: state.data.payees,
    payeesData: state.payeesData,
    graphData: state.graphData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

