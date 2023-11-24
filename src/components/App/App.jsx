import ContacsForm from 'components/ContactForm/ContactsForm';
import ContactItem from 'components/ContactsItem/ContactsItem';
import Filter from 'components/Filter/Filter';

import { Base } from './App.styled';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <Base>
      <h2>Phonebook</h2>
      <ContacsForm />
      {contacts.length > 0 && <Filter />}
      {contacts.length > 0 && <h2>Contacts</h2>}
      <ContactItem />
    </Base>
  );
};

export default App;
