import { CoffeeForm } from './CoffeeForm'
import * as React from "react";
import axios from 'axios';
import { connect } from 'react-redux';
import { apiFail, addCoffeeDispatch } from './actions';

class CoffeePage extends React.Component<any, any> {

    handleSubmit = async (values: any) => {

        try {
            const res = await axios.post('http://localhost:52916/api/Coffee', values)
            var coffee = res.data;
        }
        catch (e) {
            console.error(e.message)
            this.props.dispatch(apiFail())
        }

        this.props.dispatch(addCoffeeDispatch(coffee))
    }

    render() {
        return (
            <CoffeeForm onSubmit={this.handleSubmit} />
        );
    }
}

export const CoffeePageConnected = connect(null, null)(CoffeePage)
