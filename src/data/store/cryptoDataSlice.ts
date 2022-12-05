import { createSlice } from '@reduxjs/toolkit';

export interface CryptoDataState {
  value: any[];
}

const initialState: CryptoDataState = {
  value: [],
};

export const cryptoDataSlice = createSlice({
  name: 'cryptoData',
  initialState,
  reducers: {
    addCryptoData: (state, action) => {
      if (state.value.filter((point) => (Object.keys(point)[1] == Object.keys(action.payload)[1])).length >= 50) {
        state.value.splice(state.value.findIndex((point) => (Object.keys(point)[1] == Object.keys(action.payload)[1])), 1);
      }

      state.value = [
        ...state.value,
        action.payload
      ];

      localStorage.setItem('cryptoData', JSON.stringify(state.value));
    },
    initCryptoData: (state) => {
      let pairs = JSON.parse(localStorage.getItem('pairs') ?? "[]");
      let cryptoData = JSON.parse(localStorage.getItem('cryptoData') ?? "[]");
      state.value = cryptoData.filter((point: any) => (pairs.includes(Object.keys(point)[1])))
      localStorage.setItem('cryptoData', JSON.stringify(state.value));
    },
  },
});

export const { addCryptoData, initCryptoData } = cryptoDataSlice.actions;
export const getCryptoData = (state: { cryptoData: CryptoDataState }) => state.cryptoData.value;
export default cryptoDataSlice.reducer;