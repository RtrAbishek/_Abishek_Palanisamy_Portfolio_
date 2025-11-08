import React from 'react';

function Download() {
  return (
    <div style={{ textAlign: 'right', marginTop: '40px' }}>
      <a
        href={`${process.env.PUBLIC_URL}/Abishek_Resume.pdf`} 
        download="Abishek_Resume.pdf"
        style={{
          textDecoration: 'none',
          backgroundColor: '#333',
          color: '#fff',
          padding: '12px 25px',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: 'bold',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          transition: 'background 0.3s',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#555')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#333')}
      >
        📄 Download My Resume
      </a>
    </div>
  );
}

export default Download;
