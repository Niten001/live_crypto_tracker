import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';

import cryptoDataReducer from './cryptoDataSlice';
import heartbeatReducer from './heartbeatSlice';

export const store = configureStore({
  reducer: {
    cryptoData: cryptoDataReducer,
    heartbeat: heartbeatReducer,
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