import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';

import cryptoDataReducer from './cryptoDataSlice';

export const store = configureStore({
  reducer: {
    cryptoData: cryptoDataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;