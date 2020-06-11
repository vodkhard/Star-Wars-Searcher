import { createSlice } from "@reduxjs/toolkit";
import api from "../lib/api";

const name = "details";

const slice = createSlice({
  name,
  initialState: {
    details: [],
    loading: false,
  },
  reducers: {
    setDetails: (state, { payload }) => {
      state.details = payload;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

export const { setDetails, setLoading } = slice.actions;

export const getDetails = (state) => state[name].details;
export const isLoading = (state) => state[name].loading;

export const fetchDetails = (resource, id) => async (dispatch) => {
  dispatch(setLoading(true));
  api.get(`/details?uri=/${resource}/${id}`).then((res) => {
    if (res.status === 200) {
      dispatch(setDetails(res.data));
    }
    dispatch(setLoading(false));
  });
};

export default slice.reducer;
