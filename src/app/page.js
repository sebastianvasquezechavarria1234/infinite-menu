import InfiniteMenu from "@/components/InfiniteMenu";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>MENU.INC</div>
          <div className={styles.menuIcon}>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>
            Design <br /> <span>Refined.</span>
          </h1>
        </section>
        
        <section className={styles.infiniteSection}>
          <InfiniteMenu />
        </section>

        <section className={styles.content}>
          <p className={styles.description}>
            Experience the flow of modern navigation. 
            Scroll down to explore more or interact with the menu above.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2026 MENU STUDIO. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
