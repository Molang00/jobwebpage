import React from 'react';
import Main from '../../components/layout/Main';
import commonStyles from '../../styles/common.module.scss';

const GreetingPage: React.FC = () => {
  return (
    <Main title={'인사말'}>
      <React.Fragment>
        <div className="p-col-12">
          <div className={commonStyles.TextBox}>
            <ul>
              <li>
                <h2> 인사말 </h2>
              </li>
              <p>안녕하십니까?</p>
              <p style={{ lineHeight: '26px' }}>
                우리 대학에서는 학생들이 보다 넓은 시각으로 세상을 바라보고 미래를 설계하는 데 도움을 주기 위해
                2016학년도 여름방학부터 POSTECH SES(Summer Experience in Society) 프로그램을 실시하고 있으며, 취업과
                창업, 유학 관련 정보 제공 및 기업체 설명회, 채용박람회 개최 등 학생들에게 본부 및 학과차원의 조직적인
                취업 및 진로지원 프로그램을 마련하여 진로설계에 기반이 되는 서비스를 제공하고자 노력하고 있습니다.
              </p>
              <p style={{ lineHeight: '26px' }}>
                우리 대학은 연구중심대학으로서 졸업생의 다수가 대학원에 진학하고 있어 취업률은 낮습니다. 최근에는 취업과
                창업에 관심을 갖는 졸업생이 증가하고 있는 추세입니다.
              </p>
              <p style={{ lineHeight: '26px' }}>
                취업 및 진로지원센터 홈페이지는 학생 여러분이 자신의 적성과 능력에 맞는 진로를 스스로 설계하고 개척하는
                역량 함양을 목표로, 좋은 일자리를 찾아 행복하고 보람차게 일하는데 필요한 유용한 정보를 제공하기 위해
                노력하겠습니다.
              </p>
              <p>감사합니다.</p>
            </ul>
          </div>
        </div>
      </React.Fragment>
    </Main>
  );
};

export default GreetingPage;
