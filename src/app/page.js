'use client';

import { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';

export default function HomePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = document.cookie.split('; ').find(row => row.startsWith('auth_token=')).split('=')[1];
    if (token) {
      const decoded = jwt.decode(token); // Decode JWT to get user info
      setUser(decoded);
    }
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Welcome {user.email}</h1>
      {/* Display more user info or content here */}
    </div>
  );
}
