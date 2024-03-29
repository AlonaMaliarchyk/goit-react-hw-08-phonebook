import { createSelector } from "@reduxjs/toolkit";
export const selectContacts = state => state.contacts.list;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectFilterContact = state => state.filter;
export const selectContacts2 = ({ contacts }) => contacts.list;


export const selectFilteredContacts = createSelector(
    [selectContacts2, selectFilterContact], (contacts, filter)=> {
    if (!filter) {
      return contacts;
    }

      return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    }
);
