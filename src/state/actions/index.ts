import { ActionType } from '../action-types'
import { User } from '../user'

export interface SaveUserAction {
    type: ActionType.SAVE_USER,
    payload: {
        name: string;
        email: string
    }
}

export type Action = 
    | SaveUserAction