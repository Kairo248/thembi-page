"use client"
import { motion } from "framer-motion";
import styles from "./About.module.css";
import React from "react";


export default function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className={styles.aboutTitle}>My Story</h2>
        <p className={styles.aboutText}>
          🌸 Meet Thembi
          <br></br>
          <br></br>
A passionate believer in natural wellness and modern style.
What started as her personal journey with Forever Living Products and fashion became a mission to help others glow — inside and out.
Through her business, she now shares organic wellness products and confidence-boosting clothing for women who want to feel good, look good, and live fully.
        </p>
      </motion.div>
    </section>
  );
}
