import * as React from 'react';
import {ReduxButtonCC} from "./ReduxButton"
import {Hello1} from "./Hello1"
import {Hello2} from "./Hello2"
import {Hello3} from "./Hello3.jsx"


export const AppLayoutTest= () =>
    <div>
        <div>Hello world!</div>
        <hr/>
        Plain components:
        <Hello1/>
        <Hello2 framework="react" compiler="typescript"/>
        <hr/>
        A Jsx component:
        {React.createElement(Hello3 as any )}
        <hr/>
        A Redux component:
        <ReduxButtonCC/>
        <hr/>
    </div>



