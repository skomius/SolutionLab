import * as React from "react";
import * as ReactDOM from "react-dom";
import {connect} from "react-redux"


export class Coffees extends React.Component<{ coffees: any[], onClick: any, loadData: any } , {}>{

    componentDidMount() {
        this.props.loadData();
    }

    render() {

        let arr = this.props.coffees;
        let rows: any[] = [];
        let row: any[] = [];

        console.log(arr);

        arr.reduce((previuos, current, index, array) => {

            if (previuos.length < 4) {
                previuos.push(
                    <th>
                        <button onClick={this.props.onClick(current.id)}>Del</button>
                        <img src={current.picUrl}></img>
                        <p>{current.name}</p>
                        <p>{current.price}</p>
                    </th>
                )
            }

            if (previuos.length == 4 || array.length == index + 1) {
                rows.push(<tr>
                    {previuos}
                </tr>)

                return []
            }

            return previuos

        }, []);

        console.log(row);
        return (
            <div>
                <table>
                   {rows}
                </table>
            </div>
        )
    }
}
