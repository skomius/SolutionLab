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
class Coffees extends React.Component {
    render() {
        let arr = this.props.coffees;
        let rows = [];
        let row = [];
        arr.reduce((previuos, current, index, array) => {
            if (previuos.length < 4) {
                previuos.push(React.createElement("div", { key: index, className: "box" },
                    React.createElement("div", { style: { marginTop: "10px" } },
                        React.createElement("img", { className: "image", src: current.picUrl })),
                    React.createElement("p", null, current.name),
                    React.createElement("p", null,
                        current.price,
                        " \u20AC"),
                    React.createElement("div", null,
                        React.createElement("button", { className: "btn btn-default", onClick: () => this.props.onClick(current.id) }, "Remove"))));
            }
            if (previuos.length == 4 || array.length == index + 1) {
                rows.push(React.createElement("div", { key: index, className: "row" }, previuos));
                return [];
            }
            return previuos;
        }, []);
        return (React.createElement("div", null, rows));
    }
}
exports.Coffees = Coffees;
const mapStateToProps = (state) => {
    console.log(state);
    return {
        coffees: state.coffeeBillboard.coffees
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (coffeeId) => {
            dispatch(actions_1.deleteCoffeeThunk(dispatch, coffeeId));
        }
    };
};
exports.CoffeesList = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Coffees);
