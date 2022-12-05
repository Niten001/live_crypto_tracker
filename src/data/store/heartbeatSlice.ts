import { createSlice } from "@reduxjs/toolkit";

export interface HeartbeatState {
  value: boolean;
}

const initialState: HeartbeatState = {
  value: false,
};

export const heartbeatSlice = createSlice({
  name: "heartbeat",
  initialState,
  reducers: {
    startHeartbeat: (state) => {
      state.value = true;
    },
    stopHeartbeat: (state) => {
      state.value = false;
    },
  },
});

export const { startHeartbeat, stopHeartbeat } = heartbeatSlice.actions;
export const getHeartbeat = (state: { heartbeat: HeartbeatState }) =>
  state.heartbeat.value;
export default heartbeatSlice.reducer;
