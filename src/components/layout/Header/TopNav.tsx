import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import styles from '../../../styles/layout/Header.scss';

interface Props {
  isLogin: boolean;
  userInfo: any | null;
  logout: () => void;
}

const TopNav: React.FC<Props> = ({ isLogin, userInfo, logout }) => {
  return (
    <div className={styles.TopNav}>
      <div className={styles.TopNavItems}>
        {isLogin ? (
          <React.Fragment>
            <a className={styles.TopNavButton} onClick={logout}>
              로그아웃
            </a>

            <a>
              <FontAwesomeIcon icon={faUser} /> {userInfo.username}
            </a>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link to="/login" className={styles.TopNavButton}>
              로그인
            </Link>
          </React.Fragment>
        )}
        <a className={styles.Facebook} href="https://www.facebook.com/Postech-SES-172843783448856/">
          <FontAwesomeIcon icon={faFacebook} /> Facebook
        </a>
      </div>
    </div>
  );
};

export default TopNav;
