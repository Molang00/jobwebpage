import React from 'react';
import Main from '../../components/layout/Main';
import commonStyles from '../../styles/common.module.scss';
import counselingImg from '../../images/counseling.jpg';

const CounselingPage: React.FC = () => {
  return (
    <Main title={'심리검사 및 진로상담'}>
      <React.Fragment>
        <div className="p-col-12">
          <div className={commonStyles.TextBox}>
            <ul>
              <li>
                <h2> 직업심리검사 및 진로상담 </h2>
              </li>
            </ul>
            <div className={commonStyles.ImageContainer}>
              <img style={{ width: '100%' }} src={counselingImg} alt="counselingImg" />
            </div>
            <ul>
              <p style={{ lineHeight: '26px' }}>
                개인의 능력과 흥미, 성격 등의 심리적인 특성들이 각 직업에서 요구하는 능력수준 및 특성에 얼마나
                적합한지를 과학적인 방법으로 측정하여 보다 성공 가능성이 높고 만족할만한 직업들을 탐색하도록
                도와드립니다.
              </p>
            </ul>
          </div>
        </div>
      </React.Fragment>
    </Main>
  );
};

export default CounselingPage;
