import React from 'react';
import Main from '../../components/layout/Main';
import commonStyles from '../../styles/common.module.scss';

const GuidePage: React.FC = () => {
  return (
    <Main title={'인턴십 프로그램'}>
      <React.Fragment>
        <div className="p-col-12 p-lg-6">
          <div className={commonStyles.TextBox}>
            <ul>
              <li>
                <h2>진로 및 취업지원 사이트</h2>
              </li>
            </ul>
          </div>
          <div className={commonStyles.TableBox}>
            <table>
              <tbody>
                <tr>
                  <th>URL명</th>
                  <th>운영주체</th>
                  <th>특징 및 제공 정보</th>
                </tr>
                <tr>
                  <td>
                    WORKNET (워크넷)
                    <br /> (<a href="https://www.work.go.kr/">https://www.work.go.kr</a>)
                  </td>
                  <td>
                    고용노동부/
                    <br /> 한국고용정보원
                  </td>
                  <td>
                    대한민국 모든 일자리, 진로 및 취업정보
                    <br /> 채용정보, 취업상담, 취업가이드
                  </td>
                </tr>
                <tr>
                  <td>
                    CareerNet (커리어넷)
                    <br /> (<a href="https://www.career.go.kr/">https://www.career.go.kr</a>)
                  </td>
                  <td>
                    교육부/
                    <br /> 한국직업능력개발원
                  </td>
                  <td>
                    진로정보망 커리어넷
                    <br /> 진로심리검사, 진로상담, 진로동영상…
                  </td>
                </tr>
                <tr>
                  <td>
                    RND JOB (알앤디잡)
                    <br /> (<a href="https://www.mdjob.or.kr/">https://www.rndjob.or.kr</a>)
                  </td>
                  <td>
                    과학기술정보통신부/
                    <br /> 한국산업기술진흥협회
                  </td>
                  <td>
                    이공계인력중계센터
                    <br /> 구인/구직정보, 채용박람회, 직무적성검사
                  </td>
                </tr>
                <tr>
                  <td>
                    JOB-ALIO (잡알리오)
                    <br /> (<a href="https://job.alio.go.kr/">https://job.alio.go.kr</a>)
                  </td>
                  <td>기획재정부</td>
                  <td>
                    공공기관 채용정보
                    <br /> 공공기관 채용정보박람회
                  </td>
                </tr>
                <tr>
                  <td>
                    WORLDJOB+ (월드잡플러스)
                    <br /> (<a href="https://www.worldjob.or.kr/">https://www.worldjob.or.kr</a>)
                  </td>
                  <td>한국산업인력공단</td>
                  <td>
                    해외취업정보가이드
                    <br /> 해외취업(K-MOVE), 연수, 봉사, 인턴
                  </td>
                </tr>
                <tr>
                  <td>
                    청년드림(<a href="http://yd-donga.com/">http://yd-donga.com</a>)
                  </td>
                  <td>동아일보</td>
                  <td>인턴생활백서, 인턴공고, 인턴 SOS, 인턴 가이드</td>
                </tr>
                <tr>
                  <td>
                    커리어 (<a href="http://www.career.or.kr/">http://www.career.co.kr</a>)
                  </td>
                  <td>취업포털 커리어</td>
                  <td>중견 강소기업 채용정보, 히든 챔피언</td>
                </tr>
                <tr>
                  <td>
                    서울일자리포털
                    <br /> (<a href="http://job.seoul.go.kr/">http://job.seoul.go.kr</a>)
                  </td>
                  <td>서울특별시</td>
                  <td>
                    서울시 일자리 정보
                    <br /> 청년일자리센터, 찾아가는 취업 박람회
                  </td>
                </tr>
                <tr>
                  <td>
                    잡플래닛(<a href="https://www.jobplanet.co.kr/">https://www.jobplanet.co.kr</a>)
                  </td>
                  <td>㈜브레인커머스</td>
                  <td>기업 임직원의 솔직한 기업 속 이야기 공개</td>
                </tr>
                <tr>
                  <td>
                    사이버진로교육센터
                    <br /> (<a href="https://www.work.go.kr/cyberedu">https://www.work.go.kr/cyberedu</a>)
                  </td>
                  <td>
                    고용노동부/
                    <br /> 한국고용정보원
                  </td>
                  <td>온라인 진로교육 및 직업/취업 동영상</td>
                </tr>
                <tr>
                  <td>
                    한국고용정보원 (<a href="http://www.keis.or.kr/">http://www.keis.or.kr</a>)
                  </td>
                  <td>한국고용정보원</td>
                  <td>취업 및 진로 길라잡이, 내일을 잡자.</td>
                </tr>
                <tr>
                  <td>
                    JOBFORYOU(잡포유)(<a href="http://www.jfy.co.kr/">http://www.jfy.co.kr</a>)
                  </td>
                  <td>잡포유</td>
                  <td>취업교육 및 진로교육</td>
                </tr>
                <tr>
                  <td>
                    CAP+(Career Assistance Program Plus)
                    <br /> (<a href="http://www.work.go.kr/jobcenter">www.work.go.kr/jobcenter</a>)
                  </td>
                  <td>
                    고용노동부
                    <br /> 생애진로개발센터
                  </td>
                  <td>
                    청년층 직업지도 프로그램
                    <br /> 서류작성, 면접기술, 구직기술 강화
                  </td>
                </tr>
                <tr>
                  <td>
                    NCS (국가직무능력표준)
                    <br /> (<a href="https://www.ncs.go.kr/">https://www.ncs.go.kr</a>)
                  </td>
                  <td>한국산업인력공단</td>
                  <td>
                    NCS 및 학습모듈 검색,
                    <br /> 경력개발 지원, 과정설계 지원
                  </td>
                </tr>
                <tr>
                  <td>
                    BizHRD (기업일학습네트워크)
                    <br /> (<a href="http://www.bizhrd.net/">http://www.bizhrd.net</a>)
                  </td>
                  <td>한국산업인력공단</td>
                  <td>
                    기업맞춤강좌, 열린강좌,
                    <br /> 이러닝 강좌, 온라인 학습지원
                  </td>
                </tr>
                <tr>
                  <td>
                    HRD-Net (직업훈련포털)
                    <br /> (<a href="http://www.hrd.go.kr/">http://www.hrd.go.kr</a>)
                  </td>
                  <td>한국고용정보원</td>
                  <td>
                    직업훈련정보, 직업능력개발,
                    <br /> 일자리/직업 정보
                  </td>
                </tr>
                <tr>
                  <td>
                    청년워크넷
                    <br /> (<a href="http://www.work.go.kr/jobyoung">http://www.work.go.kr/jobyoung</a>)
                  </td>
                  <td>한국고용정보원</td>
                  <td>청년대상 채용정보 및 청년고용정책 가이드</td>
                </tr>
                <tr>
                  <td>
                    K-Startup
                    <br /> (<a href="http://www.k-startup.go.kr/">http://www.k-startup.go.kr</a>)
                  </td>
                  <td>
                    중소기업청/
                    <br /> 창업진흥원
                  </td>
                  <td>온라인 창업교육, 창업지원 포털사이트</td>
                </tr>
                <tr>
                  <td>
                    큐넷(<a href="http://www.q-net.go.kr/">http://www.q-net.or.kr</a>)
                  </td>
                  <td>한국산업인력공단</td>
                  <td>국가자격, 민간자격, 외국자격 등 자격포털</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    </Main>
  );
};

export default GuidePage;
