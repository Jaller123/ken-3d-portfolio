import React, { useState } from 'react';
import { EarthCanvas } from "./canvas";
import styles from './Contact.module.css'
import discord from '../assets/logos/discord.svg'
import linkedin from '../assets/logos/linkedin.svg'
import mail from '../assets/logos/mail.svg'
import github from '../assets/logos/github.svg'
import { slideIn } from "../utilities/motion"

const Contact = () => {
  
  return (
    <div className={styles.contact}>
      <div className="w-full h-[600px] sm:h-[300px] md:h-[800px] lg:h-[900px] xl:h-[700px]">
        <EarthCanvas />
      </div>
      <div className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Let's Connect!</h1>
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
    </div>
  ); 
};

export default Contact