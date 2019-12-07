import React from 'react';
import Main from '../../components/layout/Main';
import commonStyles from '../../styles/common.module.scss';

const ExpoPage: React.FC = () => {
  return (
    <Main title={'채용상담 및 박람회'}>
      <React.Fragment>
        <div className="p-col-12">
          <div className={commonStyles.TextBox}>
            <ul>
              <li>
                <h2>채용설명회</h2>
              </li>
              <ul>
                <li>
                  연중 실시하는 캠퍼스 리쿠르팅으로, 취업 및 진로지원센터에서는 기업으로부터 요청이 오면 학생들에게
                  공지하고, 학생회관 등 장소와 집기를 제공함
                </li>
              </ul>
            </ul>
            <br />
            <ul>
              <li>
                <h2>기업공동설명회/채용박람회</h2>
              </li>
              <ul>
                <li>
                  <p>
                    채용정보와 진로탐색 기회를 제공하기 위해 학부 및 대학원총학생회, SenLab(취업 전문업체)과 함께 연 2회
                    기업공동설명회를 개최함
                  </p>
                </li>
                <li>
                  <p>
                    2017년 하반기부터 KAIST/UNIST와 공동으로 이공계에 특화된 취업박람회 ‘Job/Career Fair’로 명칭을
                    변경하여 확대 개최함
                  </p>
                </li>
              </ul>
            </ul>
            <br />
            <div className={commonStyles.TableBox}>
              <table>
                <tbody>
                  <tr>
                    <th>내용</th>
                    <th>2015</th>
                    <th>2016</th>
                    <th>2017</th>
                    <th>2018</th>
                  </tr>
                  <tr>
                    <td>개최시기</td>
                    <td>2-3월 / 8월</td>
                    <td>2-3월 / 8월</td>
                    <td>3월 / 9월</td>
                    <td>3월</td>
                  </tr>
                  <tr>
                    <td>개최일수</td>
                    <td>9일 / 8일</td>
                    <td>7일 / 7일</td>
                    <td>6일 / 3일</td>
                    <td>4일</td>
                  </tr>
                  <tr>
                    <td>참가기업수</td>
                    <td>16개 / 11개</td>
                    <td>17개 / 13개</td>
                    <td>12개 / 42개</td>
                    <td>53개</td>
                  </tr>
                  <tr>
                    <td>참가자수 (연인원)</td>
                    <td>350명</td>
                    <td>300명</td>
                    <td>3,600명</td>
                    <td>진행중</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    </Main>
  );
};

export default ExpoPage;
