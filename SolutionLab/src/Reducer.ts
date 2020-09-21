import * as act from "./actions"

const initialState: any = { coffees: [], isFirstLoad: true} 
   

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
             return state.coffees.filter((coffee: any) => {
                coffee.id != action.id
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




