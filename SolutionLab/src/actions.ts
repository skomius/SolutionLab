import axios from "axios"

export const ADD_COFFEE = 'ADD_COFFEE'
export const DELETE_COFFEE = 'DELETE_COFFEE'
export const LOAD_COFFEES = 'LOAD_COFFEES'

export const addCoffee = async (coffee: any) => {

    try {
        const res = await axios.post('http://jsonplaceholder.typicode.com/users', coffee)
    }
    catch (e: any) {
        console.error(e.message)
        return
    }

    return { type: ADD_COFFEE, coffee }
}

export const deleteCoffee = async (coffeeId: string) => {

    try {
        const res = await axios.post('http://jsonplaceholder.typicode.com/users', coffeeId)
    }
    catch (e: any) {
        console.error(e.message)
        return
    }

    return { type: DELETE_COFFEE, coffeeId }
}

export const loadCoffees = async () =>{

    let coffees: any[] = []
    
    try {
        const res = await axios.post('http://jsonplaceholder.typicode.com/users')
        coffees = res.data;
    }
    catch (e: any) {
        console.error(e.message)
        return
    }

    return { type: LOAD_COFFEES, coffees }
}