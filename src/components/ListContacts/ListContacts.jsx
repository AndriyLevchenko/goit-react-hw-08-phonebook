import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsApi';
import { selectContacts, selectFilter } from "redux/contacts/selectors";
import css from 'components/ListContacts/ListContacts.module.css';

export const ListContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>{filteredContacts.map(({ id, name, phone }) => (
      <li key={id} className={css.titleName}>
      <p className={css.name}>: {name}: {phone}</p>
      <button 
      className={css.button} 
      type="button"
      onClick={() => dispatch(deleteContact((id)))}
      >Delete</button>
      </li>)
    )}</ul>
  )
}

