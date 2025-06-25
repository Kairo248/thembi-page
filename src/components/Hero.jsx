"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Hero.module.css";
import React from "react";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/Profile.jpg"
          alt="Profile"
          width={250}
          height={250}
          className={styles.heroImage}
        />
        <h1 className={styles.heroTitle}>Welcome to Thembi's World</h1>
        <p className={styles.heroSubtitle}>Organic Wellness & Modern Fashion</p>
      </motion.div>
    </section>
  );
}
