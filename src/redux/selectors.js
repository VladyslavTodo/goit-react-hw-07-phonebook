import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filterReducer.filter;
export const selectContacts = state => state.contactsReducer.contacts;
export const selectIsLoading = state => state.contactsReducer.isLoading;
export const selectError = state => state.contactsReducer.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  }
);
