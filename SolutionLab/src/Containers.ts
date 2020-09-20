import { connect } from 'react-redux'
import {deleteCoffee, loadCoffees} from "./actions"
import { Coffees } from './component'

const mapStateToProps = (state: any[]) => {
    return {
        coffees: state
    }
}

const mapDispatchToProps = (dispatch: any) =>{
    return {
        loadData: () => dispatch(loadCoffees()),               
        onClick: (coffeeId: string) => {
            dispatch(deleteCoffee(coffeeId))
        }
    }
}


export const CoffeesList = connect(mapStateToProps, mapDispatchToProps)(Coffees) 