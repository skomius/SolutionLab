"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const actions_1 = require("./actions");
const component_1 = require("./component");
const mapStateToProps = (state) => {
    console.log(state);
    return {
        coffees: state
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(actions_1.loadCoffeesFunk(dispatch)),
        onClick: (coffeeId) => {
            dispatch(actions_1.deleteCoffee(coffeeId));
        }
    };
};
exports.CoffeesList = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(component_1.Coffees);
