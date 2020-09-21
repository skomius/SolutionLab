import axios from "axios"

export const ADD_COFFEE = 'ADD_COFFEE'
export const DELETE_COFFEE = 'DELETE_COFFEE'
export const LOAD_COFFEES = 'LOAD_COFFEES'
export const APICALL_FAIL = 'APICALL_FAIL'

export const addCoffee = async (dispatch: any, coffee: any) => {
   
    try {
        const res = await axios.post('http://localhost:52916/api/', coffee)
    }
    catch (e) {
        console.error(e.message)
        dispatch(apiFail())
    }
}

export const deleteCoffee = async(dispatch: any, coffeeId: number) => {

    try {
        const res = await axios.delete('http://localhost:52916/api/Coffee/' + coffeeId)
    }
    catch (e) {
        console.error(e.message)
        dispatch(apiFail())
    }
}

export const apiFail = () => {
    return { type: APICALL_FAIL}
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
        dispatch(apiFail())
    }

    dispatch(loadCoffeeDispatch(coffees))
}

export const loadCoffeesThunk = (dispatch: any) => {
    return () => loadCoffees(dispatch)
} 

export const deleteCoffeeThunk = (dispatch: any, coffeeId: number) => {
    return () => deleteCoffee(dispatch, coffeeId)
}