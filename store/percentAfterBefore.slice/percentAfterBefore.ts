import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import IPercentAfterBefore from './percentAfterBefore.inteface';

const initialState: IPercentAfterBefore = {
	after: 50,
	before: 50,
};

export const percentAfterBefore = createSlice({
	name: 'percentAfterBefore',
	initialState,
	reducers: {
		setPercents: (state, action: PayloadAction<number>) => {
			state.after = 100 - action.payload;
			state.before = action.payload;
		},
	},
});

export default percentAfterBefore.reducer;
export const percentAfterBeforeActions = percentAfterBefore.actions;
