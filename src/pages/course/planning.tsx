import React from 'react';
import Main from '../../components/layout/Main';
import commonStyles from '../../styles/common.module.scss';
import planningImg from '../../images/planning.jpg';

const PlanningPage: React.FC = () => {
  return (
    <Main title={'단계별 진로설계'}>
      <React.Fragment>
        <div className="p-col-12 p-lg-6">
          <div className={commonStyles.TextBox}>
            <h2> 단계별 진로설계 </h2>
            <img src={planningImg} alt="planningImg" />
            <p>
              대학생활을 자신의 적성에 적합한 진로 설계에 꼭 필요한 직무 역량을 확인하고, 체계적으로 준비하는 기회로
              활용해야 합니다.
            </p>
            <p>
              졸업 후 진로에 필요한 역량을 스스로 개발하고, 자신의 특성과 능력에 적합한 진로선택을 할 수 있도록 학년
              단계별 자기 주도적 진로 및 취업 역량강화를 위한 노력이 요구됩니다.
            </p>
          </div>
        </div>
      </React.Fragment>
    </Main>
  );
};

export default PlanningPage;
