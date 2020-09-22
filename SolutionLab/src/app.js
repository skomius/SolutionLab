"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const Coffees_1 = require("./Coffees");
const actions_1 = require("./actions");
const coffeePage_1 = require("./coffeePage");
class App extends React.Component {
    componentDidMount() {
        if (this.props.isFirstLoad)
            this.props.loadData();
    }
    render() {
        return (React.createElement("div", { className: "container container-center" },
            React.createElement("div", { className: "container container-form" },
                React.createElement(coffeePage_1.CoffeePageConnected, null)),
            React.createElement("div", { className: "container container-billboard" },
                React.createElement(Coffees_1.CoffeesList, null))));
    }
}
exports.App = App;
const mapStateToProps = (state) => {
    return {
        isFirstLoad: state.coffeeBillboard.isFirstLoad
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(actions_1.loadCoffeesThunk(dispatch))
    };
};
exports.AppConnected = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(App);
