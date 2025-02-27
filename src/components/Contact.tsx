import React from 'react';
import linkedinImage from "../assets/linkedin.png"

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>you can reach me at hohein at utu dot fi</p>
      <div className='footer-linkedin'>
      <a href="https://www.linkedin.com/in/henrik-heinonen-664840298" target="_blank" rel="noopener noreferrer">
        <img 
          src={linkedinImage} 
          alt="LinkedIn"
          style={{ width: '40px', height: '40px' }}
        />
      </a>
      <p>Connect with me on LinkedIn</p>
    </div>
    <div>
    Photo by <a href="https://unsplash.com/@fellowferdi?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ferdinand Stöhr</a> on <a href="https://unsplash.com/photos/teal-and-pink-artwork-NFs6dRTBgaM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      
    </div>
    </section>
  );
};

export default Contact;