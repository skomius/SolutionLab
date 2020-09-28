"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const redux_form_1 = require("redux-form");
const axios_1 = __importDefault(require("axios"));
const react_redux_1 = require("react-redux");
const actions_1 = require("./actions");
const required = (value) => value ? undefined : 'Required';
const number = (value) => value && isNaN(Number(value)) ? 'Not a number' : undefined;
class RenderField extends react_1.default.Component {
    render() {
        const { input, label, type, meta } = this.props;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("div", null,
                react_1.default.createElement("input", Object.assign({}, input, { placeholder: label, type: type, className: "text-field" })),
                meta.touched && ((meta.error && react_1.default.createElement("span", { className: "error" }, meta.error)) || (meta.warning && react_1.default.createElement("span", null, meta.warning))))));
    }
}
class FormComponent extends react_1.default.Component {
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (react_1.default.createElement("form", { onSubmit: handleSubmit },
            react_1.default.createElement(redux_form_1.Field, { name: "name", type: "text", placeholder: "First Name", component: RenderField, label: "Name", validate: [required] }),
            react_1.default.createElement(redux_form_1.Field, { name: "price", type: "text", placeholder: "Price", component: RenderField, label: "Price", validate: [required, number] }),
            react_1.default.createElement(redux_form_1.Field, { name: "picUrl", type: "text", placeholder: "PicUrl", component: RenderField, label: "PicUrl", validate: [required] }),
            react_1.default.createElement("div", { className: "container-form-buttons" },
                react_1.default.createElement("button", { className: "btn btn-default add-button", type: "submit", disabled: pristine || submitting }, "Add"))));
    }
}
class Component extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.handleSubmit = (values) => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield axios_1.default.post('http://localhost:52916/a/Coffee', values);
                var coffee = res.data;
            }
            catch (e) {
                console.error(e.message);
                this.props.dispatch(actions_1.apiFail());
                return;
            }
            this.props.dispatch(actions_1.addCoffeeDispatch(coffee));
        });
    }
    render() {
        return (react_1.default.createElement(exports.Form, { onSubmit: this.handleSubmit }));
    }
}
exports.Form = redux_form_1.reduxForm({
    form: 'coffee'
})(FormComponent);
exports.CoffeePage = react_redux_1.connect(null, null)(Component);
