import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductState } from "../../types/types";
import { fetchProductData } from "../fetchData";
import { RootState } from "../store";


const initialState: ProductState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchData = createAsyncThunk("fetchData", async () => {
  const response = await fetchProductData();
  return response;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchData.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.status = "succeeded";
          state.items = action.payload;
        }
      )
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to load product";
      });
  },
});

export default productsSlice.reducer;

export const selectProductData = (state: RootState) => state.products.items;
