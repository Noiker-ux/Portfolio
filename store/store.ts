import { configureStore } from '@reduxjs/toolkit';
import percentAfterBefore from './percentAfterBefore.slice/percentAfterBefore';

export const store = () => {
	return configureStore({
		reducer: {
			percentAfterBefore: percentAfterBefore,
		},
	});
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
