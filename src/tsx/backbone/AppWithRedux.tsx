import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Store, createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import {Provider} from 'react-redux'
import {AppLayoutTest as AppLayout} from '../components/AppLayoutTest'
import {reducers} from '../redux/reducers'
import {AppLayoutTest} from '../components/AppLayoutTest'
//



// Tell Typescript that there is a global variable called module - see below
// Tell Typescript that there is a global variable called module - see below





    // if (process.env.NODE_ENV === 'production')
    //     store=createStore(appReducer, applyMiddleware(thunk))
    // else
    var store=null


    store=createStore(reducers, applyMiddleware(thunk, createLogger()))






export const appStore=store


export class AppWithRedux extends React.Component<any,any> {


    constructor(props){
        super(props)
        console.log("AppWithRedux:constructor()  aaaaaa  ")

    }


    render() {

        console.log("AppWithRedux:render()    ")

        return (
            <div>
                <Provider store={appStore}>
                    <AppLayout />

                </Provider>


            </div>

        )
    }

}