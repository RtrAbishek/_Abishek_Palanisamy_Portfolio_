import React from 'react';

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#f0f0f0',
        color: '#2e2e2e',
        textAlign: 'center',
        padding: '20px 10px',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '15px',
        borderTop: '2px solid #b8860b',
        boxShadow: '0 -2px 8px rgba(0,0,0,0.15)',
      }}
    >
        <marquee>
      <p>
        Designed & Developed by <b> Abishek Palanisamy</b>
      </p>
      </marquee>
    </footer>
  );
}

export default Footer;
