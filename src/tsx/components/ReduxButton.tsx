import * as React from "react";
import {Provider, connect} from 'react-redux'
import {AppActions} from '../redux/Actions'




// ReduxButton maintains its state thru redux

export interface ReduxButtonProps {
    cnt:number
    increment():void
}

export class ReduxButton extends React.Component<ReduxButtonProps, undefined> {
    constructor(props) {
        super(props)

    }

    render() {
        console.log("render() state:", this.state)
        return <h1>I am a ReduxButton !!!
            <button onClick={()=>this.props.increment()}> {this.props.cnt}</button>
        </h1>;
    }
}



// --- redux


const mapStateToProps = (state) => {
    console.log("mapStateToProps ", state);
    return {
        cnt: state.cnt
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log("mapDispatchToProps ");
    return {
        increment: () => dispatch(AppActions.modify(1))

    }
}


export const ReduxButtonCC = connect(mapStateToProps, mapDispatchToProps)(ReduxButton)

