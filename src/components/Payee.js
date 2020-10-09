import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'

class Payee extends Component {

    render() {
        console.log("SINGLE PAYEE")
        let payee = this.props.info
        /**
         * account_number: 89047
amt: 78
from_acc: 908765
ifsc_code: "MJ57575"
name: "payee1"
nickname: "payee1nn"
         */

        return (

            <p>{payee.name}</p>
            // <Row>
            //     <Col md={5} style={{ "margin top": 10 }}>
            //         {
            //             <Row>
            //                 <Col md={2}> {payee.name}</Col>
            //             </Row>
            //         }
            //     </Col>

            // </Row >

        )
    }
}

export default Payee;