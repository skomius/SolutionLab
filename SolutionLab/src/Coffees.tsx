import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect } from "react-redux";
import { deleteCoffeeThunk, loadCoffeesThunk } from "./actions";


export class Coffees extends React.Component<{ coffees: any[], onClick: any }, {}>{

    render() {

        let arr = this.props.coffees;
        let rows: any[] = [];
        let row: any[] = [];

        console.log(arr);

        arr.reduce((previuos, current, index, array) => {

            if (previuos.length < 4) {
                previuos.push(
                    <div key={index} style={{ display: "inline-block" }}>
                        <button onClick={() => this.props.onClick(current.id)}>Del</button>
                        <img src={current.picUrl}></img>
                        <p>{current.name}</p>
                        <p>{current.price}</p>
                    </div>
                )
            }

            if (previuos.length == 4 || array.length == index + 1) {
                rows.push(<div key={index}>
                    {previuos}
                </div>)

                return []
            }

            return previuos

        }, []);

        console.log(row);
        return (
            <div>
                {rows}
            </div>
        )
    }
}


const mapStateToProps = (state: any) => {
    return {
        coffees: state.coffees
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onClick: (coffeeId: number) => {
            dispatch(deleteCoffeeThunk(dispatch, coffeeId))
        }
    }
}


export const CoffeesList = connect(mapStateToProps, mapDispatchToProps)(Coffees) 
