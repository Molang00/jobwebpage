import React from 'react';
import commonStyles from '../../styles/common.module.scss';
import Main from '../../components/layout/Main';

const SesResultsPage: React.FC = () => {
  return (
    <Main title={'SES 실적'}>
      <React.Fragment>
        <div className="p-col-12 p-lg-6">
          <h2> 2016 SES 실적 </h2>
          <div className={commonStyles.TextBox}>
            <h2>참여 학생</h2>
          </div>
          <div className={commonStyles.TableBox}>
            <table>
              <tbody>
                <tr>
                  <th>학년</th>
                  <th>1학년</th>
                  <th>2학년</th>
                  <th>3학년</th>
                  <th>4학년</th>
                  <th>계</th>
                </tr>
                <tr>
                  <td>인원</td>
                  <td>6명</td>
                  <td>49명</td>
                  <td>114명</td>
                  <td>91명</td>
                  <td>260명 (재학생의 18.1%)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={commonStyles.TextBox}>
            <p>
              학과 : 수학과, 물리학과, 화학과, 생명과학과, 신소재공학과, 기계공학과, 산업경영공학과, 전자전기공학과,
              컴퓨터공학과, 화학공학과, 창의IT융합공학과 (11개)
            </p>
            <br />

            <h2>참여 기관 : 71개</h2>
            <div className={commonStyles.TableBox}>
              <table>
                <colgroup>
                  <col style={{ width: '150px' }} />
                  <col />
                  <col style={{ width: '120px' }} />
                </colgroup>
                <tbody>
                  <tr>
                    <th>구분</th>
                    <th>기관명</th>
                    <th>수</th>
                  </tr>
                  <tr>
                    <td>일반기업</td>
                    <td>
                      AJ네트웍스, ETS, LG VC사업본부, LG디스플레이, LG화학(기술연구원), SAP 랩스 코리아, SK하이닉스,
                      고려제강, 나이스피앤아이, 다원시스, 더마젝, 두산중공업, 랩지노믹스, 롯데케미칼, 르호봇,
                      삼성바이오에피스, 스트라드비젼코리아, 시트란인터네셔널, 쎄타텍, 알피니언, 에스이티시스템, 오라클,
                      이노와이어리스, 인조이웍스, 인텔리코드, 일진머티리얼즈, 입센코리아, 정진국제특허법률사무소,
                      주성엔지니어링, 티라유텍, 파이오링크, 파인디지털, 퍼즐데이터, 펜타시큐리티시스템, 펨토펩, 플랫,
                      피엠그로우, 한화토탈, 헤브론스타
                    </td>
                    <td>39</td>
                  </tr>
                  <tr>
                    <td>정부출연구소</td>
                    <td>
                      국가수리과학연구소(NIMS), 국가핵융합연구소(NFRI), 국립암센터연구소(NCC),
                      한국과학기술기획평가원(KISTEP), 한국과학기술연구원(KIST), 한국과학기술정보연구원(KISTI),
                      한국뇌연구원, 한국생명공학연구원(KRIBB), 한국원자력안전기술원(KINS), 한국전자통신연구원(ETRI),
                      한국표준과학연구원(KRISS), 한국항공우주연구원(KARI), 한국화학연구원(KRICT)
                    </td>
                    <td>13</td>
                  </tr>
                  <tr>
                    <td>연구기관</td>
                    <td>삼성유전체연구소, 아산생명과학연구원</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>포스코패밀리사</td>
                    <td>포스코, 포스코ICT, 포스코건설, 포스코에너지, 포스코켐텍, 포항산업과학연구원(RIST)</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>동문기업</td>
                    <td>데이블, 렌딧, 베이다스, 벱션, 비아시아그룹, 알티캐스트, 애스크컬쳐, 엑셈</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>대학기업</td>
                    <td>제넥신, 포스텍기술지주</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>해외기관</td>
                    <td>Fields Institute(캐나다)</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2> 2017 SES 실적 </h2>
            <div className={commonStyles.TextBox}>
              <h2>참여 학생</h2>
            </div>

            <div className={commonStyles.TableBox}>
              <table>
                <tbody>
                  <tr>
                    <th colSpan={2}>학과</th>
                    <th>단일</th>
                    <th>수학</th>
                    <th>물리</th>
                    <th>화학</th>
                    <th>생명</th>
                    <th>신소재</th>
                    <th>기계</th>
                    <th>산경</th>
                    <th>전자</th>
                    <th>컴공</th>
                    <th>화공</th>
                    <th>창의IT</th>
                    <th>계</th>
                  </tr>
                  <tr>
                    <td rowSpan={5}>SES</td>
                    <td>1학년</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>2</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>3</td>
                    <td>0</td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <td>2학년</td>
                    <td>0</td>
                    <td>5</td>
                    <td>4</td>
                    <td>0</td>
                    <td>10</td>
                    <td>5</td>
                    <td>8</td>
                    <td>6</td>
                    <td>6</td>
                    <td>7</td>
                    <td>7</td>
                    <td>3</td>
                    <td>61</td>
                  </tr>
                  <tr>
                    <td>3학년</td>
                    <td>0</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>9</td>
                    <td>15</td>
                    <td>16</td>
                    <td>7</td>
                    <td>31</td>
                    <td>11</td>
                    <td>21</td>
                    <td>1</td>
                    <td>123</td>
                  </tr>
                  <tr>
                    <td>4학년</td>
                    <td>0</td>
                    <td>4</td>
                    <td>4</td>
                    <td>8</td>
                    <td>10</td>
                    <td>7</td>
                    <td>18</td>
                    <td>8</td>
                    <td>8</td>
                    <td>16</td>
                    <td>21</td>
                    <td>2</td>
                    <td>106</td>
                  </tr>
                  <tr>
                    <td>계</td>
                    <td className="bottom coblue">1</td>
                    <td className="bottom coblue">12</td>
                    <td className="bottom coblue">12</td>
                    <td className="bottom coblue">13</td>
                    <td className="bottom coblue">29</td>
                    <td className="bottom coblue">28</td>
                    <td className="bottom coblue">44</td>
                    <td className="bottom coblue">21</td>
                    <td className="bottom coblue">45</td>
                    <td className="bottom coblue">34</td>
                    <td className="bottom coblue">52</td>
                    <td className="bottom coblue">6</td>
                    <td className="bottom cof00">297</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>POVI</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>1</td>
                    <td></td>
                    <td>7</td>
                    <td>4</td>
                    <td>1</td>
                    <td>4</td>
                    <td>1</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>CUop</td>
                    <td></td>
                    <td>2</td>
                    <td></td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>4</td>
                    <td>12</td>
                    <td>2</td>
                    <td>3</td>
                    <td></td>
                    <td></td>
                    <td>26</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>해외인턴쉽</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>1</td>
                    <td></td>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>개별인턴</td>
                    <td></td>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td>1</td>
                    <td>2</td>
                    <td>2</td>
                    <td>3</td>
                    <td></td>
                    <td>4</td>
                    <td>1</td>
                    <td></td>
                    <td>14</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>2017합계</td>
                    <td className="bottom coblue">1</td>
                    <td className="bottom coblue">15</td>
                    <td className="bottom coblue">12</td>
                    <td className="bottom coblue">14</td>
                    <td className="bottom coblue">31</td>
                    <td className="bottom coblue">32</td>
                    <td className="bottom coblue">50</td>
                    <td className="bottom coblue">44</td>
                    <td className="bottom coblue">51</td>
                    <td className="bottom coblue">43</td>
                    <td className="bottom coblue">57</td>
                    <td className="bottom coblue">7</td>
                    <td className="bottom cof00">357</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>비율(%)</td>
                    <td>1.4</td>
                    <td>15.0</td>
                    <td>12.4</td>
                    <td>12.8</td>
                    <td>28.2</td>
                    <td>24.8</td>
                    <td>32.5</td>
                    <td>33.3</td>
                    <td>29.5</td>
                    <td>30.3</td>
                    <td>37.3</td>
                    <td>10.9</td>
                    <td className="cof00">24.9</td>
                  </tr>
                  <tr>
                    <td rowSpan={2}>2016</td>
                    <td>인원</td>
                    <td>2</td>
                    <td>20</td>
                    <td>9</td>
                    <td>9</td>
                    <td>21</td>
                    <td>33</td>
                    <td>30</td>
                    <td>19</td>
                    <td>42</td>
                    <td>22</td>
                    <td>39</td>
                    <td>14</td>
                    <td>260</td>
                  </tr>
                  <tr>
                    <td>비율</td>
                    <td>3</td>
                    <td>20</td>
                    <td>9</td>
                    <td>8</td>
                    <td>19</td>
                    <td>26</td>
                    <td>19</td>
                    <td>14</td>
                    <td>24</td>
                    <td>15</td>
                    <td>25</td>
                    <td>22</td>
                    <td>18.1</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={commonStyles.TextBox}>
              <h2>참여 기관 : 116개</h2>
            </div>

            <div className={commonStyles.TableBox}>
              <table>
                <colgroup>
                  <col style={{ width: '150px' }} />
                  <col />
                  <col style={{ width: '120px' }} />
                </colgroup>
                <tbody>
                  <tr>
                    <th>구분</th>
                    <th>기관명</th>
                    <th>수</th>
                  </tr>
                  <tr>
                    <td>일반기업</td>
                    <td>
                      LG CNS, LG디스플레이, LG전자, LG전자 VC사업본부, LG하우시스, LG화학(기술연구원),
                      LG화학(생명과학연구소), SK C&amp;C,
                      <br />
                      SK이노베이션, SK하이닉스, 고려제강, 네이버, 다원시스, 두산중공업, 롯데첨단소재, 롯데케미칼,
                      뤼이드, 모르페우스, 삼성바이오에피스,
                      <br />
                      스마투스,스켈터랩스, 씨이랩, 에스에이피랩스코리아, 에스엘바이젠, 에스이티시스템, 엑셈, 엔시소프트,
                      온세미컨덕터 코리아, 원익홀딩스,
                      <br />
                      입센코리아, 정진국제특허법률사무소, 조이시티, 주성엔지니어링, 지멘스헬스케어, 카카오, 코레스,
                      퍼즐데이터, 하포리서치 코리아,
                      <br />
                      한화케미칼 중앙연구소, 한화큐셀
                    </td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td>정부출연구소</td>
                    <td>
                      국립암센터연구소, 한국과학기술기획평가원, 한국과학기술연구원, 한국과학기술연구원 전북분원,
                      <br className={commonStyles.TableLineBreak} />
                      한국뇌연구원, 한국생명공학연구원, 한국표준과학연구원, 한국항공우주연구원, 한국화학연구원
                    </td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>연구기관</td>
                    <td>
                      삼성유전체연구소, 아산생명과학연구원, 자동차부품연구원, 태성환경연구소, 포스텍-가톨릭대
                      의생명공학연구원, 포항금속소재산업진흥원
                    </td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>금융기관</td>
                    <td>
                      IMM인베스트먼트, NH투자증권, 국제선박투자운용, 메리츠종금증권, 미래에셋대우, 한국투자신탁운용
                    </td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>포스코패밀리사</td>
                    <td>
                      포스코, 포스코 ict, 포스코건설, 포스코대우, 포스코에너지, 포스코엠텍, 포스코켐텍, 포스코플랜텍,
                      RIST
                    </td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>동문기업</td>
                    <td>
                      노매드커넥션, 데일리인텔리전스, 바이클립, 베이글코드, 스테이지랩스, 클리노믹스,
                      펜타시큐리티시스템, 펨토펩, 피엠그로우, 현대오토하우
                    </td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>대학기업</td>
                    <td>MD Healthcare, 제넥신, 티앤알바이오팹, 포스텍기술지주, 화이바이오메드</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>해외기관</td>
                    <td>마이크로소프트 북경</td>
                    <td>1</td>
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

export default SesResultsPage;
