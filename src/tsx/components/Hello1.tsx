import * as React from "react";


interface HelloState { cnt: number
}

// 'HelloProps' describes the shape of props.

export class Hello1 extends React.Component<undefined, HelloState> {
    constructor(props) {
        super(props)
        this.state = {cnt: 0}
    }

    render() {
        console.log("Hello1:render() state:", this.state)
        return <h1>Hello 122a
            <button onClick={()=>this.setState({cnt:this.state.cnt+1})}> {this.state.cnt}</button>
        </h1>;
    }
}