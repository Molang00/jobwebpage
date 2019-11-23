import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { authActions } from '../store/modules/auth';

import styles from '../styles/pages/login.module.scss';
import commonStyles from '../styles/common.module.scss';

const LoginForm: React.FC = () => {
  const [userId, setUserId] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { isLogin } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const history = useHistory();

  React.useEffect(() => {
    if (isLogin) history.push('/');
  }, [isLogin]);

  const submit = () => {
    if (userId === '') {
      return alert('POVIS 계정 아이디를 입력해주세요.');
    }
    if (password === '') {
      return alert('POVIS 계정 비밀번호를 입력해주세요.');
    }
    dispatch(
      authActions.startLogin({
        userId,
        password
      })
    );
  };

  const onKeyPress = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') submit();
  };

  return (
    <div className={styles.LoginForm}>
      <div>
        <div>
          <label>
            <b>Povis ID</b>
          </label>
          <input type="text" name="povisId" onChange={event => setUserId(event.currentTarget.value)} />
          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            onChange={event => setPassword(event.currentTarget.value)}
            onKeyPress={onKeyPress}
          />
          <button onClick={submit} onKeyPress={onKeyPress}>
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

const LoginPage = () => {
  return (
    <div className={commonStyles.NormalPage}>
      <div className="p-grid p-justify-between">
        <div className="p-col-12">
          <h1 className={commonStyles.PageHeader}>
            <span>| </span>로그인
          </h1>
        </div>
        <div className="p-col-12">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
