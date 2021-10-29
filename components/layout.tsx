import Head from "next/head";
import styles from "./layout.module.css";

export const siteTitle = "Necter - Offline Dating";

export default function Layout({ children }: { children: any; home: any }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon-package/favicon.ico" />
        <meta name="description" content="Necter - Offline Dating" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <main>{children}</main>
    </div>
  );
}
