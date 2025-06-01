import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/contacts');
      setContacts(res.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleEdit = (contact) => {
    setForm({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    });
    setEditId(contact._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/contacts/${id}`);
      fetchContacts();
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/contacts/${editId}`, form);
        setEditId(null);
      } else {
        await axios.post('http://localhost:5000/contacts', form);
      }
      setForm({ name: '', email: '', phone: '' });
      fetchContacts();
    } catch (error) {
      console.error('Error saving contact:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">All Contacts</h2>

      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="text-center mt-3">
          <button className="btn btn-primary px-4" type="submit">
            {editId ? 'Update Contact' : 'Add Contact'}
          </button>
        </div>
      </form>

      <div className="table-responsive">
        <table className="table table-bordered table-hover text-center align-middle shadow-lg rounded">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((contact, index) => (
                <tr key={contact._id}>
                  <td>{index + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>
                    <div className="d-flex justify-content-center gap-2">
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => handleEdit(contact)}
                      >
                        <i className="bi bi-pencil-square"></i> Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(contact._id)}
                      >
                        <i className="bi bi-trash"></i> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-muted">
                  No contacts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Contact;
