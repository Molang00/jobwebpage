import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { UserSchema, Maybe, UserRole } from '@postech-ses/job-core';

import styles from '../../../styles/components/Layout/Header.module.scss';

interface Props {
  isLogin: boolean;
  userInfo: UserSchema | null;
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
            {Maybe.fromNullable(userInfo)
              .map(user => user.role)
              .getOrElse(UserRole.COMPANY) == UserRole.ADMIN ? (
              <Link to="/approveManage" className={styles.TopNavButton}>
                승인관리
              </Link>
            ) : null}

            <a>
              <FontAwesomeIcon icon={faUser} />{' '}
              {Maybe.fromNullable(userInfo)
                .map(user => user.name)
                .getOrElse('')}
            </a>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link to="/sign-up" className={styles.TopNavButton}>
              회원가입
            </Link>
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
