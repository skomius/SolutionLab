import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect, useStore } from "react-redux";
import { CoffeesList } from "./Coffees"
import { loadCoffeesThunk } from "./actions";
import { CoffeePageConnected } from "./coffeePage"


export class App extends React.Component<{ loadData: any, isFirstLoad: boolean }, {}> {

    componentDidMount() {
        if (this.props.isFirstLoad)
            this.props.loadData()
    }

    render() {
        return (
            <div className="container container-center">
                <div className="container container-form">
                    <CoffeePageConnected />
                </div>
                <div className="container container-billboard">
                    <CoffeesList />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        isFirstLoad: state.coffeeBillboard.isFirstLoad
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        loadData: () => dispatch(loadCoffeesThunk(dispatch))
    }
}

export const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App)
