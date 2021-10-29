// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import Link from 'next/link'
// import Head from "next/head";
import Head from "next/head";
import React from "react";
import HeroSection from "../components/heroSection/herosection";
import MainPageLayout from "../components/mainPageLayout/mainPageLayout";
import Navbar from "../components/navbar/navbar";
// import utilStyles from "../styles/utils.module.css";

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default function Home({ props }: { props: any }): JSX.Element {
  return (
    <>
      <Head>
        <title>NECTER - Offline Dating</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon-package/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-package/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-package/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon-package/site.webmanifest" />
        <link
          rel="mask-icon"
          href="favicon-package/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Necter - Offline Dating" />
      </Head>
      <MainPageLayout>
        <HeroSection />
      </MainPageLayout>
    </>
    // <Layout home>
    // [> Keep the existing code here <]
    // <Head>
    // <title>{siteTitle}</title>
    // </Head>
    // <section className={utilStyles.headingMd}>
    // <p>[This is a demo website]</p>
    // <p>
    // (This is a sample website - you’ll be building a site like this on{' '}
    // <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
    // </p>
    // </section>
    // [> Add this <section> tag below the existing <section> tag <]
    // <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    // <h2 className={utilStyles.headingLg}>Blog</h2>
    // <ul className={utilStyles.list}>
    // {allPostsData.map(({ id, date, title }: {id: string, date:string, title: string}) => (
    // <li className={utilStyles.listItem} key={id}>
    // {title}
    // <br />
    // {id}
    // <br />
    // {date}
    // </li>
    // ))}
    // </ul>
    // </section>
    // </Layout>
  );
}
