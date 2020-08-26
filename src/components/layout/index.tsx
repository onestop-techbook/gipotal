import React from "react";
import Link from "next/link";
import styles from "./index.module.css";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.headerNav}>
          <Link href="/">
            <a className={styles.logoWrapper}>
              <img className={styles.logo} src="/images/logo.svg" />
            </a>
          </Link>
          <Link href="/signup">
            <a className={[styles.blackButton, styles.button].join(" ")}>
              新規登録
            </a>
          </Link>
          <Link href="/login">
            <a className={[styles.whiteButton, styles.button].join(" ")}>
              ログイン
            </a>
          </Link>
        </nav>
      </header>
      {children}
    </>
  );
};
