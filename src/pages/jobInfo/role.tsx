import React from 'react';
import Main from '../../components/layout/Main';
import commonStyles from '../../styles/common.module.scss';
import roleImg from '../../images/role.jpg';

const GreetingPage: React.FC = () => {
  return (
    <Main title={'역할'}>
      <React.Fragment>
        <div className="p-col-12 p-lg-6">
          <h2> 대학의 취업 및 진로지원 Hub 역할 수행 </h2>
          <div className={commonStyles.TextBox}>
            <li>
              대학 내 관련 부서 및 학과, 총학생회 간 역할 분담과 협업을 통해 취업 및 진로 탐색 지원
              <br />
              <img src={roleImg} alt="roleImg" />
            </li>
            <li>취업 및 진로지원센터를 중심으로 진로 및 취업 지원체계 구축</li>
            <li>학년 단계별 자기주도적 경력 개발이 가능하도록 외부프로그램을 도입하여 역량 강화를 유도</li>
            <li>
              이공계 연구중심대학의 특성상 졸업생의 약 70%가 대학원에 진학하는 실정을 반영하여, 취업과 함께 진로탐색
              프로그램을 운영
            </li>
            <li>교과/비교과 진로탐색 프로그램과 SES를 비롯한 진로체험 등 경력개발 위주의 프로그램으로 특화</li>
          </div>
          <h2> 진로취업 준비와 역량강화에 필요한 지원 및 정보 제공 </h2>
          <div className={commonStyles.TextBox}>
            <li>직업정보시스템 등 주요 진로취업 기관 사이트 홈페이지 연결 다양한 정보 전달 및 공유</li>
            <li>진로탐색의 강화로 학생 자신의 적성과 역량에 적합한 Career Path 설계 가능</li>
            <li>직무능력중심의 블라인드 채용 확대에 따른 취업 준비 및 대응 유도</li>
            <li>취업·창업·유학 관련 정보 및 자료 제공</li>
          </div>
          <h2> 졸업생 진로 현황 등 통계 관리 </h2>
          <div className={commonStyles.TextBox}>
            <li>연도별 졸업생 현황, 동문 기업 현황</li>
            <li>졸업생 진로(취업 및 진학) 현황</li>
            <li>고등교육기관 졸업자 취업통계 조사 (취업자, 교내취업자, 진학자, 해외대학진학자)</li>
            <li>대학알리미 대학정보공시센터 졸업생 취업률, 진학률, 유지취업률 확인</li>
          </div>
        </div>
      </React.Fragment>
    </Main>
  );
};

export default GreetingPage;
