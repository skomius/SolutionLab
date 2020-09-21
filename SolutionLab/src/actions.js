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
exports.LOAD_COFFEES_V = 'LOAD_COFFEES_V';
exports.addCoffee = (coffee) => __awaiter(this, void 0, void 0, function* () {
    try {
        const res = yield axios_1.default.post('http://localhost:52916/api/', coffee);
    }
    catch (e) {
        console.error(e.message);
        return;
    }
    return { type: exports.ADD_COFFEE, coffee };
});
exports.deleteCoffee = (coffeeId) => __awaiter(this, void 0, void 0, function* () {
    try {
        const res = yield axios_1.default.post('http://jsonplaceholder.typicode.com/users', coffeeId);
    }
    catch (e) {
        console.error(e.message);
        return;
    }
    return { type: exports.DELETE_COFFEE, coffeeId };
});
exports.loadCoffeeV = (coffees) => {
    return { type: exports.LOAD_COFFEES, coffees };
};
exports.loadCoffees = (dispatch) => __awaiter(this, void 0, void 0, function* () {
    let coffees = [];
    try {
        const res = yield axios_1.default.get('http://localhost:52916/api/Coffee');
        coffees = res.data;
    }
    catch (e) {
        console.error(e.message);
        return;
    }
    dispatch(exports.loadCoffeeV(coffees));
    return { type: exports.LOAD_COFFEES, coffees };
});
exports.loadCoffeesFunk = (dispatch) => {
    return () => exports.loadCoffees(dispatch);
};
