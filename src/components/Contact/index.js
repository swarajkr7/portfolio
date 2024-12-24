import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 50px 20px;
  color: white;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ContactSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  background: #161623;
  
  padding: 35px;
  border-radius: 10px;
  background: "#854CE6"
  box-shadow: 0 4px 10px rgba(116, 116, 116, 0.5);
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 14px;
  margin-bottom: 15px;
  border: none;
  border-radius: 10px;
  background: #2b2b3d;
  color: white;
  font-size: 1rem;

  &::placeholder {
    color: #888;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  background: #2b2b3d;
  color: white;
  font-size: 1rem;
  resize: none;

  &::placeholder {
    color: #888;
  }
`;

const FormButton = styled.button`
  background: linear-gradient(45deg, #a445ff,rgb(209, 61, 254));
  color: white;
  padding: 15px 245px 15px 245px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: linear-gradient(45deg, #d344ff, #a445ff);
  }
`;

const Contact = () => {
  return (
    <ContactSection>
      <ContactTitle>Contact</ContactTitle>
      <ContactSubtitle>
        Feel free to reach out to me for any questions or opportunities!
      </ContactSubtitle>
      <ContactForm>
        <FormTitle>
          Email Me <span role="img" aria-label="rocket">🚀</span>
        </FormTitle>
        <FormInput type="email" placeholder="Your Email" required />
        <FormInput type="text" placeholder="Your Name" required />
        <FormInput type="text" placeholder="Subject" required />
        <FormTextarea placeholder="Message" rows="5" required></FormTextarea>
        <FormButton type="submit">Send</FormButton>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;
