import styles from "./herosection.module.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function HeroSection() {
  const { height, width } = useWindowDimensions();

  return (
    <>
      <div className={styles.herocontainer}>
        <div className={styles.herobg}>
          <video autoPlay muted className={styles.videobg}>
            <source src="/videos/necter-promo.mp4" type="video/mp4" />
            Your browser does not support the videos
          </video>
        </div>
        <style jsx>
          {`
            .herocontainer {
              height: "${height}px";
            }
          `}
        </style>
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
