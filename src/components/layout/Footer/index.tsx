import React from 'react';
import styles from '../../../styles/components/Layout/Footer.module.scss';

const Footer: React.FC = () => (
  <React.Fragment>
    <footer className={styles.Footer}>
      <div className={styles.Top}>
        <a href="http://www.postech.ac.kr/privacy-policy/">
          <span>개인정보처리방침</span>
        </a>
        <p>
          <a href="http://www.postech.ac.kr/privacy-policy/">개인정보처리방침</a> <br />
        </p>
      </div>
      <div className={styles.Bottom}>
        <div className={styles.Logo}>
          <img src={require('../../../images/cdc_logo.png')} alt="cdc_logo" />
        </div>
        <div className={styles.TextBox}>
          <div className={styles.Contact}>
            <span>취업 및 진로지원센터 (054-279-2901) &nbsp;|&nbsp; POS-JOB@POSTECH.AC.KR</span>
            <p>
              취업 및 진로지원센터 (054-279-2901)
              <br />
              POS-JOB@POSTECH.AC.KR
            </p>
          </div>
          <div className={styles.Copyright}>
            <p>© COPYRIGHT 2018 Pohang University of Science and Technology. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  </React.Fragment>
);

export default Footer;
