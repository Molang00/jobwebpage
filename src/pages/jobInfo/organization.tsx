import React from 'react';
import commonStyles from '../../styles/common.module.scss';
import organizationImg from '../../images/organization.png';

const GreetingPage: React.FC = () => {
  return (
    <React.Fragment>
      <div className="p-col-12 p-lg-6">
        <div className={commonStyles.TextBox}>
          <h2> 설립목적 </h2>
          <li>
          전담조직을 통한 학생의 진로, 취업, 창업에 대한 토탈 지원체계 필요
          </li>
          <li>
          양질의 다양한 프로그램 개발 및 지원
          </li>
          <li>
          재학생이 대부분 경험하는 전교적 인턴십 프로그램 운영
          </li>
        </div>
        <img src={organizationImg}/>
        <div className={commonStyles.TextBox}>
          <h2> 취업 및 진로 부문 업무분담 </h2>
        </div>
        <div className={commonStyles.TextBox}>
          <h2> 창업부문 업무분담 </h2>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GreetingPage;
