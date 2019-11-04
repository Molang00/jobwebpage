import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../styles/components/Layout/Header.module.scss';
import { faEllipsisV, faAngleUp, faAngleDown, faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { className } from '../../../styles/styleUtil';
import * as subMenu from '../../../store/modules/subMenu';
import { MainMenu } from '../../../store/modules/mainMenu';

export interface StateToProps {
  activeMainMenu: MainMenu;
  alert: boolean;
  alertMessage: string;
  isLogin: boolean;
  username: string;
}

export interface HeaderState {
  mobileMenuOpen: boolean;
  mobileSubMenuOpen: boolean;
  mobileTopNavOpen: boolean;
}

export const HeaderFeatures = () => {
  const [activeMainMenu, setActiveMainMenu] = React.useState(MainMenu.JOBINFO);
  // const [alert, setAlert] = React.useState(false);
  // const [alertMessage, setAlertMessage] = React.useState(null);
  const [isLogin, setIsLogin] = React.useState(true);
  const [username, setUsername] = React.useState('jungwu');

  const [mobileTopNavOpen, setMobileTopNavOpen] = React.useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileTopNav = () => {
    setMobileTopNavOpen(!mobileTopNavOpen);
  };

  const closeMobileTopNav = () => {
    setMobileTopNavOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileSubMenu = (mainMenu: MainMenu) => {
    if (mainMenu === activeMainMenu) {
      setMobileSubMenuOpen(!mobileSubMenuOpen);
    } else {
      setActiveMainMenu(mainMenu);
      setMobileSubMenuOpen(true);
    }
  };

  const logout = () => {
    setIsLogin(false);
    setUsername('');
  };

  return (
    <React.Fragment>
      <header className={styles.Header}>
        <div className={styles.TopNav}>
          <div className={styles.TopNavItems}>
            {isLogin ? (
              <React.Fragment>
                <a className={styles.TopNavButton} onClick={logout}>
                  로그아웃
                </a>
                <a>
                  <FontAwesomeIcon icon={faUser} /> {username}
                </a>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link to="/company_particiate">
                  <a className={styles.TopNavButton}>기관 참가 신청</a>
                </Link>
                <Link to="/login">
                  <a className={styles.TopNavButton}>로그인</a>
                </Link>
              </React.Fragment>
            )}
            <a className={styles.Facebook} href="https://www.facebook.com/Postech-SES-172843783448856">
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </a>
          </div>
        </div>
        <div className={styles.MobileTopNav}>
          <div className={styles.MobileTopNavLeftBox}>
            <a href="https://www.facebook.com/Postech-SES-172843783448856">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
          <Link to="/sesinfo/whats_ses">
            <a className={styles.MobileLogo}>POSTECH SES</a>
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
                    {username}
                  </a>
                  <a onClick={logout}>로그아웃</a>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <a>로그인</a>
                  <a>기관 참가 신청</a>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
        <nav className={styles.BottomNav}>
          <Link to="/jobinfo/greetings">
            <a className={styles.Logo}>취업 및 진로지원센터</a>
          </Link>
          <a className={styles.MobileMenuButton} onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faBars} /> MENU
          </a>
          <div className={mobileMenuOpen ? className(styles.BottomNavItems, styles.open) : styles.BottomNavItems}>
            <div className={activeMainMenu === MainMenu.JOBINFO ? styles.active : ''}>
              <div>
                센터 소개
                <a onClick={() => toggleMobileSubMenu(MainMenu.JOBINFO)}>
                  <FontAwesomeIcon
                    icon={activeMainMenu == MainMenu.JOBINFO && mobileSubMenuOpen ? faAngleUp : faAngleDown}
                  />
                </a>
              </div>
              <div
                className={
                  activeMainMenu === MainMenu.JOBINFO && mobileSubMenuOpen
                    ? className(styles.BottomNavSubItems, styles.active)
                    : styles.BottomNavSubItems
                }
              >
                {subMenu.menuList[0].map((subMenuItem, index) => (
                  <a key={index}>{subMenuItem.name}</a>
                ))}
              </div>
            </div>
            <div className={activeMainMenu === MainMenu.COURSE ? styles.active : ''}>
              <div>
                진로
                <a onClick={() => toggleMobileSubMenu(MainMenu.COURSE)}>
                  <FontAwesomeIcon
                    icon={activeMainMenu == MainMenu.COURSE && mobileSubMenuOpen ? faAngleUp : faAngleDown}
                  />
                </a>
              </div>
              <div
                className={
                  activeMainMenu === MainMenu.COURSE && mobileSubMenuOpen
                    ? className(styles.BottomNavSubItems, styles.active)
                    : styles.BottomNavSubItems
                }
              >
                {subMenu.menuList[1].map((subMenuItem, index) => (
                  <a key={10 + index}>{subMenuItem.name}</a>
                ))}
              </div>
            </div>
            <div className={activeMainMenu === MainMenu.GETJOB ? styles.active : ''}>
              <div>
                취업
                <a onClick={() => toggleMobileSubMenu(MainMenu.GETJOB)}>
                  <FontAwesomeIcon
                    icon={activeMainMenu == MainMenu.GETJOB && mobileSubMenuOpen ? faAngleUp : faAngleDown}
                  />
                </a>
              </div>
              <div
                className={
                  activeMainMenu === MainMenu.GETJOB && mobileSubMenuOpen
                    ? className(styles.BottomNavSubItems, styles.active)
                    : styles.BottomNavSubItems
                }
              >
                {subMenu.menuList[2].map((subMenuItem, index) => (
                  <a key={20 + index}>{subMenuItem.name}</a>
                ))}
              </div>
            </div>
            <div className={activeMainMenu === MainMenu.SES ? styles.active : ''}>
              <div>
                SES
                <a onClick={() => toggleMobileSubMenu(MainMenu.SES)}>
                  <FontAwesomeIcon
                    icon={activeMainMenu == MainMenu.SES && mobileSubMenuOpen ? faAngleUp : faAngleDown}
                  />
                </a>
              </div>
              <div
                className={
                  activeMainMenu === MainMenu.SES && mobileSubMenuOpen
                    ? className(styles.BottomNavSubItems, styles.active)
                    : styles.BottomNavSubItems
                }
              >
                {subMenu.menuList[3].map((subMenuItem, index) => (
                  <a key={30 + index}>{subMenuItem.name}</a>
                ))}
              </div>
            </div>
            <div className={activeMainMenu === MainMenu.BBS ? styles.active : ''}>
              <div>
                게시판
                <a onClick={() => toggleMobileSubMenu(MainMenu.BBS)}>
                  <FontAwesomeIcon
                    icon={activeMainMenu == MainMenu.BBS && mobileSubMenuOpen ? faAngleUp : faAngleDown}
                  />
                </a>
              </div>
              <div
                className={
                  activeMainMenu === MainMenu.BBS && mobileSubMenuOpen
                    ? className(styles.BottomNavSubItems, styles.active)
                    : styles.BottomNavSubItems
                }
              >
                {subMenu.menuList[4].map((subMenuItem, index) => (
                  <a key={40 + index}>{subMenuItem.name}</a>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};
