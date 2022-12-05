import Button from '../components/Button';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

export default function Home() { 
  return (<main className={styles.container}>
    <Header />
    <form className={styles.form} onSubmit={(e) => {
      e.preventDefault();
      window.location.assign("/chart");
    }}>
      <Button>Track</Button>
    </form>
  </main>);
}