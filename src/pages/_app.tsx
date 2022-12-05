import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import Head from "next/head";

import { AppConfig } from "../data/config";
import { store } from "../data/store/store";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={AppConfig.description ?? ""} />
        <meta name="title" content={AppConfig.title ?? ""} />
        <title>{AppConfig.title}</title>
        <link rel="icon" href={AppConfig.icon ?? ""} />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
