import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContactApi, deleteContactApi  } from './operations';

const contacts = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contacts,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContactApi.pending]: handlePending,
    [deleteContactApi.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContactApi.rejected]: handleRejected,
    [deleteContactApi.rejected]: handleRejected,

    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },

    [addContactApi.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },

    [deleteContactApi.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(contact => contact.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
