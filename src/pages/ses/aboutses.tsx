import React from 'react';
import commonStyles from '../../styles/common.module.scss';
import Main from '../../components/layout/Main';
import ses1Img from '../../images/ses1.jpg';
import ses2Img from '../../images/ses2.png';

const AboutSesPage: React.FC = () => {
  return (
    <Main title={'당신의 미래를 SES로 준비하세요!'}>
      <React.Fragment>
        <div className="p-col-12 p-lg-6">
          <div className={commonStyles.TextBox}>
            <ul>
              <li>
                <h2> SES 소개</h2>
              </li>
            </ul>
            <div className="p-col-12 p-lg-12">
              <div className={commonStyles.HeaderBox}>
                <p>
                  4차 산업혁명 대비, 전공지식과 현장경험을 결합한 새로운 교육 시스템
                  <br />
                  <br />
                  학업 및 연구 동기를 부여하고, 실무역량을 보유한 창의적 인재로 성장
                </p>
              </div>
            </div>
            <div className={commonStyles.TextImageContainer}>
              <div className={commonStyles.ImageContainer}>
                <img src={ses1Img} alt="ses1Img" />
              </div>
              <ul>
                <div className="content">
                  <p>
                    미래사회가 필요로 하는 산업과 연구현장에 대한 경험, 복합적 문제해결 역량과 창의성을 지닌 글로벌
                    리더를 양성하기 위해서는 학교의 이론적 지식과 연구참여만으로는 한계가 있습니다.
                  </p>
                  <p>
                    POSTECH SES(Summer Experience in Society) 프로그램은 학생들이 보다 넓은 시각으로 세상을 바라보고
                    미래를 설계하는 데 도움을 주기 위해 2016학년도 여름방학부터 실시하고 있는 새로운 차원의
                    대학교육입니다.
                  </p>
                  <p>
                    학생들은 산업 및 연구 현장에서의인턴 활동을 통해 교실에서 배운 이론과 지식이 실무에 어떻게
                    적용되는지를 체득하고, 커뮤니케이션과 매니지먼트 스킬을 익히고, 사회를 보는 시야를 확장하며, 미래
                    발전에 필요한 네트워크를 구축함으로써 글로벌 리더로 성장할 수 있습니다.
                  </p>
                </div>
              </ul>
            </div>
            <div className={commonStyles.ImageContainer}>
              <img src={ses2Img} alt="ses2Img" />
            </div>
          </div>
        </div>
      </React.Fragment>
    </Main>
  );
};

export default AboutSesPage;
