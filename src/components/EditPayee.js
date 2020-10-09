import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Row } from 'react-bootstrap';
import { connect } from 'react-redux'
import { editPayee } from '../actions';

function EditPayee(props) {
    const payee = props.location.state;
    const initialValues = {
        name: payee.name,
        account_number: payee.account_number,
        ifsc_code: payee.ifsc_code,
        nickname: payee.nickname,
        from_acc: payee.from_acc
    };


    function onSubmit(values) {
        // Do stuff here...
        console.log(values)
        props.editPayee(values)
        props.history.push('/payee')
    }
    const frm = <Form className="baseForm" noValidate>

        <label>Payee Name : </label>
        <Field
            type="text"
            id="name"
            name="name"
            disabled
        />
        <br />
        <label>Account Number : </label>
        <Field
            type='text' pattern="[0-9.]+"
            id="account_number"
            name="account_number"
        /><br />
        <label>IFSC Code : </label>
        <Field
            type="text"
            id="ifsc_code"
            name="ifsc_code"
        /><br />
        <label>Nickname : </label>
        <Field
            type="text"
            id="nickname"
            name="nickname"
        /><br />
        <label>From Account</label>
        <Field
            pattern="[0-9.]+"
            type="text"
            id="from_acc"
            name="from_acc"
        />
        <br />

        <Button type='submit'> Update</Button>
    </Form>
    return (
        <Formik {...{ initialValues, onSubmit }}>
            {() => (
                frm
            )}
        </Formik>
    )
}
/**
 *   name: "",
        account_number: '',
        ifsc_code: "",
        nickname: "",
        from_acc: ''
 */

const mapStateToProps = (state) => {
    return {
        //set newly added  payee
    }
}

const mapDisPatchToProps = (dispatch) => {
    return {
        editPayee: payee => { dispatch(editPayee(payee)) }
    }
}

export default connect(mapStateToProps, mapDisPatchToProps)(EditPayee)

