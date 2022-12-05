import Head from 'next/head'

import CryptoChart from '../components/CryptoChart';
import Header from '../components/Header';
import { AppConfig } from '../data/config';
import styles from '../styles/Chart.module.css';

export default function Chart() {
  return (<>
    <Head>
      <meta name="title" content={`${AppConfig.title ?? ""}${AppConfig.title ?? " - "}Chart`} />
      <title>{`${AppConfig.title ?? ""}${AppConfig.title ? " - " : ""}Chart`}</title>
    </Head>
    <main className={styles.container}>
      <Header heart navRoute="/" />
      <section className={styles.chartSection}>
        <div className={styles.chartArea}>
          <CryptoChart />
        </div>
      </section>
    </main>
  </>);
}
