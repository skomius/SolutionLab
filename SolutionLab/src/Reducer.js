"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const act = __importStar(require("./actions"));
const redux_1 = require("redux");
const redux_form_1 = require("redux-form");
const initialState = { coffees: [], isFirstLoad: true };
function coffeeBillboard(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case act.ADD_COFFEE:
            return Object.assign({}, state, {
                coffees: [
                    ...state.coffees,
                    action.coffee
                ]
            });
        case act.DELETE_COFFEE:
            return Object.assign({}, state, {
                coffees: state.coffees.filter((coffee) => coffee.id !== action.coffeeId)
            });
        case act.LOAD_COFFEES:
            return Object.assign({}, state, {
                coffees: [
                    ...action.coffees
                ],
                isFirstLoad: false
            });
        default:
            return state;
    }
}
exports.coffeeBillboard = coffeeBillboard;
exports.rootReducer = redux_1.combineReducers({
    coffeeBillboard,
    form: redux_form_1.reducer
});
