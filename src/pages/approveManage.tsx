import React from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import commonStyles from '../styles/common.module.scss';
import styles from '../styles/pages/login.module.scss';
import { ValidateUserForm } from '@postech-ses/job-core';
import { authenticatedAxios } from '../utils/auth.util';

const ApproveManageForm: React.FC = () => {
  const [id, setId] = React.useState<string>('');

  const { isLogin } = useSelector((state: RootState) => state.auth);

  const history = useHistory();

  React.useEffect(() => {
    if (!isLogin) history.push('/');
  }, [isLogin]);

  const submit = () => {
    if (id === '') {
      return alert('승인할 id를 입력해주세요.');
    }
    const form: ValidateUserForm = {
      id
    };

    const url = `auth/validate-user`;

    authenticatedAxios(url, {
      method: 'POST',
      data: form
    })
      .then(response => {
        const status: number = response.status;
        if (status == 200) {
          alert('승인되었습니다.');
        } else {
          alert('잘못된 요청입니다.');
        }
      })
      .catch(error => {
        throw error;
      });
  };

  const onKeyPress = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') submit();
  };
  return (
    <div className={styles.LoginForm}>
      <div>
        <label>
          <b>ID</b>
        </label>
        <input type="text" name="povisId" onChange={event => setId(event.currentTarget.value)} />
        <button onClick={submit} onKeyPress={onKeyPress}>
          승인
        </button>
      </div>
    </div>
  );
};

const ApproveManagePage: React.FC = () => {
  return (
    <div className={commonStyles.NormalPage}>
      <div className="p-grid p-justify-between">
        <div className="p-col-12">
          <h1 className={commonStyles.PageHeader}>
            <span>| </span>승인관리
          </h1>
        </div>
        <div className="p-col-12">
          <ApproveManageForm />
        </div>
      </div>
    </div>
  );
};

export default ApproveManagePage;
