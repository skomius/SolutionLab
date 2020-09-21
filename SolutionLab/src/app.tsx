import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect, useStore } from "react-redux";
import { CoffeesList } from "./Coffees"
import { loadCoffeesThunk } from "./actions";


export class App extends React.Component<{ loadData: any, isFirstLoad: boolean }, {}> {

    componentDidMount() {
        if (this.props.isFirstLoad)
            this.props.loadData()
    }

    render() {
        return (
            <div>
                <CoffeesList />
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        isFirstLoad: state.isFirstLoad
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        loadData: () => dispatch(loadCoffeesThunk(dispatch))
    }
}

export const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App)
