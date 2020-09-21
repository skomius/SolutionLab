import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { coffeeBillboard } from "./Reducer"
import thunk from "redux-thunk"
import { AppConnected } from "./app";

const store = createStore<any[], any, any, any>(coffeeBillboard, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <AppConnected />
    </Provider>,
    document.getElementById("CoffeeList")
);
