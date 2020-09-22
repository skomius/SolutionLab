"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const redux_form_1 = require("redux-form");
const required = (value) => value ? undefined : 'Required';
const number = (value) => value && isNaN(Number(value)) ? 'Not a number' : undefined;
class RenderField extends react_1.default.Component {
    render() {
        const { input, label, type, meta } = this.props;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("label", null, label),
            react_1.default.createElement("div", null,
                react_1.default.createElement("input", Object.assign({}, input, { placeholder: label, type: type, className: "text-field" })),
                meta.touched && ((meta.error && react_1.default.createElement("span", { className: "error" }, meta.error)) || (meta.warning && react_1.default.createElement("span", null, meta.warning))))));
    }
}
class Form extends react_1.default.Component {
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
exports.CoffeeForm = redux_form_1.reduxForm({
    form: 'coffee'
})(Form);
