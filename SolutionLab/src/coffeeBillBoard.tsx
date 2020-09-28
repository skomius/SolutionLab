import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect } from "react-redux";
import { deleteCoffeeThunk, loadCoffeesThunk } from "./actions";


class Component extends React.Component<{ coffees: any[], onClick: any }, {}>{

    render() {
        let arr = this.props.coffees;
        let rows: any[] = [];

        arr.reduce((row, current, index, array) => {

            if (row.length < 4) {
                row.push(
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

            if (row.length == 4 || array.length == index + 1) {
                rows.push(<div key={index} className="row">
                    {row}
                </div>)

                return []
            }

            return row

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


export const CoffeeBillboard = connect(mapStateToProps, mapDispatchToProps)(Component) 
