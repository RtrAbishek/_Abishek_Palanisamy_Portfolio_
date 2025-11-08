import React from 'react';

function Skill() {
  const skills = [
    { 
      src: `${process.env.PUBLIC_URL}/assets/html.jpg`, 
      name: "HTML LANGUAGE", 
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML" 
    },
    { 
      src: `${process.env.PUBLIC_URL}/assets/css3.svg`, 
      name: "CSS LANGUAGE", 
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS" 
    },
    { 
      src: `${process.env.PUBLIC_URL}/assets/node.png`, 
      name: "NODE JS LANGUAGE", 
      link: "https://nodejs.org/en/docs" 
    },
    { 
      src: `${process.env.PUBLIC_URL}/assets/react.png`, 
      name: "REACT JS FRAMEWORK", 
      link: "https://react.dev/" 
    },
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2 style={{ marginBottom: '30px', color: '#75ce63ff', fontFamily: 'sans-serif' }}>
        My Skills
      </h2>
      <p id="skills"></p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '30px',
        }}
      >
        {skills.map((skill, index) => (
          <a 
            key={index} 
            href={skill.link} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '2px solid #ddd',
                borderRadius: '15px',
                width: '180px',
                padding: '20px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
              }}
            >
              <img
                src={skill.src}
                alt={skill.name}
                width={120}
                height={120}
                style={{
                  borderRadius: '10px',
                  marginBottom: '10px',
                }}
              />
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#9b2121ff',
                  textTransform: 'uppercase',
                  margin: 0,
                }}
              >
                {skill.name}
              </p>
            </div>
          </a>
        ))}
      </div>

      <br />
      <hr/>
    </div>
  );
}

export default Skill;
