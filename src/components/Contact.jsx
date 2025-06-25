"use client";

import styles from "./Contact.module.css";
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.contactTitle}>Contact</h2>

      <div className={styles.contactInfo}>
        <p>
          <FaWhatsapp className={styles.icon} />
          <a href="https://wa.me/27731562086" target="_blank" rel="noopener noreferrer">
            Chat on WhatsApp
          </a>
        </p>
        <p>Email: thembysmith@icloud.com</p>
        <p>Phone: +27 73 156 2086</p>
      </div>

      
      <div className={styles.socialIcons}>
        <a href="https://instagram.com/herbusiness" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://facebook.com/herbusiness" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://tiktok.com/@herbusiness" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </a>
      </div>
    </section>
  );
}
