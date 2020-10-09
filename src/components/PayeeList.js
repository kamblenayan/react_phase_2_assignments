import React, { Component } from 'react';
import { connect } from 'react-redux';
import Payee from './Payee';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deletePayee } from '../actions';


class PayeeList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            disableEdit: true,
            disableDelete: true,
            disableAdd: false,
            selectedPayee: {}
        }
    }

    removePayee = () => {

        this.props.deletePayee(this.state.selectedPayee);
        this.props.history.push('/payee')
        this.setState({
            disableAdd: false, disableEdit: true, disableDelete: true
        })

    }

    selectedPayee = (e) => {
        this.setState({
            disableAdd: true,
            disableEdit: false, disableDelete: false, selectedPayee: e
        })
        alert("you can edit or delete the selected payee")

    }
    render() {
        const listOfPayees = this.props.payeeList
        var disEdit = this.state.disableEdit
        var disDel = this.state.disableEdit
        var disAdd = this.state.disableAdd
        return (
            <div>
                <section>
                    <Row>
                        <Col md={5}><h3>Payees</h3></Col>
                        <Col md={1}><Link to="/addPayee"><Button variant="primary" disabled={disAdd}>Add</Button></Link></Col>
                        <Col md={1}><Button variant="primary" disabled={disEdit} onClick={() => {
                            this.props.history.push('/editPayee', this.state.selectedPayee)
                        }}>Edit</Button></Col>
                        <Col md={1}><Button variant="danger" disabled={disDel} onClick={this.removePayee}>Delete</Button></Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            {
                                listOfPayees.map(el => (
                                    <div key={el.account_number} onClick={() => {

                                        this.selectedPayee(el)

                                    }}>
                                        <Payee info={el}></Payee>
                                    </div>
                                ))
                            }</Col>
                    </Row>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        payeeList: state.data.payees,
        payeesData: state.payeesData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deletePayee: payee => dispatch(deletePayee(payee))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PayeeList)