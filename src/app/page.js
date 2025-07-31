'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import jwt from 'jsonwebtoken';
//import cookie from 'cookie';
import { cookies } from 'next/headers';




export default function HomePage() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  // Logout
  const logout = async () => {
    setIsLoading(true);
    try {
      // clear the token cookie
      const res = await fetch('/api/logout');
      if (res.ok) {
        // Redirect to login page
        router.push('/Login');
      } else {
        alert('Logout failed, please try again.');
      }
    } catch (error) {
      console.error('Error :', error);
      alert('Logout failed, please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const cookieStore = cookies();
    const token = cookieStore.get('auth_token')?.value;    

    if (token) {
      const tokenValue = token.split('=')[1];
      console.log('Found token:', tokenValue); 

      try {
        const decoded = jwt.decode(tokenValue); 
        console.log('Decoded token:', decoded); 

        if (decoded && decoded.email) {
          setUser(decoded);
        } else {
          setUser(null); 
        }
      } catch (error) {
        console.error('Invalid token:', error);
        setUser(null); 
      }
    } else {
      console.log('No token found in cookies'); 
      setUser(null); 
    }

    setIsLoading(false); 
  }, []);

  // Redirect to login page if no user is found
  useEffect(() => {
    if (!isLoading && !user) {
      console.log('Redirecting to login'); 
      router.push('Login'); 
    }
  }, [isLoading, user, router]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome {user?.email}</h1>
          <button 
            onClick={logout} 
            disabled={isLoading} 
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            {isLoading ? 'Logging out...' : 'Logout'}
          </button>
          <h2 className="text-center text-gray-500 hover:text-blue-700 font-semibold px-10" style={{ marginTop: '20px', fontSize:'30px' }}>
            Welcome to Next Home Page
          </h2>
        </>
      ) : (
        <p>You are not authenticated. Redirecting to login...</p>
      )}
    </div>
  );
}
