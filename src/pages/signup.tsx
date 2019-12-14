import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { authActions } from '../store/modules/auth';
import { CompanyDirectorInfoSchema } from '@postech-ses/job-core';

import styles from '../styles/pages/login.module.scss';
import commonStyles from '../styles/common.module.scss';

const SignUpForm: React.FC = () => {
  const [name, setName] = React.useState('');
  const [director, setDirector] = React.useState('');
  const [directorTitle, setDirectorTitle] = React.useState('');
  const [directorDepartment, setDirectorDepartment] = React.useState('');
  const [directorEmail, setDirectorEmail] = React.useState('');
  const [directorPhone, setDirectorPhone] = React.useState('');
  const [directorCellPhone, setDirectorCellPhone] = React.useState('');
  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [checkbox, setCheckbox] = React.useState(false);
  const [collapse, setCollapse] = React.useState(true);
  const [directorInfo, setDirectorInfo] = React.useState<CompanyDirectorInfoSchema>({
    name: '',
    title: '',
    department: '',
    email: '',
    phone: '',
    cellPhone: ''
  });

  const { isLogin } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const history = useHistory();

  React.useEffect(() => {
    if (isLogin) history.push('/');
  }, [isLogin]);

  const submit = () => {
    if (name === '') {
      return alert('기관명을 입력해주세요.');
    }
    if (director === '') {
      return alert('담당자명을 입력해주세요.');
    }
    if (directorTitle === '') {
      return alert('직위를 입력해주세요.');
    }
    if (directorDepartment === '') {
      return alert('부서명을 입력해주세요.');
    }
    if (directorEmail === '') {
      return alert('이메일을 입력해주세요.');
    }
    if (directorPhone === '') {
      return alert('사무실전화를 입력해주세요.');
    }
    if (id === '') {
      return alert('아이디를 입력해주세요.');
    }
    if (password === '') {
      return alert('비밀번호를 입력해주세요.');
    }
    if (password !== confirmPassword) {
      return alert('비밀번호가 일치하지 않습니다.');
    }
    if (checkbox === false) {
      return alert('개인정보 처리방침에 동의해주세요.');
    }
    setDirectorInfo({
      name: director,
      title: directorTitle,
      department: directorDepartment,
      email: directorEmail,
      phone: directorPhone,
      cellPhone: directorCellPhone
    });
    dispatch(
      authActions.startSignup({
        id,
        password,
        name,
        directorInfo
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
            <b>기관명 *</b>
          </label>
          <input type="text" name="name" onChange={event => setName(event.currentTarget.value)} />
          <label>
            <b>담당자명 *</b>
          </label>
          <input type="text" name="director" onChange={event => setDirector(event.currentTarget.value)} />
          <label>
            <b>직위 *</b>
          </label>
          <input type="text" name="directorTitle" onChange={event => setDirectorTitle(event.currentTarget.value)} />
          <label>
            <b>부서명 *</b>
          </label>
          <input
            type="text"
            name="directorDepartment"
            onChange={event => setDirectorDepartment(event.currentTarget.value)}
          />
          <label>
            <b>이메일 *</b>
          </label>
          <input type="text" name="directorEmail" onChange={event => setDirectorEmail(event.currentTarget.value)} />
          <label>
            <b>사무실전화 *</b>
          </label>
          <input type="text" name="directorPhone" onChange={event => setDirectorPhone(event.currentTarget.value)} />
          <label>
            <b>휴대전화</b>
          </label>
          <input
            type="text"
            name="directorCellPhone"
            onChange={event => setDirectorCellPhone(event.currentTarget.value)}
          />
          <label>
            <b>ID *</b>
          </label>
          <input type="text" name="Id" onChange={event => setId(event.currentTarget.value)} />
          <label>
            <b>Password *</b>
          </label>
          <input
            type="password"
            name="password"
            onChange={event => setPassword(event.currentTarget.value)}
            onKeyPress={onKeyPress}
          />
          <label>
            <b>Confirm Password *</b>
          </label>
          <input
            type="password"
            name="confirmPassword"
            onChange={event => setConfirmPassword(event.currentTarget.value)}
            onKeyPress={onKeyPress}
          />
          <div>
            <input
              style={{ height: '14px', width: '14px', margin: '0 5px 0 0', display: 'inline-block' }}
              type="checkbox"
              onChange={event => setCheckbox(event.currentTarget.checked)}
            />
            <label style={{ display: 'inline-block' }}>
              <b>개인정보 처리방침에 동의합니다.</b>
            </label>
            <a onClick={() => setCollapse(!collapse)} style={{ cursor: 'pointer', paddingLeft: '5px' }}>
              {collapse ? '[펼치기]' : '[접기]'}
            </a>
            {!collapse && (
              <div className={commonStyles.TextBox}>
                <p>hi</p>
              </div>
            )}
          </div>
          <h6 style={{ textAlign: 'right' }}>*은 필수항목입니다. </h6>
          <button onClick={submit} onKeyPress={onKeyPress}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

const SignUpPage = () => {
  return (
    <div className={commonStyles.NormalPage}>
      <div className="p-grid p-justify-between">
        <div className="p-col-12">
          <h1 className={commonStyles.PageHeader}>
            <span>| </span>회원가입
          </h1>
        </div>
        <div className="p-col-12">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
