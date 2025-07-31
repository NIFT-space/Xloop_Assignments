'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [status, setStatus] = useState(null);
  const router = useRouter(); // Initialize the router

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!form.email || !form.password) {
      setStatus('Please fill in all fields.');
      return;
    }

    // Send data to the API route for login
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setStatus(data.message);

    // If login is successful, redirect to the home page
    if (res.status === 200) {
      setTimeout(() => {
        router.push('/'); // Redirect to home page after a short delay
      }, 1000); // Optional: Delay the redirect to show the success message first
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
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
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </form>

      {status && (
        <p className="mt-4 text-center text-gray-600">{status}</p>
      )}
    </div>
  );
}
