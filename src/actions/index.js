import data from './../dummyData/data.json'
import { actions } from '../config/actionConstants'
import * as _ from 'lodash';

export function fetchData() {
    return (dispatch) => {
        //dispatch action to set state
        console.log(data)
        let gData = getGraphData(data)
        dispatch({ type: actions.INIT_SUMMARY_DATA, payload: data })
        dispatch({ type: actions.SET_GRAPH, payload: gData })
    }
}

export function addPayee(data) {

    return (dispatch, getState) => {
        //add newly added payee to existing array
        //dispatch action to set state
        console.log(getState())
        const currentData = getState()
        let cstate = currentData.data
        cstate.payees.push(data)
        dispatch({ type: actions.ADD_PAYEE, payload: cstate })

    }
}

export function editPayee(data) {
    return function (dispatch, getState) {
        //dispatch action to update state in reducer
        const currentData = getState()
        let cstate = currentData.data
        let payees = cstate.payees
        let index = _.findIndex(payees, { 'name': data.name });
        let obj = payees[index]
        payees.splice(index, 1, data)
        cstate.payees = payees;
        dispatch({ type: "UPDATE_PAYEE", payload: cstate })
    }
}

export function deletePayee(data) {
    return function (dispatch, getState) {
        const currentData = getState()
        let cstate = currentData.data
        let payees = cstate.payees
        let index = _.findIndex(payees, { 'name': data.name });
        if (index > -1) {
            let obj = payees[index]
            payees.splice(index, 1)
            cstate.payees = payees;
            dispatch({ type: "DELETE_PAYEE", payload: cstate })
        }
    }
}

const getGraphData = (info) => {
    debugger
    let data = info
    let arr = []
    let debit_transactions = []
    if (data.accounts && data.accounts.length > 0) {
        data.accounts.forEach(acc => {
            if (acc.transactions && acc.transactions.length > 0) {
                debit_transactions = acc.transactions.filter(el => el.type === "debit")
                for (let e of debit_transactions) {
                    let obj = {}
                    obj.date = new Date(e.date)
                    obj.amount = parseInt(e.amount)
                    obj.day = new Date(e.date).getDate()
                    arr.push(obj)
                }
            }
        })
    }
    arr.sort(function compare(a, b) {
        var dateA = new Date(a.date);
        var dateB = new Date(b.date);
        return dateA - dateB;
    });

    return arr
}