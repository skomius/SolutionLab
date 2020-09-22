"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const ReactDOM = __importStar(require("react-dom"));
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
const Reducer_1 = require("./Reducer");
const redux_thunk_1 = __importDefault(require("redux-thunk"));
const app_1 = require("./app");
const store = redux_1.createStore(Reducer_1.rootReducer, redux_1.applyMiddleware(redux_thunk_1.default));
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(app_1.AppConnected, null)), document.getElementById("CoffeeList"));
