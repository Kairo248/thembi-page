"use client";

import Link from "next/link";
import styles from "./c9.module.css";
import Image from "next/image";
import React from "react";

export default function C9PackPage() {
  return (
    <div className={styles.c9Container}>
      <h1 className={styles.c9Title}>Forever C9 Pack</h1>
      <Image
        src="/c9-ultra-shake.jpg"
        alt="Forever C9 Pack"
        width={300}
        height={300}
        className={styles.c9Image}
      />
      <p className={styles.c9Description}>
        The Forever C9 Pack is your first step to a clean, healthy body. Designed to help you
        cleanse your system and adjust your habits, this 9-day program helps kickstart your weight
        management journey. Includes Aloe Vera Gel, Garcinia Plus, and more.
      </p>

      <Link href="/#products" className={styles.backButton}>← Back to Products</Link>

    </div>
  );
}
