import axios from "axios"

export const ADD_COFFEE = 'ADD_COFFEE'
export const DELETE_COFFEE = 'DELETE_COFFE'

export const addCoffee = async (coffee: any) => {

    try {
        const res = await axios.post('http://jsonplaceholder.typicode.com/users', coffee)
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