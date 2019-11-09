import React from 'react';
import Main from '../../components/layout/Main';
import commonStyles from '../../styles/common.module.scss';
import kcesaImg from '../../images/kcesa.jpg';

const KcesaPage: React.FC = () => {
  return (
    <Main title={'핵심역량 진단'}>
      <React.Fragment>
        <div className="p-col-12 p-lg-6">
          <div className={commonStyles.TextBox}>
            <h2> 핵심역량 진단 </h2>
            <p>대학생 핵심역량진단 (K-CESA)</p>
            <p>
              핵심역량은 직종이나 직위에 상관없이 대부분의 직종에서 직무를 성공적으로 수행하는데 공통적으로 요구되는
              지식, 기술, 태도 등을 의미합니다.
            </p>
            <p>
              교육과학기술부와 한국직업능력개발원의 주도하에 한국교육평가학회와 다수의 전문가의 지원을 받아 개발된 진단
              도구로써, 의사소통역량, 글로벌역량, 대인관계역량, 종합적 사고력, 자원·정보·기술의 활용역량, 자기관리역량
              등 6개 영역에서 대학생들의 핵심능력 및 역량 정도를 진단하여 취업능력 제고를 위한 자기계발 가이드를
              제공합니다.
            </p>
            <img src={kcesaImg} alt="kcesaImg" />
            <p>핵심역량진단은 대학에 사전 신청하여 진단 대상자로 등록되어야만 이용할 수 있습니다.</p>
            <p>
              ⇒ <a href="https://www.kcesa.re.kr/index.do">관련 사이트 바로가기 클릭</a>
            </p>
          </div>
        </div>
      </React.Fragment>
    </Main>
  );
};

export default KcesaPage;
