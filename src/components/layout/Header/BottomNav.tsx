import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';

import { MainMenu } from '../../../store/modules/mainMenu';
import { SubMenuItem, SubMenu, menuList } from '../../../store/modules/subMenu';
import { className } from '../../../styles/styleUtil';

import styles from '../../../styles/layout/Header.scss';

interface Props {
  mobileMenuOpen: boolean;
  mobileSubMenuOpen: boolean;
  isLogin: boolean;
  userInfo: any | null;
  activeMainMenu: MainMenu;
  activeSubMenu: SubMenu;

  routeToMainMenu: (pathname: string) => void;
  routeToSubMenu: (pathname: string) => void;
  toggleMobileMenu: () => void;
  toggleMobileSubMenu: (targetMainMenu: MainMenu) => void;
}

const BottomNav: React.FC<Props> = ({
  mobileMenuOpen,
  mobileSubMenuOpen,
  activeMainMenu,
  routeToMainMenu,
  routeToSubMenu,
  toggleMobileMenu,
  toggleMobileSubMenu
}) => {
  const renderMainMenuButton = (menuWord: string, mainMenu: MainMenu, subMenuList: SubMenuItem[]) => {
    return (
      <div className={activeMainMenu === mainMenu ? styles.active : ''}>
        <div onClick={() => routeToMainMenu(subMenuList[0].pathname)}>
          {menuWord}
          <a onClick={() => toggleMobileSubMenu(mainMenu)}>
            <FontAwesomeIcon icon={activeMainMenu === mainMenu && mobileSubMenuOpen ? faAngleUp : faAngleDown} />
          </a>
        </div>
        <div
          className={
            activeMainMenu === mainMenu && mobileSubMenuOpen
              ? className(styles.BottomNavSubItems, styles.active)
              : styles.BottomNavSubItems
          }
        >
          {subMenuList.map((subMenuItem, index) => (
            <a key={index} onClick={() => routeToSubMenu(subMenuItem.pathname)}>
              {subMenuItem.name}
            </a>
          ))}
        </div>
      </div>
    );
  };

  return (
    <nav className={styles.BottomNav}>
      <Link to="/" className={styles.Logo}>
        <span>
          취업 및 진로
          <br />
          지원센터
        </span>
      </Link>
      <a className={styles.MobileMenuButton} onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={faBars} /> MENU
      </a>
      <div className={mobileMenuOpen ? className(styles.BottomNavItems, styles.open) : styles.BottomNavItems}>
        {renderMainMenuButton('센터 소개', MainMenu.JOBINFO, menuList[MainMenu.JOBINFO])}
        {renderMainMenuButton('진로', MainMenu.COURSE, menuList[MainMenu.COURSE])}
        {renderMainMenuButton('취업', MainMenu.GETJOB, menuList[MainMenu.GETJOB])}
        {renderMainMenuButton('SES', MainMenu.SES, menuList[MainMenu.SES])}
        {renderMainMenuButton('게시판', MainMenu.BBS, menuList[MainMenu.BBS])}
      </div>
    </nav>
  );
};

export default BottomNav;
