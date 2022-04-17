import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateProps = {
  value: number;
};

const initialState: initialStateProps = {
  value: 0,
};

const dummySlice = createSlice({
  name: "dummy_slice",
  initialState,
  reducers: {
    changeValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export default dummySlice.reducer;
export const dummySliceActions = dummySlice.actions;
