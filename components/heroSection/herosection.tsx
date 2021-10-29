import styles from "./herosection.module.scss";

export default function HeroSection() {
  // window.innerHeight
  return (
    <>
      <div className={styles.herocontainer}>
        <div className={styles.herobg}>
          <video autoPlay muted className={styles.videobg}>
            <source src="/videos/necter-promo.mp4" type="video/mp4" />
            Your browser does not support the videos
          </video>
        </div>
        {/* <style global jsx>{` */}
        {/* body > div:first-child, */}
        {/* div#__next, */}
        {/* div#__next > div { */}
        {/* height: 100%; */}
        {/* } */}
        {/* `}</style> */}
      </div>
    </>
  );
}
