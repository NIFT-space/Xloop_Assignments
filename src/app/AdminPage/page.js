'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import jwt from 'jsonwebtoken';

export default function AdminPage() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cookies = document.cookie || '';
    const token = cookies.split('; ').find(row => row.startsWith('auth_token='));

    if (token) {
      const tokenValue = token.split('=')[1];
      try {
        const decoded = jwt.decode(tokenValue); // Decode JWT to get user info
        if (decoded.role !== 'admin') {
          router.push('/'); // Redirect non-admin users
        } else {
          setUser(decoded); // Set user info if admin
        }
      } catch (error) {
        console.error('Invalid token:', error);
        router.push('/Login'); // Redirect if token is invalid
      }
    } else {
      router.push('/Login'); // Redirect if no token
    }

    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {user?.email}</p>
      {/* Your admin dashboard content */}
    </div>
  );
}
