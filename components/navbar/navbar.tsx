import styles from "./navbar.module.scss";
import Image from "next/image";
import necterLogo from "../../public/images/logo_w_tr.png";

export default function Navbar({ isHome }: { isHome: boolean }) {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.navbarContainer}>
          <div className={styles.companyInfoContainer}>
            <div className={styles.logoImgWrap}>
              {/* TODO: The class for the image below might be unnecessary  */}
              <Image
                src={necterLogo}
                alt="necter-logo"
                className={styles.logoImg}
              />
            </div>
            <div className={styles.navCompanyName}>NECTER</div>
          </div>
          {isHome ? (
            <ul className={styles.navmenu}>
              <li className={styles.navitem}>
                <a className={styles.navlink}>What</a>
              </li>
              <li className={styles.navitem}>
                <a className={styles.navlink}>Why</a>
              </li>
              <li className={styles.navitem}>
                <a className={styles.navlink}>How</a>
              </li>
            </ul>
          ) : null}
          <div className={styles.navbtn}>
            <a className={styles.navbtnlink}>Download</a>
          </div>
        </div>
      </div>
    </>
  );
}
