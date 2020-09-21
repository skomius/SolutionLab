import * as act from "./actions"

const initialState : any []  = [] 
   

export function coffeeBillboard(state = initialState, action: any) {
    console.log(action)
     switch (action.type){
         case act.ADD_COFFEE:
             return Object.assign({}, state, {
                 coffees:[
                     ...state,
                     action.coffee
                 ]
             })
         case act.DELETE_COFFEE:
             return state.filter((coffee: any) => {
                coffee.id != action.id
             })

         case act.LOAD_COFFEES:
             console.log("tes")
             return Object.assign({}, state, {
                coffees:[
                    ...state,
                    action.coffees
                ]
             })
         case act.LOAD_COFFEES_V:
             console.log("test")
             return Object.assign({}, state, {
                 coffees: [
                     ...state,
                     action.coffees
                 ]
             })
         default:
             console.log("test")
             return state;
     }
}




