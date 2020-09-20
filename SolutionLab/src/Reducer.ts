import * as act from "./actions"

const initialState : any []  = [] 
   

export function coffeeBillboard (state = initialState, action: any) {
     switch (action.Type){
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
         default:
             return state;
     }
}


