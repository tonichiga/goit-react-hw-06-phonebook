import { useState } from 'react';
import ContactElement from './VisibileContacts/';
import s from './VisibileContacts.module.scss';
import { connect } from 'react-redux';
import { deleteContacts } from '../redux/actions';

const VisibleContactsHook = ({ data, deleteContact }) => {
  const [filter, setFilter] = useState('');

  const findContact = () => {
    console.log('data:', data);
    const contacts = data;
    const filtered = contacts.filter(contact => contact.name === filter);
    return filtered;
  };

  const handleContactFinder = e => {
    setFilter(e.target.value);
  };

  const findContacts = findContact();

  return (
    <>
      <h2>Contacts</h2>

      <p>Find contact</p>
      <input
        type="text"
        placeholder="enter name"
        onChange={handleContactFinder}
        value={filter}
      ></input>

      <p>{findContacts.map(({ name }) => name)}</p>

      <ul className={s.list}>
        {data.map(data => (
          <ContactElement
            name={data.name}
            number={data.number}
            key={data.id}
            deleteContact={deleteContact}
            id={data.id}
          />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = state => {
  return {
    data: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: id => dispatch(deleteContacts(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisibleContactsHook);
