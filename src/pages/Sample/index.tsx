import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { HelloContainer, InputGroup, Logo, SocialIcons, SocialsContainer, SubscribeContainer } from './index.styled';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Sample = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmitEmail = (e) => {
  
    setEmail('');
    setTimeout(()=>{
      setMessage('')
    },10000)
    setMessage('Thank you for subscribing!')
  }
  return (
    <HelloContainer>
      <LazyLoadImage src="/uploads/Turuchic.png" alt="img" width="100%" height="100%" className='image' placeholderSrc='/uploads/Turuchic.com-min.png' effect='blur' />
      <Logo>Turuchic.com</Logo>
      <SubscribeContainer>
        <h1>Launching Soon</h1>
        <p>We'll let you know when we launch</p>
        <InputGroup target='_blank' action="https://formsubmit.co/685c9eb0244b8432f8125de948c44cc4" method='POST'>
        <input type="email" id='email' name='email' placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} value={email}/>
        <button type='submit' onClick={handleSubmitEmail}>Notify me</button>
        </InputGroup>
        <p className='message'>{message}</p>
      </SubscribeContainer>
      <SocialsContainer>
        <p>Visit our <b>Social media</b> pages</p>
        <p>to view our current collections</p>
        <SocialIcons>
       <a href="https://web.facebook.com/HadassahEche/?_rdc=1&_rdr" target='_blank' rel='noreferrer'>
       <Icon icon="uil:facebook-f" color="white"  width={'18'} />
       </a>
       <a href="https://www.instagram.com/turuchic/" target='_blank' rel='noreferrer'>
       <Icon icon="ion:logo-instagram" color="white"  width={'20'} />
       </a>
        <a href="https://wa.me/08126152067" target='_blank' rel='noreferrer'>
        <Icon icon="ph:whatsapp-logo-light" color="white"  width={'22'} />
        </a>
        </SocialIcons>
      </SocialsContainer>
    </HelloContainer>
  );
};

export default Sample;
