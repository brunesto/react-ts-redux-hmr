import * as React from "react";

export interface HelloProps { compiler: string; framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello2 extends React.Component<HelloProps, undefined> {
    render() {
        console.log("Hello2:render() state:", this.state)
        return <h1>Hello 2 from {this.props.compiler} and {this.props.framework}! with HMR!</h1>;
    }
}