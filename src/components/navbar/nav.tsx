"use client";

import { useState } from "react";
import styles from "./style.module.css";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logoContainer}>
        <p className={styles.logo}>Rejo4Craft</p>
      </Link>
      <ul className={styles.link}>
        <li>
          <Link href="/" className={styles.isi}>
            <p className={styles.text}>Beranda</p>
          </Link>
        </li>
        <li>
          <Link href="/product" className={styles.isi}>
            <p className={styles.text}>Produk</p>
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.isi}>
            <p className={styles.text}>Tentang Kami</p>
          </Link>
        </li>
      </ul>
      <div className={styles.button}>
        <Link href="https://wa.me/62895636126916" className={styles.text}>
          Contact Us
        </Link>
      </div>

      <div className={styles.hamburgerWrapper} onClick={toggleMenu}>
        <div
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div>

      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
        <li>
          <Link href="/" className={styles.navLink}>
            <p className={styles.text}>Beranda</p>
          </Link>
        </li>
        <li>
          <Link href="/product" className={styles.navLink}>
            <p className={styles.text}>Produk</p>
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.navLink}>
            <p className={styles.text}>Tentang Kami</p>
          </Link>
        </li>
        <li>
          <Link
            href="https://wa.me/62895636126916"
            className={styles.buttonres}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
