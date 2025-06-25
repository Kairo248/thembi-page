"use client";

import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import styles from "./Navbar.module.css";
import React from "react";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <Link href="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span>My Story</span>
          </Link>
        </li>
        <li>
          <ScrollLink to="products" smooth={true} duration={500}>
            Products
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="contact" smooth={true} duration={500}>
            Contact
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
}
