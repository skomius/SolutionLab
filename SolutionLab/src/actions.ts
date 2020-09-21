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

export const deleteCoffee = async (coffeeId: string) => {

    try {
        const res = await axios.post('http://jsonplaceholder.typicode.com/users', coffeeId)
    }
    catch (e) {
        console.error(e.message)
        return
    }

    return { type: DELETE_COFFEE, coffeeId }
}

export const loadCoffeeV = (coffees: any[]) => {
    return { type: LOAD_COFFEES, coffees }
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

    dispatch(loadCoffeeV(coffees))

    return { type: LOAD_COFFEES, coffees }
}

export const loadCoffeesFunk = (dispatch: any) => {
    return () => loadCoffees(dispatch)
} 