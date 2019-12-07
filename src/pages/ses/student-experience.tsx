import React from 'react';
import Axios from 'axios';
import { encode } from 'querystring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { getElapsedYears, StudentExperienceSchema } from '@postech-ses/ses-core';

import { REACT_APP_API_URL, REACT_APP_FILE_DOWNLOAD_URL } from '../../config';

import commonStyles from '../../styles/common.module.scss';
import Main from '../../components/layout/Main';
import Dropdown from '../../components/Dropdown';

const SurveyPage = () => {
  const [year, setYear] = React.useState('2016');
  const [isLoading, setIsLoading] = React.useState(false);
  const [experiencesGroupedByYear, setExperiencesGroupedByYear] = React.useState<StudentExperienceSchema[]>([]);

  React.useEffect(() => {
    const query = { year };
    setIsLoading(true);
    Axios.get(`${REACT_APP_API_URL}/student-experience/all?${encode(query)}`)
      .then(res => {
        setExperiencesGroupedByYear(res.data);
      })
      .catch(() => {
        alert('데이터를 읽어오는데 실패하였습니다.');
      })
      .finally(() => setIsLoading(false));
  }, [year]);

  return (
    <Main title={'체험수기'}>
      <React.Fragment>
        <Dropdown
          currentItem={{ name: `${year}년`, value: year }}
          items={getElapsedYears(new Date())
            .reverse()
            .map(value => ({ name: `${value}년`, value }))}
          setter={setYear}
        />
        <div className="p-col-12">
          <div className={commonStyles.TableBox}>
            <table>
              <colgroup>
                <col style={{ width: '10%' }} />
                <col style={{ width: '25%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '25%' }} />
                <col style={{ width: '10%' }} />
              </colgroup>
              <tbody>
                <tr>
                  <th>순번</th>
                  <th>수행기관</th>
                  <th>성명</th>
                  <th>학과</th>
                  <th>학년</th>
                  <th>제목</th>
                  <th>링크</th>
                </tr>
                {isLoading ? (
                  <tr>
                    <td colSpan={7}>로딩중입니다.</td>
                  </tr>
                ) : experiencesGroupedByYear.length === 0 ? (
                  <tr>
                    <td colSpan={7}>등록된 수기가 없습니다.</td>
                  </tr>
                ) : (
                  experiencesGroupedByYear.map((studentExperience, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{studentExperience.companyName}</td>
                      <td>{studentExperience.userName}</td>
                      <td>{studentExperience.departmentName}</td>
                      <td>{studentExperience.grade}</td>
                      <td>{studentExperience.title}</td>
                      <td>
                        <a
                          href={`${REACT_APP_FILE_DOWNLOAD_URL}/public/student-experience/${studentExperience.fileName}`}
                          download={`${studentExperience.departmentName}_${studentExperience.userName} 수기.pdf`}
                          style={{ color: 'black' }}
                        >
                          <FontAwesomeIcon icon={faFileDownload} />
                        </a>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    </Main>
  );
};

export default SurveyPage;
