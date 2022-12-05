import Button from '../components/Button';
import Header from '../components/Header';
import MultiSelect from '../components/MultiSelect';
import { AppConfig } from '../data/config';
import styles from '../styles/Home.module.css';

export default function Home({ assetPairs }: {
  assetPairs: Array<{value: string, label: string}>
}) { 
  return (<main className={styles.container}>
    <Header />
    <form className={styles.form} onSubmit={(e) => {
      e.preventDefault();

      const pairs: string[] = ((e.target as any).select.length == undefined) ?
      [(e.target as any).select.value] :
      Array.from((e.target as any).select).map((pair: any) => (pair.value));

      if ((pairs.length > 0) && (pairs[0] != "")) {
        localStorage.setItem("pairs", JSON.stringify(pairs));
      }
      window.location.assign("/chart");
    }}>
      <MultiSelect className={styles.input} label="Select currency pairs:" options={assetPairs} />
      <Button>Track</Button>
    </form>
  </main>);
}

export async function getStaticProps() {
  const res = await fetch(AppConfig.assetPairsUrl);
  const assetPairs = Object.values((await res.json()).result).map((value: any) => ({value: value.wsname, label: value.wsname}));
  return {
    props: {
      assetPairs,
    }
  }
}