import React from 'react';
import Main from '../../components/layout/Main';
import commonStyles from '../../styles/common.module.scss';
import organizationImg from '../../images/organization.png';

const GreetingPage: React.FC = () => {
  return (
    <Main title={'조직'}>
      <React.Fragment>
        <div className="p-col-12">
          <div className={commonStyles.TextBox}>
            <ul>
              <li>
                <h2> 설립목적 </h2>
              </li>
              <ul>
                <li>
                  <p>전담조직을 통한 학생의 진로, 취업, 창업에 대한 토탈 지원체계 필요</p>
                </li>
                <li>
                  <p>양질의 다양한 프로그램 개발 및 지원</p>
                </li>
                <li>
                  <p>재학생이 대부분 경험하는 전교적 인턴십 프로그램 운영</p>
                </li>
              </ul>
            </ul>
          </div>
          <div className={commonStyles.ImageContainer}>
            <img
              style={{ width: '100%' }}
              src={organizationImg}
              alt="organizationImg"
              className={commonStyles.ImageBox}
            />
          </div>
          <div className={commonStyles.TextBox}>
            <ul>
              <li>
                <h2> 취업 및 진로 부문 업무 분담 </h2>
              </li>
            </ul>
          </div>
          <div className={commonStyles.TableBox}>
            <table>
              <tbody>
                <tr>
                  <th>담당부서</th>
                  <th>주요업무</th>
                  <th>업무내용</th>
                </tr>
                <tr>
                  <td rowSpan={4}>
                    취업및진로
                    <br /> 지원센터
                    <br /> (학생지원팀)
                  </td>
                  <td>총괄 지원</td>
                  <td>취업 및 진로지원센터 업무 총괄</td>
                </tr>
                <tr>
                  <td rowSpan={3}>취업진로지원</td>
                  <td>채용안내, 추천, 채용상담/설명회, Job &amp; Career Fair 개최, 취업통계 관리, 졸업생 진로 관리</td>
                </tr>
                <tr>
                  <td>SES인턴십 프로그램 기획 및 운영</td>
                </tr>
                <tr>
                  <td>외국인 학생 진로지원 및 관리</td>
                </tr>
                <tr>
                  <td>상담센터</td>
                  <td>상담 지원</td>
                  <td>적성/인성검사, 진로상담(집단/개인)</td>
                </tr>
                <tr>
                  <td>교육혁신센터</td>
                  <td>교과목 지원</td>
                  <td>리더십, 진로, 인턴십 교과목 운영</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={commonStyles.TextBox}>
            <ul>
              <li>
                <h2> 창업부문 업무분담 </h2>
              </li>
            </ul>
          </div>
          <div className={commonStyles.TableBox}>
            <table>
              <tbody>
                <tr>
                  <th>담당부서</th>
                  <th>주요업무</th>
                  <th>업무내용</th>
                </tr>
                <tr>
                  <td>기업가정신센터</td>
                  <td>
                    Pre-Startup
                    <br /> 지원
                  </td>
                  <td>
                    기업가정신 융합부전공 개발 운영, 기업가정신/기술창업 교육 모듈 콘텐츠 개발
                    <br />
                    全주기 창업 지원 및 교육 프로그램 운영, 창업정책 연구지원
                  </td>
                </tr>
                <tr>
                  <td>기술사업화팀</td>
                  <td rowSpan={3}>
                    Startup
                    <br /> 지원
                  </td>
                  <td>교원/학생 창업지원, 지식재산 출원 및 등록, 기술이전 및 사업화지원, 실용화 지원</td>
                </tr>
                <tr>
                  <td>학생창업팀</td>
                  <td>
                    창업교육, 창업문화 확산 및 유망스타트업 발굴, 창업관련 정부지원사업 참여,
                    <br /> 포스텍기업협의회 운영
                  </td>
                </tr>
                <tr>
                  <td>포스텍기술지주</td>
                  <td>포스텍 벤처 펀드 조성, 창업보육센터 운영, 투자 및 창업 후속연계 지원</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    </Main>
  );
};

export default GreetingPage;
