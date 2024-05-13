import { createSelector } from "@reduxjs/toolkit";

import { selectContacts } from "../contacts/selectors";

export const selectNameFilter = (state) => state.filters.name;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterValue) => {
    if (filterValue.length > 0) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    } else {
      return contacts;
    }
  }
);
