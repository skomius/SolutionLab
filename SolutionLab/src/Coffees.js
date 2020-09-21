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
class Coffees extends React.Component {
    componentDidMount() {
        this.props.loadData();
    }
    render() {
        let arr = this.props.coffees;
        let rows = [];
        let row = [];
        console.log(arr);
        arr.reduce((previuos, current, index, array) => {
            if (previuos.length < 4) {
                previuos.push(React.createElement("div", { key: index, style: { display: "inline-block" } },
                    React.createElement("button", { onClick: () => this.props.onClick(current.id) }, "Del"),
                    React.createElement("img", { src: current.picUrl }),
                    React.createElement("p", null, current.name),
                    React.createElement("p", null, current.price)));
            }
            if (previuos.length == 4 || array.length == index + 1) {
                rows.push(React.createElement("div", { key: index }, previuos));
                return [];
            }
            return previuos;
        }, []);
        console.log(row);
        return (React.createElement("div", null, rows));
    }
}
exports.Coffees = Coffees;
