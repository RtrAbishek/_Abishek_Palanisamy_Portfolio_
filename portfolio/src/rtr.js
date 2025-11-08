import React from 'react';

function Rotaractabout() {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '50px',
        borderRadius: '30px',
        backgroundColor: '#fafafa',
      }}
    >
      <h2
        style={{
          color: '#222',
          fontFamily: 'Arial',
          marginBottom: '25px',
          fontSize: '2rem',
        }}
      >
        About Rotaract Carrier
      </h2>
      <p id="rotaract"></p>

      <img
        src={`${process.env.PUBLIC_URL}/assets/rtrt.abi.jpg`}
        alt="Rtr. Abishek Palanisamy"
        width="200"
        height="200"
        style={{
          borderRadius: '60%',
          marginBottom: '25px',
        }}
      />

      <p style={{ fontSize: '18px', color: '#333', margin: '10px 0' }}>
        Hello 👋, I’m <b>Rtr. Abishek Palanisamy</b> — an enthusiastic
        <b> Rotaractor</b> who believes in <b>Service Above Self</b> and teamwork that drives change.
      </p>

      <p style={{ fontSize: '17px', color: '#333', margin: '10px 0' }}>
        I currently serve as the <b>Blood Service Director</b> of the
        <b> Rotaract Club of Velalar College of Engineering and Technology</b> for the year
        <b> 2025–26</b>.
      </p>

      <p style={{ fontSize: '17px', color: '#333', margin: '10px 0' }}>
        Through Rotaract, I’ve actively contributed to impactful initiatives — from
        <b> blood donation drives</b> and <b>community outreach programs</b> to
        <b> youth development events</b> — empowering lives and spreading kindness.
      </p>

      <p style={{ fontSize: '17px', color: '#333', margin: '10px 0' }}>
        I strongly believe that leadership is not about titles, but about inspiring others
        to take action and make a difference together. 
      </p>

      <hr style={{ marginTop: '30px', border: '1px solid #ddd' }} />
    </div>
  );
}

export default Rotaractabout;
