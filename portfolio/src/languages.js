import React from 'react';

function Language() {
  const languages = [
    { 
      src: `${process.env.PUBLIC_URL}/assets/javaiamge.png`, 
      name: "JAVA",
      link: "https://www.w3schools.com/java/"
    },
    { 
      src: `${process.env.PUBLIC_URL}/assets/python.svg.png`, 
      name: "PYTHON",
      link: "https://www.w3schools.com/python/"
    },
    { 
      src: `${process.env.PUBLIC_URL}/assets/c-program.png`, 
      name: "C PROGRAMMING",
      link: "https://www.w3schools.com/c/"
    },
    { 
      src: `${process.env.PUBLIC_URL}/assets/c++logo.png`, 
      name: "C++",
      link: "https://www.w3schools.com/cpp/"
    },
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2 style={{ marginBottom: '30px', color: '#75ce63', fontFamily: 'sans-serif' }}>
        PROGRAMMING LANGUAGES
      </h2>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px' }}>
        {languages.map((lang, index) => (
          <a 
            key={index}
            href={lang.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div 
              style={{
                backgroundColor: '#fff',
                borderRadius: '15px',
                width: '160px',
                padding: '20px',
                boxShadow: '0 3px 8px rgba(0,0,0,0.2)',
              }}
            >
              <img 
                src={lang.src}
                alt={lang.name}
                width={100}
                height={100}
                style={{ borderRadius: '10px', marginBottom: '10px' }}
              />
              <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', margin: 0 }}>
                {lang.name}
              </p>
            </div>
          </a>
        ))}
      </div>

      <hr style={{ marginTop: '40px', width: '80%' }} />
    </div>
  );
}

export default Language;
