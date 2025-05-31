import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [editId, setEditId] = useState(null);

  // Fetch contacts on mount
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const res = await axios.get('http://localhost:5000/contacts');
    setContacts(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await axios.put(`http://localhost:5000/contacts/${editId}`, form);
      setEditId(null);
    } else {
      await axios.post('http://localhost:5000/contacts', form);
    }

    setForm({ name: '', email: '', phone: '' });
    fetchContacts();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/contacts/${id}`);
    fetchContacts();
  };

  const handleEdit = (contact) => {
    setForm({ name: contact.name, email: contact.email, phone: contact.phone });
    setEditId(contact._id);
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      <h1>User Contact Manager</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <button type="submit">{editId ? 'Update' : 'Add'} Contact</button>
      </form>

      <ul>
        {contacts.map((contact) => (
          <li key={contact._id}>
            {contact.name} - {contact.email} - {contact.phone}{' '}
            <button onClick={() => handleEdit(contact)}>Edit</button>
            <button onClick={() => handleDelete(contact._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
