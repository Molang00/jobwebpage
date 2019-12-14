import React from 'react';
import { connect } from 'react-redux';
import styles from '../../../styles/components/Layout/ImgBox.module.scss';
import { MainMenu } from '../../../store/modules/mainMenu';
import { RootState } from '../../../store/store';
const jobInfoImage = require('../../../images/myses.jpg');
const courseImage = require('../../../images/myses.jpg');
const getJobImage = require('../../../images/myses.jpg');
const sesInfoImage = require('../../../images/myses.jpg');
const bbsImage = require('../../../images/myses.jpg');
const defaultImage = require('../../../images/myses.jpg');

const images = [jobInfoImage, courseImage, getJobImage, sesInfoImage, bbsImage, defaultImage];

interface StateToProps {
  activeMainMenu: MainMenu;
}

const mapStateToProps = (state: RootState) => ({
  activeMainMenu: state.mainMenu.activeMainMenu
});

export type ImgBoxProps = StateToProps;

export const ImgBox: React.SFC<ImgBoxProps> = ({ activeMainMenu }) => {
  return (
    <React.Fragment>
      <div className={styles.ImgBox}>
        <img src={images[activeMainMenu]} alt="activeMainMenu" />
      </div>
    </React.Fragment>
  );
};

export default connect(mapStateToProps)(ImgBox);
