import * as React from "react";
import * as ReactDOM from "react-dom";
import {connect} from "react-redux"


export class Coffees extends React.Component<{ coffees: any[], onClick: any, loadData: any } , {}>{


    componentDidMount(){
        this.props.loadData()
    }

    render() {

        let arr = this.props.coffees
        let rows: any[] = []

        while (arr.length > 0) {
            var elements = arr.splice(0, 4)
            var row = []
            for (var element of elements){
                row.push(
                    <th>
                    <button onClick={this.props.onClick(element.id)}>Del</button>
                    <img src={element.picUrl}></img>
                    <p>{element.name}</p>
                    <p>{element.price}</p>
                    </th> 
                )
            }
            rows.push(<tr>
                {row}
            </tr>)
        }


        return (
            <div>
                <table>
                   {rows}
                </table>
            </div>
        )
    };
}
