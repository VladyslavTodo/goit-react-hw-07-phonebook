import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/operations';

import Loader from 'components/Loader/Loader';

import { Button, ErrorMessage } from './ContactsItem.styled';

const ContactItem = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {isLoading && <Loader />}

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}:{contact.phone}
          <Button
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default ContactItem;
