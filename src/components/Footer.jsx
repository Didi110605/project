import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <h2>Contact</h2>
      <div className={styles['contact-grid']}>
        <div className={styles['contact-card']}>
          <h3>Phone</h3>
          <p>+7 (499) 350-66-04</p>
        </div>
        <div className={styles['contact-card']}>
          <h3>Address</h3>
          <p>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</p>
        </div>
        <div className={styles['contact-card']}>
          <h3>Socials</h3>
          
        </div>
        <div className={styles['contact-card']}>
          <h3>Working Hours</h3>
          <p>24 hours a day</p>
        </div>
      </div>
      <div className={styles['iframe-container']}>
        <iframe
          src="https://maps.google.com/maps?q=55.715742,37.635403&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
}

export default Footer;