import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider} from "react-redux"
import {createStore} from "redux"
import { CoffeesList } from "./Containers";
import { coffeeBillboard} from "./Reducer"

const store = createStore<any[], any, any, any>(coffeeBillboard);

ReactDOM.render(
    <Provider store={store}>
        <CoffeesList />
    </Provider>,
    document.getElementById("CoffeeList")
);
