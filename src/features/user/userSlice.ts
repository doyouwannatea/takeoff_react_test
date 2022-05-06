import { createSlice } from '@reduxjs/toolkit';
import { contactApi } from '../../api/contactApi';
import { Contact } from '../../models/Contact';
import { User } from '../../models/User';

type State = {
  data?: User;
  contacts?: Contact[];
};

const initialState: State = {
  data: undefined,
  contacts: undefined,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = initialState.data;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      contactApi.endpoints.auth.matchFulfilled,
      (state, action) => {
        state.data = action.payload;
      },
    );
    builder.addMatcher(
      contactApi.endpoints.getAllContacts.matchFulfilled,
      (state, action) => {
        state.contacts = action.payload;
      },
    );
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
