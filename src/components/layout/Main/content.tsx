import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../store/store';
import { MainMenu } from '../../../store/modules/mainMenu';
import { SubMenu, menuList } from '../../../store/modules/subMenu';
import { className } from '../../../styles/styleUtil';
import styles from '../../../styles/components/Layout/Main/Content.module.scss';
import commonStyles from '../../../styles/common.module.scss';

interface StateToProps {
  activeMainMenu: MainMenu;
  activeSubMenu: SubMenu;
}

const mapStateToProps = (state: RootState) => ({
  activeMainMenu: state.mainMenu.activeMainMenu,
  activeSubMenu: state.subMenu.activeSubMenu
});

export interface ContentProps extends StateToProps {
  children: JSX.Element;
}

export class Content extends React.Component<ContentProps> {
  public setHead = () => {
    const subMenuList = menuList[this.props.activeMainMenu];
    const subMenu = subMenuList[this.props.activeSubMenu % 10];
    return subMenu ? subMenu.name : subMenuList[0].name;
  };

  public render() {
    return (
      <div className={className(styles.Content, 'p-grid', 'p-justify-between')}>
        <div className="p-col-12">
          <h1 className={commonStyles.PageHeader}>
            <span>| </span>
            {this.setHead()}
          </h1>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Content);
