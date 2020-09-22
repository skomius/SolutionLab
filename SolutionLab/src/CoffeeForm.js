"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const redux_form_1 = require("redux-form");
class Form extends react_1.default.Component {
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (react_1.default.createElement("form", { onSubmit: handleSubmit },
            react_1.default.createElement("div", null,
                react_1.default.createElement("label", null, "Name"),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(redux_form_1.Field, { name: "name", component: "input", type: "text", placeholder: "First Name" }))),
            react_1.default.createElement("div", null,
                react_1.default.createElement("label", null, "Price"),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(redux_form_1.Field, { name: "price", component: "input", type: "text", placeholder: "Price" }))),
            react_1.default.createElement("div", null,
                react_1.default.createElement("label", null, "PicUrl"),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(redux_form_1.Field, { name: "picUrl", component: "input", type: "text", placeholder: "PicUrl" }))),
            react_1.default.createElement("div", { className: "container-form-buttons" },
                react_1.default.createElement("button", { className: "btn btn-default add-button", type: "submit", disabled: pristine || submitting }, "Add"))));
    }
}
exports.CoffeeForm = redux_form_1.reduxForm({
    form: 'coffee'
})(Form);
