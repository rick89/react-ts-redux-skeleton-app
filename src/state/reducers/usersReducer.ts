import { produce } from 'immer';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { User } from '../user';

interface UsersState {
	loading: boolean;
	data: User[];
}

const initialState: UsersState = {
	loading: false,
	data: [],
};

const reducer = produce(
	(state: UsersState = initialState, action: Action): UsersState => {
		switch (action.type) {
			case ActionType.SAVE_USER:
				state.data = [...state.data, action.payload];
				return state;
			default:
				return state;
		}
	},
	initialState
);

export default reducer;
