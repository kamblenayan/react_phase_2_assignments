import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { showIndividualAccount } from '../actions'
import { Redirect, Link } from 'react-router-dom';
import Account from './Account';


class AccountList extends Component {
    showAccountDetails = (event) => {
        alert("INN")
        event.persist();
        console.log(event)
        //show transactions
        //key is individual account number
        //   this.props.showIndividualAccount(event.target.value)
    }
    render() {
        console.log("IN ACCOUNT LIST")

        const accounts = this.props.accountsTableData

        return (
            <div>
                {

                    accounts.map((acc) => (
                        <Account key={acc.accountNumber} accountInfo={acc} />

                        // <div onClick={this.showAccountDetails} style={{ cursor: 'pointer' }} key={acc.accountNumber} id={acc.type} >
                        //     {/* <Account detail={acc} /> */}
                        //     <p>Type : {acc.type}</p>
                        //     <p>Balance : {acc.balance}</p>
                        //     <p>Account number: {acc.accountNumber}</p>
                        // </div>

                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        accountsTableData: state.data['accounts'],
        graphData: state.graphData
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        //  showIndividualAccount: accNo => dispatch(showIndividualAccount(accNo))
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(AccountList)