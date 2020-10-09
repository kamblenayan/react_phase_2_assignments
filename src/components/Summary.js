import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import CardComponent from './CardComponent'
import { fetchData } from '../actions'
import { connect } from 'react-redux'

class Summary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cardContent: ''

        }
        // this.props.fetchData()
    }


    render() {
        const cardContent = this.state.cardContent
        return (
            <CardGroup style={{ display: 'flex', flexDirection: 'row' }}>
                <CardComponent cardContent={'graph'} />
                <CardComponent cardContent={'accounts'} />
            </CardGroup>
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
        //      fetchData: () => dispatch(fetchData())
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Summary)