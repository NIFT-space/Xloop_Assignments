'use client';

import React from 'react';
import LatestModel from '@/Components/Cars';
import cookie from 'cookie';

const AutomobilePage = () => {

  const cookies = document.cookie || '';
  const token = cookies.split('; ').find(row => row.startsWith('auth_token'));
  console.log('Token:', token); // Log the token for debugging
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Welcome to the Latest Car Models Showroom</h1>
      
      <section>
        <h2 className='text-blue-500 hover:text-blue-700 font-semibold' style={{ marginBottom: '20px' }}>Featured Car Models (2025)</h2>
        
        <LatestModel />
      </section>
      
      <footer style={{ marginTop: '50px', textAlign: 'center', padding: '20px', borderTop: '1px solid #ccc' }}>
        <p>© 2025 Car Showroom. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AutomobilePage;