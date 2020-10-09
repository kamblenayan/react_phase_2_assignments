import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as _ from "lodash";
import { Table } from 'react-bootstrap';

class AccountDetails extends Component {
    render() {
        let acc = this.props.account;
        let tran;
        if (acc.transactions && acc.transactions.length > 0) {
            tran = <section>
                <h3>Transactions</h3>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Id</th>
                            <th>Type</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            acc.transactions.map((element) => (

                                < tr key={element.id}>
                                    <td>{new Date(element.date).toDateString()}</td>
                                    <td>{element.id}</td>
                                    <td>{element.type}</td>
                                    <td>{element.amount}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>

            </section>
        } else {
            tran = <h3>No Transactions yet</h3>
        }
        return (
            <div key={acc.accountNumber}>
                <section>
                    <h5> Account Number : {acc.accountNumber}</h5>
                    <h5> Balance: {acc.balance}</h5>
                    <h5> Type : {acc.type}</h5>
                </section>

                {tran}
            </div >
        )
    }
}

function mapStateToProps(state, ownProps) {

    var ac
    const num = ownProps.match.params.id
    console.log(num)
    if (state.data && state.data.accounts) {
        var array = state.data.accounts
        console.log(1) //
        console.log(state.data.accounts)
        ac = _.find(array, function (e) { return e.accountNumber === parseInt(num) })

    }
    //const account = state.data.accounts.find((el) => el.accountNumber === accountNumber)
    console.log("HEY")
    console.log(ownProps)
    console.log(state)
    console.log(ac)
    return {
        account: ac
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetails)