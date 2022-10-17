import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isDialogOnAtom, userDataAtom, currentUserAtom } from '../../atom';
import { Dialog, TextField } from '@mui/material';
import { mainGray, mainBlack, responsive } from '../../styles/theme';
import styled from 'styled-components';

const Login = () => {
  const [isDialogOn, setIsDialogOn] = useRecoilState(isDialogOnAtom);
  const [currentUser, setCurrentUser] = useRecoilState(currentUserAtom);
  const userData = useRecoilValue(userDataAtom);
  const [emailValue, setEmailValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();
  const handleDialog = () => setIsDialogOn(false);

  const handleEmail = e => setEmailValue(e.target.value);
  const handlePw = e => setPwValue(e.target.value);

  const handleNavigate = () => {
    navigate('/signup');
    setIsDialogOn(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const relevantUser = userData.filter(
      el => el.userInfo.email === emailValue
    );
    if (!relevantUser.length) {
      setAlertMessage('존재하지 않는 아이디입니다.');
    } else {
      if (relevantUser[0].userInfo.password !== pwValue) {
        setAlertMessage('패스워드가 일치하지 않습니다.');
      } else {
        setCurrentUser(relevantUser[0]);
        localStorage.setItem('id', relevantUser[0].userInfo.id);
        setIsDialogOn(false);
        navigate('/');
      }
    }
  };

  return (
    <LoginContainer open={isDialogOn} onClose={handleDialog}>
      <form className='login-form' onSubmit={handleSubmit}>
        <h2 className='title'>로그인</h2>
        <TextField
          className='input'
          sx={{ m: 2 }}
          type='text'
          label='이메일'
          color='success'
          size='small'
          autoComplete='off'
          inputProps={{
            maxLength: 24,
          }}
          onChange={handleEmail}
        />
        <TextField
          className='input'
          type='password'
          label='패스워드'
          color='success'
          size='small'
          autoComplete='off'
          inputProps={{
            maxLength: 16,
          }}
          onChange={handlePw}
        />
        <p className='alert'>{alertMessage}</p>
        <button className='login-btn'>로그인</button>

        <p className='sign-up'>
          아이디가 없다면? <a onClick={handleNavigate}>회원가입</a>
        </p>
      </form>
    </LoginContainer>
  );
};

const LoginContainer = styled(Dialog)`
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 480px;
    height: 340px;
    padding: 20px;

    .title {
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: 700;
    }

    .input {
      width: 100%;
    }

    .alert {
      height: 8.563px;
      margin-top: 10px;
      font-size: 14px;
      font-weight: 700;
    }

    .login-btn {
      height: 40px;
      width: 100%;
      margin-top: 15px;
      border: none;
      border-radius: 3px;
      background-color: ${mainBlack};
      color: white;
      font-family: 'Pretendard', sans-serif;
      cursor: pointer;
    }

    .sign-up {
      margin-top: 20px;
      font-size: 14.5px;

      a {
        color: ${mainGray};
        cursor: pointer;
      }
    }
  }

  @media ${responsive.mobile} {
    .login-form {
      width: 80vw;
    }
  }
`;

export default Login;
