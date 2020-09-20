import * as React from 'react'

export class Clock extends React.Component<{}, { date: Date; isToggleOn: boolean }>{

    private Timer: any = null;

    constructor(props: any) {
        super(props);
        this.state = {
            date: new Date(),
            isToggleOn: true
        }
    }

    componentDidMount() {
        this.Timer = setInterval(
            () => this.tick(), 1000
        )
    }

    handleClick = () => {
        this.setState({ isToggleOn: !this.state.isToggleOn })
    }


    componentWillUnmount() {
        clearInterval(this.Timer)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (<div>
            <h1>{this.state.date.toLocaleTimeString()}</h1>
        </div>
        )
    }
}