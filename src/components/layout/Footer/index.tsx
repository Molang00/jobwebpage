import React from 'react';
import * as styles from '@src/styles/layout/Footer.scss';
//const image = require('@src/images/ses_logo.png');

const Footer: React.SFC = () => (
  <React.Fragment>
    <footer className={styles.Footer}>
      <div className={styles.Top}>
        <a href="http://povision.postech.ac.kr/">
          <span>POVI (동문기업 인턴십 프로그램)</span>
        </a>{' '}
        <span> &nbsp;|&nbsp; </span>{' '}
        <a href="http://www.cuop.kr/">
          <span>CUop (과기특성화대학 공동 프로그램)</span>
        </a>{' '}
        <span> &nbsp;|&nbsp; </span>{' '}
        <a href="http://yd-donga.com/">
          <span>청년드림센터 (인턴공고 전문사이트)</span>
        </a>
        <p>
          <a href="http://povision.postech.ac.kr/">POVI (동문기업 인턴십 프로그램)</a> <br />{' '}
          <a href="http://www.cuop.kr/">CUop (과기특성화대학 공동 프로그램)</a> <br />{' '}
          <a href="http://yd-donga.com/">청년드림센터 (인턴공고 전문사이트)</a>
        </p>
      </div>
      <div className={styles.Bottom}>
        <div className={styles.Logo}>{/*<img src={image} />*/}</div>
        <div className={styles.TextBox}>
          <div className={styles.Contact}>
            <span>학생지원팀(279-2432) &nbsp;|&nbsp; 학과 사무실 SES 담당 &nbsp;|&nbsp; ses-program@postech.ac.kr</span>
            <p>
              학생지원팀(279-2432)
              <br />
              학과 사무실 SES 담당
              <br />
              ses-program@postech.ac.kr
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
