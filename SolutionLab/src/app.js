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
const actions_1 = require("./actions");
const coffeeForm_1 = require("./coffeeForm");
const coffeeBillBoard_1 = require("./coffeeBillBoard");
class Component extends React.Component {
    componentDidMount() {
        if (this.props.isFirstLoad)
            this.props.loadData();
    }
    render() {
        return (React.createElement("div", { className: "container container-center" },
            React.createElement("div", { className: "container container-form" },
                React.createElement(coffeeForm_1.CoffeePage, null)),
            React.createElement("div", { className: "container container-billboard" },
                React.createElement(coffeeBillBoard_1.CoffeeBillboard, null))));
    }
}
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
exports.App = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Component);
