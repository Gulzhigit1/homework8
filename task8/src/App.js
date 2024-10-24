
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [editing, setEditing] = useState(null);
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const handleAddContact = () => {
    if (editing) {
      dispatch({ type: 'EDIT_CONTACT', payload: { id: editing, name, phone } });
      setEditing(null);
    } else {
      dispatch({ type: 'ADD_CONTACT', payload: { id: Date.now(), name, phone } });
    }
    setName('');
    setPhone('');
  };

  const handleEditContact = (contact) => {
    setName(contact.name);
    setPhone(contact.phone);
    setEditing(contact.id);
  };

  const handleDeleteContact = (id) => {
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };

  return (
    <div>
      <h1>Contact</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
      />
      <button onClick={handleAddContact}>{editing ? 'Edit' : 'Add'} Contact</button>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.phone}
            <button onClick={() => handleEditContact(contact)}>Edit</button>
            <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
