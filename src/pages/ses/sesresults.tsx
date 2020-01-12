import React from 'react';
import commonStyles from '../../styles/common.module.scss';
import Main from '../../components/layout/Main';

const SesResultsPage: React.FC = () => {
  return (
    <Main title={'SES 실적'}>
      <React.Fragment>
        <div className="p-col-12">
          <ul>
            <li>
              <h2> 2019 SES 실적 </h2>
            </li>
          </ul>
          <div className={commonStyles.TextBox}>
            <ul>
              <ul>
                <li>
                  <h2>참여 학생</h2>
                </li>
              </ul>
            </ul>
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
                  <td></td>
                  <td>52명</td>
                  <td>135명</td>
                  <td>100명</td>
                  <td>287명 (재학생의 20.2%)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={commonStyles.TextBox}>
            <ul>
              <ul>
                <li>
                  <h2>참여 기관 : 86개</h2>
                </li>
              </ul>
            </ul>
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
                      CJ제일제당, LG CNS, LG디스플레이, LG전자, LG하우시스, SK이노베이션, SK텔레콤, SK하이닉스, W
                      CONCEPT, 고려제강, 네이버, 넷마블게임즈, 다원시스, 도레이첨단소재, 람다256, 로지브라더스,
                      롯데케미칼, 모비스, 미지에너텍, 밀리만코리아, 빙글, 삼성전기, 삼성전자 CE/IM, 샘표식품,
                      에스엘바이젠, 에스이티시스템, 웍스모바일, 인바디, 정진국제특허법률사무소, 주성엔지니어링, 카카오,
                      코드박스, 페르소나시스템, 하포리서치코리아, 한화케미칼 중앙연구소, 한화큐셀, 한화토탈
                    </td>
                    <td>37</td>
                  </tr>
                  <tr>
                    <td>정부출연구소</td>
                    <td>
                      한국과학기술기획평가원(KISTEP), 한국과학기술연구원(KIST), 한국과학기술연구원(KIST) 전북분원,
                      한국뇌연구원(KBRI), 한국생명공학연구원(KRIBB), 한국화학연구원(KRICT)
                    </td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>연구기관</td>
                    <td>
                      삼성유전체연구소, 삼양사중앙연구소, 아산생명과학연구원, 엔에이백신연구소, 태성환경연구소,
                      포항금속소재산업진흥원, 한국로봇융합연구원, 한국전기공사 전력연구원
                    </td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>금융기관/기타</td>
                    <td>KB인베스트먼트, 국제선박투자운용, 지온컨설팅, 포항시청, 한영회계법인</td>
                    <td>5</td>
                  </tr>

                  <tr>
                    <td>포스코</td>
                    <td>
                      포스코 (Steel Bridge 인턴프로그램), 포스코 (산학연협력실), 포스코ICT, 포스코건설,
                      포스코경영연구원, 포항산업과학연구원(RIST)
                    </td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>동문기업</td>
                    <td>
                      Polaris3D, 뉴로메카, 베이글코드, 베이다스, 비닷두, 사이버다임, 스테이지랩스, 에이치에너지, 엑셈,
                      펜타시큐리티시스템, 플랫, 피엠그로우
                    </td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>대학기업</td>
                    <td>
                      MD Healthcare, 아태이론물리센터, 제넥신, 크립토퀀트(팀블랙버드), 패러데이오투, 포스텍-가톨릭대
                      의생명공학연구원, 포스텍기술지주, 휴머노피아
                    </td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>해외기관</td>
                    <td>TRUMPF Scientific Lasers, HIT(하얼빈공대), 홍콩 과기대, 홍콩 중문대</td>
                    <td>4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <ul>
            <li>
              <h2> 2018 SES 실적 </h2>
            </li>
          </ul>
          <div className={commonStyles.TextBox}>
            <ul>
              <ul>
                <li>
                  <h2>참여 학생</h2>
                </li>
              </ul>
            </ul>
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
                  <td>1명</td>
                  <td>73명</td>
                  <td>130명</td>
                  <td>68명</td>
                  <td>272명 (재학생의 19.1%)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={commonStyles.TextBox}>
            <ul>
              <ul>
                <li>
                  <h2>참여 기관 : 108개</h2>
                </li>
              </ul>
            </ul>
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
                      GS리테일, GS칼텍스, LG CNS, LG디스플레이, LG전자, LG하우시스, LG화학(기술연구원), PAFFEM,
                      SK이노베이션, SK텔레콤, SK하이닉스, 고려제강, 기아자동차, 네이버, 네이버웹툰, 넷마블게임즈,
                      다원시스, 도레이첨단소재, 라인플러스, 로레알코리아, 로지브라더스, 롯데첨단소재, 롯데케미칼,
                      모르페우스, 모비스, 바이앤어스, 블루웨일, 삼성전기, 삼성전자, 스팬딧, 시어스랩, 에스엘바이젠,
                      에스이티시스템, 에이치에너지, 엔씨소프트, 엠티콤, 이엔에프테크놀로지, 인텔리코드, 일진다이아몬드,
                      입센코리아, 정진국제특허법률사무소, 조이시티, 주성엔지니어링, 카카오, 코드박스, 코리아바이오그룹,
                      프로젠, 하포리서치코리아, 한화케미칼 중앙연구소, 한화토탈, 해시드
                    </td>
                    <td>51</td>
                  </tr>
                  <tr>
                    <td>정부출연구소</td>
                    <td>
                      국립암센터연구소, 한국과학기술기획평가원, 한국과학기술연구원, 한국과학기술연구원 전북분원,
                      한국기초과학지원연구원, 한국뇌연구원, 한국생명공학연구원, 한국항공우주연구원
                    </td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>연구기관</td>
                    <td>
                      국립산림과학원, 삼성유전체연구소, 삼양바이오팜의약바이오연구소, 삼양사중앙연구소,
                      아산생명과학연구원, 태성환경연구소, 포항금속소재산업진흥원, 한국로봇융합연구원
                    </td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>금융기관</td>
                    <td>
                      IMM인베스트먼트, KB인베스트먼트, 국제선박투자운용, 메리츠종금증권, 지큐자산운영, 한국투자신탁운용
                    </td>
                    <td>6</td>
                  </tr>

                  <tr>
                    <td>포스코</td>
                    <td>포스코, 포스코ICT, 포스코건설, 포스코에너지, 포스코켐텍, 포스코플랜텍, RIST</td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <td>동문기업</td>
                    <td>
                      Polaris3D, 긱블, 노매드커넥션, 뉴로메카, 더마젝, 데일리인텔리전스, 미라이크, 바이클립, 베이다스,
                      스테이지랩스, 씨에스리, 엑셈, 위캠, 클리노믹스, 페르소나시스템, 펜타시큐리티시스템,
                      펨토바이오메드, 플랫, 피엠솔루션
                    </td>
                    <td>19</td>
                  </tr>
                  <tr>
                    <td>대학기업</td>
                    <td>MD Healthcare, 제넥신, 포스텍-가톨릭대 의생명공학연구원, 포스텍기술지주</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>해외기관</td>
                    <td>
                      TRUMPF Scientific Lasers, 마이크로소프트 북경, 아진산업, HIT(하얼빈공대), 막스플랑크
                      고체화학물리연구소
                    </td>
                    <td>5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <ul>
            <li>
              <h2> 2017 SES 실적 </h2>
            </li>
          </ul>
          <div className={commonStyles.TextBox}>
            <ul>
              <ul>
                <li>
                  <h2>참여 학생</h2>
                </li>
              </ul>
            </ul>
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
                  <td>7명</td>
                  <td>63명</td>
                  <td>126명</td>
                  <td>101명</td>
                  <td>297명 (재학생의 20.6%)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={commonStyles.TextBox}>
            <ul>
              <ul>
                <li>
                  <h2>참여 기관 : 116개</h2>
                </li>
              </ul>
            </ul>
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
                    AJ네트웍스, LG CNS, LG디스플레이, LG전자, LG전자 VC사업본부, LG하우시스, LG화학(기술연구원),
                    LG화학(생명과학연구소), SK C&amp;C, SK이노베이션, SK하이닉스, 고려제강, 광림, 그린텍, 기아자동차,
                    나노인터렉티브, 네이버, 다원시스, 두산중공업, 롯데비피화학, 롯데첨단소재, 롯데케미칼, 뤼이드,
                    모르페우스, 브레인즈스퀘어, 삼성바이오에피스, 수산이이엔티, 스마투스, 스켈터랩스,
                    스트라드비젼코리아, 씨이랩, 에스에이피랩스 코리아, 에스엘바이젠, 에스이티시스템, 엔씨소프트,
                    온세미컨덕터 코리아, 원익홀딩스, 유투시스템, 이엔에프테크놀로지, 인텔리코드, 일진머티리얼즈,
                    입센코리아, 정진국제특허법률사무소, 조이시티, 주성엔지니어링, 지멘스헬스케어, 카카오, 코레스,
                    파인디지털, 퍼즐데이터, 하포리서치코리아, 한국수력원자력, 한화케미칼 중앙연구소, 한화토탈, 한화큐셀
                  </td>
                  <td>55</td>
                </tr>
                <tr>
                  <td>정부출연구소</td>
                  <td>
                    국가핵융합연구소, 국립암센터연구소, 한국과학기술기획평가원, 한국과학기술연구원, 한국과학기술연구원
                    전북분원, 한국과학기술정보연구원, 한국기초과학지원연구원, 한국뇌연구원, 한국생명공학연구원,
                    한국원자력안전기술원, 한국전자통신연구원, 한국표준과학연구원, 한국항공우주연구원, 한국화학연구원
                  </td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>연구기관</td>
                  <td>
                    농촌진흥청, 삼성유전체연구소, 아산생명과학연구원, 자동차부품연구원, 태성환경연구소,
                    포항금속소재산업진흥원, 한국세라믹기술원
                  </td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>금융기관</td>
                  <td>IMM인베스트먼트, NH투자증권, 국제선박투자운용, 메리츠종금증권, 미래에셋대우, 한국투자신탁운용</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>포스코</td>
                  <td>
                    포스코, 포스코ICT, 포스코건설, 포스코대우, 포스코에너지, 포스코엠텍, 포스코켐텍, 포스코플랜텍, RIST
                  </td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>동문기업</td>
                  <td>
                    노매드커넥션, 뉴로메카, 더마젝, 데일리인텔리전스, 문미옥의원실, 바이클립, 베이글코드, 베이다스,
                    스테이지랩스, 엑셈, 클리노믹스, 펜타시큐리티시스템, 펨토펩, 피엠그로우, 현대오토하우
                  </td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>대학기업</td>
                  <td>
                    MD Healthcare, 제넥신, 티앤알바이오팹, 포스텍-가톨릭대 의생명공학연구원, 포스텍기술지주,
                    화이바이오메드
                  </td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>해외기관</td>
                  <td>TRUMPF Scientific Lasers, 마이크로소프트 북경, HIT(하얼빈공대), 막스플랑크연구소</td>
                  <td>4</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul>
            <li>
              <h2> 2016 SES 실적 </h2>
            </li>
          </ul>
          <div className={commonStyles.TextBox}>
            <ul>
              <ul>
                <li>
                  <h2>참여 학생</h2>
                </li>
              </ul>
            </ul>
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
                  <td>46명</td>
                  <td>112명</td>
                  <td>88명</td>
                  <td>252명 (재학생의 17.5%)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={commonStyles.TextBox}>
            <ul>
              <ul>
                <li>
                  <h2>참여 기관 : 71개</h2>
                </li>
              </ul>
            </ul>
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
                      AJ네트웍스, ETS, LG디스플레이, LG전자 VC사업본부, LG화학(기술연구원), SK하이닉스, 고려제강,
                      나이스피앤아이, 다원시스, 데이블, 두산중공업, 랩지노믹스, 렌딧, 롯데케미칼, 르호봇, 벱션,
                      비아시아그룹, 삼성바이오에피스, 시트란인터네셔널, 스트라드비젼코리아, 알피니언, 애스크컬쳐,
                      에스에이피랩스 코리아, 에스이티시스템, 오라클, 이노와이어리스, 인조이웍스, 인텔리코드,
                      일진머티리얼즈, 입센코리아, 정진국제특허법률사무소, 주성엔지니어링, 파이오링크, 파인디지털,
                      한화토탈, 헤브론스타
                    </td>
                    <td>36</td>
                  </tr>
                  <tr>
                    <td>정부출연구소</td>
                    <td>
                      국가수리과학연구소, 국가핵융합연구소, 국립암센터연구소, 한국과학기술기획평가원,
                      한국과학기술연구원, 한국과학기술정보연구원, 한국뇌연구원, 한국생명공학연구원,
                      한국원자력안전기술원, 한국전자통신연구원, 한국표준과학연구원, 한국항공우주연구원, 한국화학연구원
                    </td>
                    <td>13</td>
                  </tr>
                  <tr>
                    <td>연구기관</td>
                    <td>삼성유전체연구소, 아산생명과학연구원</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>금융기관</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>포스코</td>
                    <td>포스코, 포스코ICT, 포스코건설, 포스코에너지, 포스코켐텍, RIST</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>동문기업</td>
                    <td>
                      더마젝, 베이다스, 알티캐스트, 엑셈, 쎄타텍, 티라유텍, 퍼즐데이터, 펜타시큐리티시스템, 펨토펩,
                      플랫, 피엠그로우
                    </td>
                    <td>11</td>
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
          </div>
        </div>
      </React.Fragment>
    </Main>
  );
};

export default SesResultsPage;
