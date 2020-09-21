import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { CoffeesList } from "./Containers";
import { coffeeBillboard } from "./Reducer"
import thunk from "redux-thunk"

const store = createStore<any[], any, any, any>(coffeeBillboard, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <CoffeesList />
    </Provider>,
    document.getElementById("CoffeeList")
);
