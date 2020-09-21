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
        console.log(arr);
        var len = arr.length;
        while (len > 0) {
            var elements = arr.splice(0, 4);
            len = len - 4;
            console.log(elements);
            var row = [];
            for (var element of elements) {
                row.push(React.createElement("th", null,
                    React.createElement("button", { onClick: this.props.onClick(element.id) }, "Del"),
                    React.createElement("img", { src: element.picUrl }),
                    React.createElement("p", null, element.name),
                    React.createElement("p", null, element.price)));
            }
            rows.push(React.createElement("tr", null, row));
        }
        console.log(row);
        return (React.createElement("div", null,
            React.createElement("table", null, rows)));
    }
    ;
}
exports.Coffees = Coffees;
