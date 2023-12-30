import { ActionType } from '../action-types'
import { SaveUserAction } from '../actions'

export const saveUser = (name: string, email: string): SaveUserAction  => {
    return {
        type: ActionType.SAVE_USER,
        payload: {
            name,
            email,
        }
    }
}
