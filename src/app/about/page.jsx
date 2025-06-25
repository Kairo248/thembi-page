import React from "react";
import styles from "./myStory.module.css";

export default function fullIntro() {
  return (
    <section className={styles.aboutSection} id="about">
      <h2 className={styles.aboutHeading}>Thembi’s Story</h2>
      <p className={styles.aboutText}>
        Thembi grew up with a deep love for people, health, and expression. From a young age, she
        noticed how feeling good on the inside often reflected in how people presented themselves
        on the outside. That inspired her lifelong passion: to help others look and feel their best.
      </p>

      <p className={styles.aboutText}>
        Her journey with <strong>Forever Living Products</strong> began when she experienced their
        benefits firsthand — boosted energy, clearer skin, and overall wellness. The natural
        ingredients aligned perfectly with her values, and soon she was introducing the products to
        her family and community.
      </p>

      <p className={styles.aboutText}>
        But Thembi wanted to go even further. She paired her passion for wellness with her love for
        <strong> modern fashion</strong>, launching a boutique clothing brand designed to help women
        express their power, identity, and beauty. Whether it's a stylish hoodie or an organic aloe
        drink, every product she shares carries the same message:
        <em> “You deserve to feel confident, healthy, and empowered.”</em>
      </p>

      <h3 className={styles.offerHeading}>What She Offers:</h3>
      <ul className={styles.offerList}>
        <li>✅ Authentic Forever Living Products</li>
        <li>✅ Carefully curated modern clothing for women</li>
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
