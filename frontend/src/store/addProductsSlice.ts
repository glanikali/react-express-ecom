import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddProductsErrorProps } from ".";

type initialStateProps = {
  addProducts: {
    loading: boolean;
    error: boolean;
    status: number | null;
  };
};

const initialState: initialStateProps = {
  addProducts: {
    loading: false,
    error: false,
    status: null,
  },
};

const addProductsSlice = createSlice({
  name: "http_loading_states",
  initialState,
  reducers: {
    addProductsLoadingState: (state, action: PayloadAction<boolean>) => {
      state.addProducts.loading = action.payload;
    },
    addProductsError: (state, action: PayloadAction<AddProductsErrorProps>) => {
      state.addProducts.error = action.payload.error;
      state.addProducts.status = action.payload.status;
      state.addProducts.loading = false;
    },
    addProducts: (state, action: PayloadAction<number>) => {
      state.addProducts.status = action.payload;
      state.addProducts.loading = false;
    },
  },
});

export default addProductsSlice.reducer;
export const addProductsActions = addProductsSlice.actions;
