import React from 'react';

function Courses() {
  const Courses = [
    { 
      src: `${process.env.PUBLIC_URL}/assets/fullstacklogo.webp`, 
      name: "MERN STACK DEVELOPER",
      link: "https://www.mongodb.com/mern-stack"
    },
    { 
      src: `${process.env.PUBLIC_URL}/assets/10645125.png`, 
      name: "GEN AI",
      link: "https://www.ibm.com/topics/generative-ai"
    },
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2 style={{ marginBottom: '30px', color: '#75ce63ff', fontFamily: 'sans-serif' }}>MY COURSES</h2>
      <p id="courses"></p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '30px',
        }}
      >
        {Courses.map((course, index) => (
          <a
            key={index}
            href={course.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
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
                src={course.src}
                alt={course.name}
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
                {course.name}
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

export default Courses;
