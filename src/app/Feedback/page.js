'use client'; // Only for app/ directory

import { useState } from 'react';

export default function FeedbackForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/fetch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setResponse(data);
    if (res.ok) {
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
      <h2 className='text-white hover:text-yellow-400 font-medium bg-blue-500 p-2'>Submit Feedback</h2>
      <form  className= "p-4 mx-auto bg-white rounded shadow-md mt-6" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ display: 'block', marginBottom: '10px', width: '100%' }}
         className="border bg-gray-200 text-gray-700"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ display: 'block', marginBottom: '10px', width: '100%' }}
                   className="border bg-gray-200 text-gray-700"

        />
        <textarea
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
          required
          style={{ display: 'block', marginBottom: '10px', width: '100%' }}
                   className="border bg-gray-200 text-gray-700"

        />
        <button className='mt-4 px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700' type="submit">Submit</button>
      </form>
      {response && (
        <p style={{ marginTop: '1rem', color: response.success ? 'green' : 'red' }}>
          {response.message}
        </p>
      )}
    </div>
  );
}
