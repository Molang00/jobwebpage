import * as React from "react";
import { useHistory } from "react-router";
import { map, pipe } from "ramda";

import { MainMenu } from "../../../store/modules/mainMenu";
import { SubMenu, SubMenuItem, menuList } from "../../../store/modules/subMenu";

import styles from "../../../styles/components/Layout/Main/SideNav.module.scss";

interface Props {
  activeMainMenu: MainMenu;
  activeSubMenu: SubMenu;
}

interface SubMenuJSXItem extends SubMenuItem {
  route: () => void;
}

const getSubMenuJSXList = (subMenu: SubMenu) => (
  subMenuList: SubMenuJSXItem[]
) => {
  const subMenuNumber = subMenu % 10;
  return subMenuList.map((subMenu, index) => {
    if (index === subMenuNumber) {
      return (
        <div className={styles.active} key={index}>
          <a>
            {subMenu.name}
          </a>
        </div>
      );
    } else {
      return (
        <div onClick={subMenu.route} key={index}>
          <a>
            {subMenu.name}
          </a>
        </div>
      );
    }
  });
};

const SideNav: React.FC<Props> = ({ activeMainMenu, activeSubMenu }) => {
  const history = useHistory();

  const renderSubMenuButtonList = pipe(
    map((subMenu: SubMenuItem) => ({
      ...subMenu,
      route: () => {
        history.push(subMenu.pathname);
      }
    })),
    getSubMenuJSXList(activeSubMenu)
  );

  return (
    <div className={styles.SideNav}>
      {renderSubMenuButtonList(menuList[activeMainMenu])}
    </div>
  );
};

export default SideNav;
