"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const CoffeeForm_1 = require("./CoffeeForm");
const React = __importStar(require("react"));
const axios_1 = __importDefault(require("axios"));
const react_redux_1 = require("react-redux");
const actions_1 = require("./actions");
class CoffeePage extends React.Component {
    constructor() {
        super(...arguments);
        this.handleSubmit = (values) => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield axios_1.default.post('http://localhost:52916/api/Coffee', values);
                var coffee = res.data;
            }
            catch (e) {
                console.error(e.message);
                this.props.dispatch(actions_1.apiFail());
            }
            this.props.dispatch(actions_1.addCoffeeDispatch(coffee));
        });
    }
    render() {
        return (React.createElement(CoffeeForm_1.CoffeeForm, { onSubmit: this.handleSubmit }));
    }
}
exports.CoffeePageConnected = react_redux_1.connect(null, null)(CoffeePage);
