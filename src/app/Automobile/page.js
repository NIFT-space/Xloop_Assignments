import React from 'react';
import LatestModel from '@/Components/Cars';

const AutomobilePage = () => {
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