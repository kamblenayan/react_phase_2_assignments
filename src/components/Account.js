import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function Account(props) {
    let acc = props.accountInfo
    const url = "/myaccount"
    let accNum = acc['accountNumber']
    return (

        <Link to={`${url}/${accNum}`}>
            <p>Balance : {acc.balance}</p>
            <p>Type : {acc.type}</p>
            <p>Account number: {acc.accountNumber}</p>
        </Link>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {}
}


export default connect(null, mapDispatchToProps)(Account)