import * as act from "./actions"
import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'

const initialState: any = { coffees: [], isFirstLoad: true} 
   
export function coffeeBillboard(state = initialState, action: any) {
    console.log(action)
     switch (action.type){
         case act.ADD_COFFEE:
             return Object.assign({}, state, {
                 coffees:[
                     ...state.coffees,
                     action.coffee
                 ]
             })
         case act.DELETE_COFFEE:
             return Object.assign({}, state, {
                 coffees: state.coffees.filter((coffee: any) => 
                     coffee.id !== action.coffeeId
                 )
             })
         case act.LOAD_COFFEES:
             return Object.assign({}, state, {
                coffees:[
                    ...action.coffees
                ],
                isFirstLoad: false
             })
         default:
             return state;
     }
}

export const rootReducer = combineReducers({
    coffeeBillboard,
    form: formReducer
})






