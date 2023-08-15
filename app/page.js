import styles from "./page.module.css";
import PREPLibreIcon from "@/src/icons/PREPLibreIcon";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div className={styles.logo}>
          <PREPLibreIcon width={84} height={84} />
          <span className={styles.title}>
            <span>PREP</span>
            <span>LIBRE</span>
          </span>
        </div>
        <p>Un PREP de todos para todos</p>
        <button className={styles.cta}>INICIAR SESIÓN</button>
      </div>
    </main>
  );
}
