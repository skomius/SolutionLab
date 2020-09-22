import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux"
import { createStore, applyMiddleware, AnyAction, CombinedState, Reducer } from "redux"
import { rootReducer } from "./Reducer"
import thunk from "redux-thunk"
import { FormStateMap } from 'redux-form'
import { AppConnected } from "./app";

const store = createStore<any, any, {}, {}>(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <AppConnected />
    </Provider>,
    document.getElementById("CoffeeList")
);
