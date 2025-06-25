"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./FloatingWhatsappButton.module.css";

export default function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/27731562086"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatingButton}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
