import React from 'react'
import { FaGithub, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import styles from '../styles/Contact.module.css'

const Contact = ({cursor}) => {
  return (
    <section className={styles.contact} data-scroll-section>
        <div className={styles.contactContainer}>
            <div className={styles.contactHeader}>
                <p>NEED MY SERVICES?</p>
                <p>LET&apos;S TALK</p>
            </div>
            <div className={styles.contactButtonContainer}>
                <div className={styles.contactButton}>
                    <p>Discuss Your Project</p>
                </div>
            </div>
            <div className={styles.socials}>
                <div>
                    <FaTwitter />
                </div>
                <div>
                    <FaInstagram />
                </div>
                <div>
                    <FaWhatsapp />
                </div>
                <div>
                    <FaGithub />
                </div>
            </div>
            <div className={styles.credit}>
                <p>&#169;2022 Adebayo olowofoyeku, All Rights Reserved.</p>
            </div>
        </div>
    </section>
  )
}

export default Contact