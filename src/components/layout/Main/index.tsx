import * as React from 'react';
import Content from './Content';
import styles from '../../../styles/components/Layout/Main/Content.module.scss';
import mainStyle from '../../../styles/components/Layout/Main.module.scss';

interface Props {
  children: JSX.Element;
  title: string;
}

const Main: React.SFC<Props> = ({ children, title }) => {
  return (
    <React.Fragment>
      <title>{title}</title>
      <div className={mainStyle.Main}>
        <div className={styles.ContentHeader}>
          <div className={styles.Content}>
            <Content>{children}</Content>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
