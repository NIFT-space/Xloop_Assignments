'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import Cookies from 'js-cookie'; // Import js-cookie



export default function HomePage() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  // Logout function to clear the token and redirect
  const logout = async () => {
    setIsLoading(true);
    try {
      // Call the logout API to clear the token cookie
      const res = await fetch('/api/logout');
      if (res.ok) {
        // Redirect to login page after successful logout
        router.push('/Login');
      } else {
        alert('Logout failed, please try again.');
      }
    } catch (error) {
      console.error('Error during logout:', error);
      alert('Logout failed, please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Check for token and user authentication
  useEffect(() => {
    //const cookies = document.cookie || '';
    //const token = cookies.split('; ').find(row => row.startsWith('auth_token='));
    const token = Cookies.get('auth_token'); // Fetch the token using js-cookie
    

    if (token) {
      const tokenValue = token.split('=')[1];
      console.log('Found token:', tokenValue); // Log the token value

      try {
        const decoded = jwt.decode(tokenValue); // Decode JWT to get user info
        console.log('Decoded token:', decoded); // Log the decoded token

        if (decoded && decoded.email) {
          setUser(decoded);
        } else {
          setUser(null); // If no valid user data is found, clear user state
        }
      } catch (error) {
        console.error('Invalid token:', error);
        setUser(null); // If there's an error decoding, clear user state
      }
    } else {
      console.log('No token found in cookies'); // Log if no token is found
      setUser(null); // No token found, clear user state
    }

    setIsLoading(false); // Set loading to false after the check is complete
  }, []);

  // Redirect to login page if no user is found
  useEffect(() => {
    if (!isLoading && !user) {
      console.log('Redirecting to login'); // Log the redirection
      router.push('Login'); // Redirect to login if no user is found
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
