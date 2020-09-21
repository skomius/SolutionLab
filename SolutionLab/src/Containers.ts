import { connect } from 'react-redux'
import {deleteCoffee, loadCoffeesFunk} from "./actions"
import { Coffees } from './component'

const mapStateToProps = (state: any) => {
    console.log(state)
    return {
        coffees: state.coffees
    }
}

const mapDispatchToProps = (dispatch: any) =>{
    return {
        loadData: () => dispatch(loadCoffeesFunk(dispatch)),               
        onClick: (coffeeId: string) => {
            dispatch(deleteCoffee(coffeeId))
        }
    }
}


export const CoffeesList = connect(mapStateToProps, mapDispatchToProps)(Coffees) 