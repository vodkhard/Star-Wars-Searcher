import { createSlice } from "@reduxjs/toolkit";
import api from "../lib/api";

const name = "search";

const slice = createSlice({
  name,
  initialState: {
    results: [],
    loading: false,
  },
  reducers: {
    setResults: (state, { payload }) => {
      state.results = payload;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

export const { setResults, setLoading } = slice.actions;

export const getResults = (state) => state[name].results;
export const isLoading = (state) => state[name].loading;

export const fetchResults = (query) => async (dispatch) => {
  dispatch(setLoading(true));
  api.get(`/search?q=${query}`).then((res) => {
    if (res.status === 200) {
      dispatch(setResults(res.data));
    }
    dispatch(setLoading(false));
  });
};

export default slice.reducer;
