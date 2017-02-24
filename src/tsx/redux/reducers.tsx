import { assign } from 'lodash'

import {MODIFY,AppActions} from './Actions'



const initialAppState={cnt:0}


export const reducers = (state:any = initialAppState, action) => {
    var factor=2;
    console.log("appReducer called action:", action, " state:", state, " factor:",factor)
    switch (action.type) {
        case MODIFY:
            return { ...state, cnt: state.cnt+action.delta *factor}
        default:
            return state
    }
}

export default reducers