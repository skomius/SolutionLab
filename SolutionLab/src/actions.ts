import axios from "axios"

export const ADD_COFFEE = 'ADD_COFFEE'
export const DELETE_COFFEE = 'DELETE_COFFEE'
export const LOAD_COFFEES = 'LOAD_COFFEES'
export const LOAD_COFFEES_V = 'LOAD_COFFEES_V'

export const addCoffee = async (coffee: any) => {
   
    try {
        const res = await axios.post('http://localhost:52916/api/', coffee)
    }
    catch (e) {
        console.error(e.message)
        return
    }

    return { type: ADD_COFFEE, coffee }
}

export const deleteCoffee = async(dispatch: any, coffeeId: string) => {

    try {
        const res = await axios.post('http://jsonplaceholder.typicode.com/users', coffeeId)
    }
    catch (e) {
        console.error(e.message)
        return
    }

    dispatch(deleteCoffeeDispatch(coffeeId))
}

export const loadCoffeeDispatch = (coffees: any[]) => {
    return { type: LOAD_COFFEES, coffees }
}

export const deleteCoffeeDispatch = (coffeeId: string) => {
    return { type: DELETE_COFFEE, coffeeId }
} 

export const loadCoffees = async (dispatch: any) => {

    let coffees: any[] = []
    
    try {
        const res = await axios.get('http://localhost:52916/api/Coffee')
        coffees = res.data;
    }
    catch (e) {
        console.error(e.message)
        return
    }

    dispatch(loadCoffeeDispatch(coffees))

    return { type: LOAD_COFFEES, coffees }
}

export const loadCoffeesthunk = (dispatch: any) => {
    return () => loadCoffees(dispatch)
} 

export const deleteCoffeesthunk = (dispatch: any) => {
    return () => loadCoffees(dispatch)
}