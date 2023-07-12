import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PER_PAGE, getIssueList } from '../apis/issue';
import { IssueListType } from '../interfaces/issueType';

interface State {
  loading: boolean;
  list: IssueListType;
}
const initialState: State = { list: [], loading: false };

export const getList = createAsyncThunk('issue/GET_ISSUE', async (index: number = 1) => {
  const data = await getIssueList(index);
  return data;
});

const ads = (id: number) => ({
  id,
  type: 'ads',
  url: 'https://www.wanted.co.kr/',
  img: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100',
});

const issueSlice = createSlice({
  name: 'issue',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getList.fulfilled, (state, action) => {
      const adsIndex = Array(PER_PAGE / 4).fill(0);
      let newAddedList: IssueListType = action.payload;
      adsIndex.forEach((_, index) => newAddedList.splice((index + 1) * 4 + index, 0, ads(index)));

      state.list = [...state.list, ...action.payload];
      state.loading = false;
    });
  },
});

export default issueSlice;
