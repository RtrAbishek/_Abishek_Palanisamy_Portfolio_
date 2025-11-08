import React from 'react';

function Aboutus() {
  return (
    <div style={{ textAlign: 'center', padding: '50px',borderRadius: '30px', backgroundColor: '#fafafa' }}>
      <h2 style={{ color: '#222', fontFamily: 'Arial', marginBottom: '25px', fontSize: '2rem' }}>About Me</h2>

      <img
        src={`${process.env.PUBLIC_URL}/assets/myimage.jpg`}
        alt="Abishek Palanisamy"
        width="200"
        height="200"
        style={{
          borderRadius: '20%',
          objectFit: 'cover',
        }}
      />
        <p id="about_me"></p>
      <p style={{ fontSize: '18px', color: '#333', margin: '10px 0' }}>
        Hi 👋, I'm <b>Abishek Palanisamy</b> — a passionate <b>Full Stack Web Developer</b> and creative thinker.
      </p>

      <p style={{ fontSize: '17px', color: '#333', margin: '10px 0' }}>
        I enjoy building responsive and user-friendly web applications using <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>,
        and the <b>MERN Stack (MongoDB, Express, React, Node.js)</b>.
      </p>

      <p style={{ fontSize: '17px', color: '#333', margin: '10px 0' }}>
        I’m currently pursuing my <b>B.Tech in Information Technology</b> at
        <b> Velalar College of Engineering and Technology, Thindal</b>.
      </p>

      <p style={{ fontSize: '17px', color: '#333', margin: '10px 0' }}>
        Alongside tech, I proudly run my own business — <b>Abi Travels</b> — providing reliable transport services across Tamil Nadu.
      </p>

      <p style={{ fontSize: '17px', color: '#333', margin: '10px 0' }}>
        My goal is to combine creativity, innovation, and technology to make meaningful digital experiences.
      </p>
<hr/>
    </div>
  );
}

export default Aboutus;
