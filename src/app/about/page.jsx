import React from "react";
import styles from "./myStory.module.css";

export default function fullIntro() {
  return (
    <section className={styles.aboutSection} id="about">
      <h2 className={styles.aboutHeading}>Thembi’s Story</h2>
      <p className={styles.aboutText}>
        Meet Thembakazi Smith, the powerhouse behind beauty by <em>Leffeme</em>— a wellness brand built on 
        the belief that self-care isn't a luxury, it's a lifestyle. With passion for helping others
        feel their best inside and out, she is on a mission to empower people to level up in every area
        of life— mind, body and soul.
      </p>

      <p className={styles.aboutText}>
        Frm nourishing supplements to soothing skincare and mindful rituals, her products are more than 
        just wellness essentials — they are tools for transformation.
      </p>

      <p className={styles.aboutText}>
        Driven, intentional, and deeply rooted in purpose, she's not just selling products — she's creating
        a movement for those ready to rise.
      </p>

      <h3 className={styles.offerHeading}>What She Offers:</h3>
      <ul className={styles.offerList}>
        <li>✅ Authentic Forever Living Products</li>
        <li>✅ Personal guidance for anyone starting their wellness journey</li>
      </ul>

      <h3 className={styles.offerHeading}>Want to Join Her Team?</h3>
      <p className={styles.aboutText}>
        You can not only shop with Thembi — you can <strong>join her team</strong>. Whether you're
        looking to start your own business or simply want to learn more about the products, Thembi
        offers mentorship and support.
      </p>

      <ul className={styles.offerList}>
        <li>✅ Learn about Forever Living’s business model</li>
        <li>✅ Get product training</li>
        <li>✅ Start earning with support and guidance</li>
      </ul>

      <a
        href="https://wa.me/27731562086?text=Hi%20Thembi%2C%20I%27m%20interested%20in%20joining%20your%20team"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.joinButton}
      >
        💬 Join via WhatsApp
      </a>
    </section>
  );
}
