import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLeft}>
        <h2>Pizza House</h2>
        <p>
          As PizzaHouse, we are a pizza chain that has spread the taste of
          boutique pizza prepared with fresh and daily pizza dough, seasonal
          tomato and real mozzarella cheese that we knead in each of our
          branches, and we supply all the materials we use in our products from
          local producers. This React application is built as a demo portfolio
          project by Ertuğrul CÖRE. To contact,{" "}
          <span>
            <a className={styles.contactLink} href="tel:+905385709786">
              call +905385709786
            </a>
          </span>
          .
        </p>
      </div>
      <div className={styles.footerRight}>
        <h2>Call Us</h2>
        <h1>
          <span>
            <a className={styles.contactLinkBig} href="tel:+905385709786">
              444 0 ETO
            </a>
          </span>
        </h1>
        <div className={styles.socialMediaContainer}>
          <img src="svg/facebook.svg" width="37" height="37" />
          <img src="svg/instagram.svg" width="37" height="37" />
          <img src="svg/twitter.svg" width="37" height="37" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
