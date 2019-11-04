import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import { className } from '../../../styles/styleUtil';

import styles from '../../../styles/components/Layout/Header.module.scss';

interface Props {
  isLogin: boolean;
  userInfo: any | null;
  mobileTopNavOpen: boolean;
  closeMobileTopNav: () => void;
  toggleMobileTopNav: () => void;
  routeToOtherMenu: (path: string) => void;
  logout: () => void;
}

const MobileTopNav: React.FC<Props> = ({
  isLogin,
  userInfo,
  mobileTopNavOpen,
  closeMobileTopNav,
  toggleMobileTopNav,
  routeToOtherMenu,
  logout
}) => {
  return (
    <div className={styles.MobileTopNav}>
      <div className={styles.MobileTopNavLeftBox}>
        <a href="https://www.facebook.com/Postech-SES-172843783448856/">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
      <Link to="/sesinfo/whats_ses" className={styles.MobileLogo}>
        POSTECH SES
      </Link>
      <div className={styles.MobileTopNavRightBox} onMouseLeave={closeMobileTopNav}>
        <a onClick={toggleMobileTopNav}>
          <FontAwesomeIcon icon={faEllipsisV} />
        </a>
        <div
          className={
            mobileTopNavOpen
              ? className(styles.MobileTopNavRightBoxSubItems, styles.open)
              : styles.MobileTopNavRightBoxSubItems
          }
        >
          {isLogin ? (
            <React.Fragment>
              <a>
                <FontAwesomeIcon icon={faUser} />
                &nbsp;
                {userInfo.username}
              </a>
              <a onClick={logout}>로그아웃</a>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <a onClick={() => routeToOtherMenu('/login')}>로그인</a>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileTopNav;
