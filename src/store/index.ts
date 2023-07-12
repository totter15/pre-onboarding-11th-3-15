import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import issueSlice from './issueSlice';

const store = configureStore({
  reducer: {
    issue: issueSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export default store;
