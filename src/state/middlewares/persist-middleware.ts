import { Dispatch } from 'redux'
import { Action } from '../actions'
import { ActionType } from '../action-types'
import { RootState } from '../reducers'

export const persistMiddleWare = ({
    dispatch, 
    getState
 } : {
    dispatch: Dispatch<Action>;
    getState: () => RootState
 }) => {
    return (next: (action: Action) => void) => {
        return (action: Action) => {
            next(action)

            if ([ActionType.SAVE_USER].includes(action.type)) {
                // do action
            }
        }
    }
}