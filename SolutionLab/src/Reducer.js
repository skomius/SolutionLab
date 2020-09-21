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
const initialState = { coffees: [] };
function coffeeBillboard(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case act.ADD_COFFEE:
            return Object.assign({}, state, {
                coffees: [
                    ...state,
                    action.coffee
                ]
            });
        case act.DELETE_COFFEE:
            return state.coffees.filter((coffee) => {
                coffee.id != action.id;
            });
        case act.LOAD_COFFEES:
            console.log("tes");
            return Object.assign({}, state, {
                coffees: [
                    ...action.coffees
                ]
            });
        case act.LOAD_COFFEES_V:
            console.log("test");
            return Object.assign({}, state, {
                coffees: [
                    ...state,
                    action.coffees
                ]
            });
        default:
            console.log("test");
            return state;
    }
}
exports.coffeeBillboard = coffeeBillboard;
