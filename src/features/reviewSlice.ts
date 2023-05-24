import { createSlice } from "@reduxjs/toolkit";
import { InitialReviewState } from "../Types";

const initialState: InitialReviewState = {
  createdAt: null,
  genre: null,
  mainText: null,
  photoURL: null,
  titleName: null,
  uid: null,
};

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setReviewInfo: (state, action) => {
      state.createdAt = action.payload.createdAt;
      state.genre = action.payload.genre;
      state.mainText = action.payload.mainText;
      state.photoURL = action.payload.photoURL;
      state.titleName = action.payload.TitleName;
      state.uid = action.payload.uid;
    },
  },
});

export const { setReviewInfo } = reviewSlice.actions;
export default reviewSlice.reducer;
