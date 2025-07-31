// app/register/page.js
'use client';

import { useState } from 'react';

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '',role: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!form.name || !form.email || !form.password || !form.role) {
      setStatus('Please fill in all fields.');
      return;
    }

    // Send data to the API route for registration
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setStatus(data.message);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-semibold text-center mb-6">Create Account</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          type="text"
          placeholder="Your Name"
          required
          className="w-full p-3 border rounded-md"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          placeholder="Your Email"
          required
          className="w-full p-3 border rounded-md"
        />
        <input
          name="password"
          value={form.password}
          onChange={handleChange}
          type="password"
          placeholder="Your Password"
          required
          className="w-full p-3 border rounded-md"
        />
        <input
          name="role"
          value={form.role}
          onChange={handleChange}
          type="text"
          placeholder="Your Role"
          required
          className="w-full p-3 border rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
        >
          Register
        </button>
      </form>

      {status && (
        <p className="mt-4 text-center text-gray-600">{status}</p>
      )}
    </div>
  );
}


// import Form from "@/Components/Form";

// export default function(){

//     return(

//         <>

//         <Form></Form>
//         </>
//     );
// }