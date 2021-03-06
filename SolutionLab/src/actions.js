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
const axios_1 = __importDefault(require("axios"));
exports.ADD_COFFEE = 'ADD_COFFEE';
exports.DELETE_COFFEE = 'DELETE_COFFEE';
exports.LOAD_COFFEES = 'LOAD_COFFEES';
exports.APICALL_FAIL = 'APICALL_FAIL';
exports.addCoffee = (dispatch, coffee) => __awaiter(this, void 0, void 0, function* () {
    try {
        const res = yield axios_1.default.post('http://localhost:52916/api/Coffee', coffee);
    }
    catch (e) {
        console.error(e.message);
        dispatch(exports.apiFail());
        return;
    }
});
exports.deleteCoffee = (dispatch, coffeeId) => __awaiter(this, void 0, void 0, function* () {
    try {
        const res = yield axios_1.default.delete('http://localhost:52916/api/Coffee/' + coffeeId);
    }
    catch (e) {
        console.error(e.message);
        dispatch(exports.apiFail());
        return;
    }
    dispatch(exports.deleteCoffeeDispatch(coffeeId));
});
exports.loadCoffees = (dispatch) => __awaiter(this, void 0, void 0, function* () {
    let coffees = [];
    try {
        const res = yield axios_1.default.get('http://localhost:52916/api/Coffee');
        coffees = res.data;
    }
    catch (e) {
        console.error(e.message);
        dispatch(exports.apiFail());
        return;
    }
    dispatch(exports.loadCoffeeDispatch(coffees));
});
exports.apiFail = () => {
    return { type: exports.APICALL_FAIL };
};
exports.addCoffeeDispatch = (coffee) => {
    return { type: exports.ADD_COFFEE, coffee };
};
exports.loadCoffeeDispatch = (coffees) => {
    return { type: exports.LOAD_COFFEES, coffees };
};
exports.deleteCoffeeDispatch = (coffeeId) => {
    return { type: exports.DELETE_COFFEE, coffeeId };
};
exports.loadCoffeesThunk = (dispatch) => {
    return () => exports.loadCoffees(dispatch);
};
exports.deleteCoffeeThunk = (dispatch, coffeeId) => {
    return () => exports.deleteCoffee(dispatch, coffeeId);
};
