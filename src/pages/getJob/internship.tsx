import React from 'react';
import Main from '../../components/layout/Main';
import commonStyles from '../../styles/common.module.scss';

const InternshipPage: React.FC = () => {
  return (
    <Main title={'인턴십 프로그램'}>
      <React.Fragment>
        <div className="p-col-12">
          <div className={commonStyles.TextBox}>
            <ul>
              <li>
                <h2>인턴십 프로그램</h2>
              </li>
              <ul>
                <li>
                  연중 실시하는 캠퍼스 리쿠르팅으로, 취업 및 진로지원센터에서는 기업으로부터 요청이 오면 학생들에게
                  공지하고, 학생회관 등 장소와 집기를 제공함
                </li>
              </ul>
            </ul>
          </div>
          <div className={commonStyles.TableBox}>
            <table>
              <colgroup>
                <col style={{ width: '120px' }} />
              </colgroup>
              <tbody>
                <tr>
                  <th rowSpan={2}>프로그램</th>
                  <th rowSpan={2}>내용</th>
                  <th colSpan={5}>참여인원</th>
                </tr>
                <tr>
                  <td>2015</td>
                  <td>2016</td>
                  <td>2017</td>
                  <td>2018</td>
                  <td>2019</td>
                </tr>
                <tr>
                  <td>SES</td>
                  <td>
                    – Summer Experince in Society (여름방학 사회경험 프로그램)
                    <br />
                    – 산업 및 연구 현장에서 4주~12주의 인턴 활동을 통해 교실에서 배운 이론과 지식이 실무에 어떻게
                    적용되는지를 체득하고, 진로 탐색의 기회로 활용
                    <br />– 일반기업, 정출연, 동문기업, 연구기관, 금 융사, 해외기관 등 다양한 기관 참여 (2016년 71개,
                    2017년 116개 기관)
                  </td>
                  <td />
                  <td>252</td>
                  <td>297</td>
                  <td>272</td>
                  <td>287</td>
                </tr>
                <tr>
                  <td>POVI</td>
                  <td>
                    – POSTECH Venture Innovator (동문기업 벤처 인턴십 프로그램)
                    <br />– 동문기업에서 벤처 경험 및 지식 습득 (6개월 단위로 연간 2회 운영)
                  </td>
                  <td>16</td>
                  <td>16</td>
                  <td>18</td>
                  <td>11</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>CUop</td>
                  <td>
                    – Company-University Cooperation (과기특성화대학 산학연계 프로그램)
                    <br />– 방학 중 6주간의 기업 체험을 통해 문제를 발굴하고, 학기 중 프로젝트 중심의 정규수업을 통해
                    문제를 해결
                  </td>
                  <td />
                  <td />
                  <td>26</td>
                  <td>29</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>
                    기업가정신센터
                    <br />
                    해외인턴
                  </td>
                  <td>– 포스텍 동문들이 실리콘밸리에 창업 또는 근무하고 있는 회사에서 인턴 수행</td>
                  <td />
                  <td>2</td>
                  <td>2</td>
                  <td>1</td>
                  <td></td>
                </tr>
                <tr>
                  <td>개별인턴</td>
                  <td>– 학생이 기업의 인턴 공모에 직접 지원</td>
                  <td>24</td>
                  <td></td>
                  <td>14</td>
                  <td>38</td>
                  <td>81</td>
                </tr>
                <tr>
                  <td>계</td>
                  <td>40</td>
                  <td></td>
                  <td>271</td>
                  <td>357</td>
                  <td>351</td>
                  <td>399</td>
                </tr>
                <tr>
                  <td>참여율</td>
                  <td>재학생 대비 참여학생 비율 (%)</td>
                  <td>2.8</td>
                  <td>18.9</td>
                  <td>24.9</td>
                  <td>24.7</td>
                  <td>28.1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    </Main>
  );
};

export default InternshipPage;
