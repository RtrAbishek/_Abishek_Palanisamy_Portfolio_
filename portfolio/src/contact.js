import React from 'react';

function Contact() {
  const contacts = [
    {
      src: `${process.env.PUBLIC_URL}/assets/instagramlogo.avif`,
      name: 'Instagram',
      link: 'https://www.instagram.com/abimegha',
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/linkedinlogo.webp`,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/abishekpalanisamy',
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/whatsapplogo.png`,
      name: 'WhatsApp',
      link: 'https://wa.me/918778370076',
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/logo-gmail.png`,
      name: 'Gmail',
      link: 'mailto:abishekpalanisamy7994@gmail.com',
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/logo-facebook.avif`,
      name: 'Facebook',
      link: 'https://www.facebook.com',
    },
  ];

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '40px',
        padding: '30px',
      }}
    >
      <p id="contact"></p>
      <h2
        style={{
          marginBottom: '30px',
          color: '#069d0bff',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '2rem',
        }}
      >
        CONTACT ME
      </h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '40px',
        }}
      >
        {contacts.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <div
              style={{
                backgroundColor: '#fff',
                borderRadius: '20px',
                width: '150px',
                padding: '20px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
              }}
            >
              <img
                src={item.src}
                alt={item.name}
                width={80}
                height={80}
                style={{
                  borderRadius: '50%',
                  marginBottom: '10px',
                  objectFit: 'cover',
                }}
              />
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#333',
                  margin: 0,
                }}
              >
                {item.name}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;
