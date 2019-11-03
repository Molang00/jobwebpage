import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { RootState } from '../../../store/store';
import { mainMenuActions, MainMenu } from '../../../store/modules/mainMenu';
import TopNav from './TopNav';
import MobileTopNav from './MobileTopNav';
import BottomNav from './BottomNav';

import styles from '../../../styles/components/Layout/Header.module.scss';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = React.useState(false);
  const [mobileTopNavOpen, setMobileTopNavOpen] = React.useState(false);
  const { mainMenu, subMenu } = useSelector((state: RootState) => state);
  const [auth, setAuth] = React.useState({ isLogin: true, userInfo: { username: 'jeungwoo' } });
  const dispatch = useDispatch();
  const history = useHistory();

  const routeToMainMenu = (pathname: string) => {
    history.push(pathname);
  };

  const toggleMobileSubMenu = (targetMainMenu: MainMenu) => {
    if (targetMainMenu === mainMenu.activeMainMenu) {
      setMobileSubMenuOpen(!mobileSubMenuOpen);
    } else {
      dispatch(mainMenuActions.setActiveMainMenu(targetMainMenu));
      setMobileSubMenuOpen(true);
    }
  };

  const routeToSubMenu = (pathname: string) => {
    setMobileMenuOpen(false);

    history.push(pathname);
  };

  const routeToOtherMenu = (pathname: string) => {
    setMobileTopNavOpen(false);
    history.push(pathname);
  };

  const logout = () => {
    setAuth({
      isLogin: false,
      userInfo: {
        username: ''
      }
    });
  };

  return (
    <React.Fragment>
      <header className={styles.Header}>
        <TopNav isLogin={auth.isLogin} userInfo={auth.userInfo} logout={logout} />
        <MobileTopNav
          isLogin={auth.isLogin}
          userInfo={auth.userInfo}
          mobileTopNavOpen={mobileTopNavOpen}
          closeMobileTopNav={() => {
            setMobileTopNavOpen(false);
          }}
          toggleMobileTopNav={() => {
            setMobileTopNavOpen(!mobileTopNavOpen);
          }}
          routeToOtherMenu={routeToOtherMenu}
          logout={logout}
        />
        <BottomNav
          mobileMenuOpen={mobileMenuOpen}
          mobileSubMenuOpen={mobileSubMenuOpen}
          isLogin={auth.isLogin}
          userInfo={auth.userInfo}
          activeMainMenu={mainMenu.activeMainMenu}
          activeSubMenu={subMenu.activeSubMenu}
          routeToMainMenu={routeToMainMenu}
          routeToSubMenu={routeToSubMenu}
          toggleMobileMenu={() => {
            setMobileMenuOpen(!mobileMenuOpen);
          }}
          toggleMobileSubMenu={toggleMobileSubMenu}
        />
      </header>
    </React.Fragment>
  );
};

export default Header;
