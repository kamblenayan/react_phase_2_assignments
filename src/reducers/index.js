import { actions } from "../config/actionConstants";

var initialState = {
    data: {},
    payeesData: [],
    graphData: {}
}

const rootreducer = (state = initialState, action) => {

    if (action.type === actions.FETCH_DATA) {
        return Object.assign({}, state, action.data)
    }
    if (action.type === actions.INIT_SUMMARY_DATA) {
        return Object.assign({}, state, { data: action.payload })
    }

    if (action.type === actions.ADD_PAYEE) {
        return Object.assign({}, state, { data: action.payload })
    }
    if (action.type === actions.UPDATE_PAYEE) {
        return Object.assign({}, state, { data: action.payload })
    }
    if (action.type === actions.SET_GRAPH) {
        return Object.assign({}, state, { graphData: action.payload })
    }

    return state;
}

export default rootreducer