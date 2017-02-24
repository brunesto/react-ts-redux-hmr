// Import React and React DOM
import * as React from 'react';
import {render} from 'react-dom';
// CAPTCHA since we are in a jsx file, tsx extension must be explicit
import {AppWithRedux,appStore} from './AppWithRedux';
import './HardConfig.js';
// Import the Hot Module Reloading App Container – more on why we use 'require' below
const {AppContainer} = require('react-hot-loader');

console.log("starting app WITH HMR")



// CAPTCHA all React components are proxied by React-hot

// https://github.com/gaearon/react-hot-loader/issues/462
delete AppContainer.prototype.unstable_handleError;


// console.log("compiled ",__TIMESTAMP__)


// Import our App container (which we will create in the next step)

//import {App} from './test/App';

// Tell Typescript that there is a global variable called module - see below
//declare const module: {hot: any}
declare const module: {hot: any}
// Get the root element from the HTML
const rootEl = document.getElementById('app');

// And render our App into it, inside the HMR App ontainer which handles the hot reloading
render(
    <AppContainer>
        {React.createElement(AppWithRedux as any )}
    </AppContainer>,
    rootEl
);


console.log("module.hot:",module.hot)

// Handle hot reloading requests from Webpack
if (module.hot) {
    function reload(){

        console.log("replacing appStore reducer")


        const nextRootReducer = require('../redux/reducers.tsx').reducers;
        appStore.replaceReducer(nextRootReducer);



        console.log("replacing AppWithRedux inside index")



        // If we receive a HMR request for our App container, then reload it using require (we can't do this dynamically with import)
        //const NextApp = require('./test/App').App;
        const NextApp = require('./AppWithRedux.tsx').AppWithRedux;

        // And render it into the root element again
        render(
            <AppContainer>
                {React.createElement(NextApp as any)}
            </AppContainer>,
            rootEl
        );
    }

    // CAPTCHA: if a module changes, it has to be changed in 2 spots in this file.  accept+require
    module.hot.accept('./AppWithRedux.tsx', () => {reload()})
    module.hot.accept('../redux/reducers.tsx', () => {reload()})
}