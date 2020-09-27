import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect, useStore } from "react-redux";
import { loadCoffeesThunk } from "./actions";
import { CoffeePage } from "./coffeeForm"
import { CoffeeBillboard } from "./coffeeBillBoard"
 

class Component extends React.Component<{ loadData: any, isFirstLoad: boolean }, {}> {

    componentDidMount() {
        if (this.props.isFirstLoad)
            this.props.loadData()
    }

    render() {
        return (
            <div className="container container-center">
                <div className="container container-form">
                    <CoffeePage />
                </div>
                <div className="container container-billboard">
                    <CoffeeBillboard />
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

export const App = connect(mapStateToProps, mapDispatchToProps)(Component)
