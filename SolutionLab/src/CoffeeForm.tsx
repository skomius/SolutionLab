import React from 'react'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import axios from 'axios';
import { connect } from 'react-redux';
import { apiFail, addCoffeeDispatch } from './actions';
import { element } from 'prop-types';

const required = (value: any) => value ? undefined : 'Required'
const number = (value: any) => value && isNaN(Number(value)) ? 'Not a number' : undefined

class RenderField extends React.Component<{ input: any, label: any, type: any, meta: { touched: any, error: any, warning: any } }, {}> {

    render() {

        const { input, label, type, meta } = this.props

        return (
            <div>
                <div>
                    <input {...input} placeholder={label} type={type} className="text-field"/>
                    {meta.touched && ((meta.error && <span className="error">{meta.error}</span>) || (meta.warning && <span>{meta.warning}</span>))}
                </div>
            </div>
        )
    }
}

class FormComponent extends React.Component<InjectedFormProps, any> {

    render() {

        const { handleSubmit, pristine, reset, submitting } = this.props

        return (

            <form onSubmit={handleSubmit}>
                <Field name="name" type="text" placeholder="First Name" component={RenderField} label="Name" validate={[required]}/>
                <Field name="price" type="text" placeholder="Price" component={RenderField} label="Price" validate={[required, number]}/>
                <Field name="picUrl" type="text" placeholder="PicUrl" component={RenderField} label="PicUrl" validate={[required]}/>
                <div className="container-form-buttons">
                    <button className="btn btn-default add-button" type="submit" disabled={pristine || submitting}>Add</button>
                </div>
            </form>
        )
    }
}

class Component extends React.Component<any, any> {

    handleSubmit = async (values: any) => {

        try {
            const res = await axios.post('http://localhost:52916/a/Coffee', values)
            var coffee = res.data;
        }
        catch (e) {
            console.error(e.message)
            this.props.dispatch(apiFail())
            return
        }

        this.props.dispatch(addCoffeeDispatch(coffee))
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit} />
        );
    }
}

export const Form = reduxForm({
    form: 'coffee'
})(FormComponent)


export const CoffeePage = connect(null, null)(Component)