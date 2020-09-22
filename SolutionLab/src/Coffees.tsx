import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect } from "react-redux";
import { deleteCoffeeThunk, loadCoffeesThunk } from "./actions";


export class Coffees extends React.Component<{ coffees: any[], onClick: any }, {}>{

    render() {
        let arr = this.props.coffees;
        let rows: any[] = [];
        let row: any[] = [];

        arr.reduce((previuos, current, index, array) => {

            if (previuos.length < 4) {
                previuos.push(
                    <div key={index} className="box">
                        <div style={{ marginTop:"10px"}}>
                            <img className="image" src={current.picUrl}></img>
                        </div>
                        <p>{current.name}</p>
                        <p>{current.price} &euro;</p>
                        <div>
                            <button className="btn btn-default" onClick={() => this.props.onClick(current.id)}>Remove</button>
                        </div>    
                    </div>
                )
            }

            if (previuos.length == 4 || array.length == index + 1) {
                rows.push(<div key={index} className="row">
                    {previuos}
                </div>)

                return []
            }

            return previuos

        }, []);

        return (
            <div>
                {rows}
            </div>
        )
    }
}


const mapStateToProps = (state: any) => {
    console.log(state)
    return {
        coffees: state.coffeeBillboard.coffees
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
