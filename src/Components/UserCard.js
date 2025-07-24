'use client';

import { useState } from 'react';

export default function UserCard() {
  const [showDetails, setShowDetails] = useState(false);

  const user = {
    name: 'Ali Raza',
    role: 'Software Developer',
    company: 'Bank Alfalah',
    email: 'jaff.ali@example.com',
    location: 'Karachi, Pakistan',
  };

  return (
    <div className="p-6 mt-4 border rounded-lg bg-gray-100 shadow-md max-w-md">
      <h3 className="text-lg font-semibold mb-2">Team Member Info</h3>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>Company:</strong> {user.company}</p>

      {showDetails && (
        <div className="mt-3 text-sm text-gray-700">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Location:</strong> {user.location}</p>
        </div>
      )}

      <button
        onClick={() => setShowDetails(prev => !prev)}
        className="mt-4 px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700"
      >
        {showDetails ? 'Hide Details' : 'Show More'}
      </button>
    </div>
  );
}