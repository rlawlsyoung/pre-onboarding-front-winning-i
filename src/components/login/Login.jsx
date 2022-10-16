import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Dialog, TextField, createTheme } from '@mui/material';
import { isDialogOnAtom, openSideAtom } from '../../atom';
import { mainGreen, clickedGreen } from '../../styles/theme';
import styled from 'styled-components';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isDialogOn, setIsDialogOn] = useRecoilState(isDialogOnAtom);
  const setOpenSide = useSetRecoilState(openSideAtom);
  const navigate = useNavigate();
  const handleDialog = () => setIsDialogOn(false);
  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleNavigate = () => {
    navigate('/signup');
    setIsDialogOn(false);
    setOpenSide(false);
  };

  return (
    <LoginContainer open={isDialogOn} onClose={handleDialog}>
      <form className='login-form' onSubmit={handleSubmit}>
        <h2 className='title'>로그인</h2>
        <TextField
          type='text'
          sx={{ m: 1.5 }}
          label='이메일'
          color='success'
          size='small'
          autoComplete='off'
        />
        <TextField
          label='패스워드'
          type='password'
          color='success'
          size='small'
          autoComplete='off'
        />
        <button className='login-btn'>로그인</button>

        <p className='signup'>
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
    width: 300px;
    height: 380px;

    .title {
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: 700;
    }

    input {
      width: 240px;
    }

    .login-btn {
      height: 40px;
      width: 268px;
      margin-top: 25px;
      border: none;
      border-radius: 3px;
      background-color: ${mainGreen};
      color: white;
      font-family: 'Pretendard', sans-serif;
      cursor: pointer;

      &:active {
        background-color: ${clickedGreen};
      }
    }

    .signup {
      margin-top: 20px;
      font-size: 14.5px;

      a {
        color: ${mainGreen};
        cursor: pointer;
      }
    }
  }
`;

export default Login;
