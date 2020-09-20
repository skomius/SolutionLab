import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider} from "react-redux"
import {createStore} from "redux"
import { Clock } from "./component";
import { coffeeBillboard} from "./Reducer"

const store = createStore<any[], any, any, any>(coffeeBillboard);

ReactDOM.render(
    <Provider store={store}>
        <Clock />
    </Provider>,
    document.getElementById("clock")
);
