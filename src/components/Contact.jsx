import React, { useState } from 'react';
import styles from './Contact.module.css'
import discord from '../assets/logos/discord.svg'
import linkedin from '../assets/logos/linkedin.svg'
import mail from '../assets/logos/mail.svg'
import github from '../assets/logos/github.svg'


const Contact = () => {
  
  return (
    <div className={styles.contact}>
      <h1>Let's Connect!</h1>
      <div className={styles.itemsContainer}>
        <img src={discord} alt="Discord" className={styles.contactIcon} onClick={() => copyToClipboard('jaller1234')} />
        <a href="https://www.linkedin.com/in/kenath-liyanage-29013921b/" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="LinkedIn" className={styles.contactIcon} />
        </a>
        <a href="mailto:jallerken@hotmail.se" target="_blank" rel="noreferrer">
          <img src={mail} alt="Mail" className={styles.contactIcon} />
        </a>
        <a href="https://github.com/Jaller123" target="_blank" rel="noreferrer">
          <img src={github} alt="GitHub" className={styles.contactIcon} />
        </a>
      </div>
    </div>
  );
};

export default Contact