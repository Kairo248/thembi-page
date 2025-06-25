import styles from "./Products.module.css";
import React from "react";
import Link from "next/link";

const products = [
  { name: "Forever Aloe Vera Gel", image: "/Forever-Aloe-Vera-Gel-Minis.jpg" },
  { name: "Outfit", image: "/outfit2.jpg" },
];

export default function Products() {
  return (
    <section className={styles.productsSection} id="products">
      <h2 className={styles.productsTitle}>Products</h2>

      <div className={styles.productsGrid}>
        {/* Render general products */}
        {products.map((product, i) => (
          <div key={i} className={styles.productCard}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <div>
              <h3 className={styles.productName}>{product.name}</h3>
            </div>
          </div>
        ))}

        <Link href="/products/c9-pack" className={styles.productCard}>
          <img src="/c9-ultra-shake.jpg" alt="Forever C9 Pack" className={styles.productImage} />
          <div>
            <h3 className={styles.productName}>Forever C9 Pack</h3>
          </div>
        </Link>
      </div>
    </section>
  );
}
