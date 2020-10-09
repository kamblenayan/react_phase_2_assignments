import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import { connect } from 'react-redux'
import AccountList from './AccountList'
import LineComp from './LineComp'

class CardComponent extends Component {
    render() {
        console.log("IN CARD")
        console.log(this.props)
        const key = this.props.cardContent
        let cardContent;
        if (key === 'graph') {

            //     cardContent = <Line d={this.props.graphData} />
            cardContent = <LineComp d={this.props.graphData} />

        }
        if (key === 'accounts') {
            cardContent = <AccountList />
        }
        return (
            <Card className="card" style={{ flex: 1 }}>

                <Card.Body>
                    {cardContent}
                </Card.Body>

            </Card>

        )
    }
}

const mapStateToProps = (state) => {

    return {
        accountsTableData: state.data['accounts'],
        graphData: state.graphData
    }

}

export default connect(mapStateToProps, null)(CardComponent)