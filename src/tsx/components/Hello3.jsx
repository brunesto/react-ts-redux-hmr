import * as React from "react";


export class Hello3 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {cnt: 0}
    }

    render() {
        console.log("Hello3:render() state:", this.state)
        return <h1>I am JSX hmr too
            <button onClick={() => this.setState({cnt: this.state.cnt + 1})}> {this.state.cnt}</button>
        </h1>;
    }
}