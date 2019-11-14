import * as React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../../store/store';
import Content from './Content';
import styles from '../../../styles/components/Layout/Main.module.scss';
import SideNav from './SideNav';
import { MainMenu } from '../../../store/modules/mainMenu';
import { SubMenu, SubMenuItem, menuList } from '../../../store/modules/subMenu';

interface Props {
  children: JSX.Element;
  title: string;
}

const Main: React.SFC<Props> = ({ children }) => {
  const { mainMenu, subMenu } = useSelector((state: RootState) => state);

  return (
    <React.Fragment>
      <div className={styles.Main}>
        <div className={styles.ContentArea}>
          <Content>{children}</Content>
        </div>
        <div className={styles.SideNavArea}>
          <SideNav activeMainMenu={mainMenu.activeMainMenu} activeSubMenu={subMenu.activeSubMenu} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
