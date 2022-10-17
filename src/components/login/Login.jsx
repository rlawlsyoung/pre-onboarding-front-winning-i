import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Dialog, TextField, createTheme } from '@mui/material';
import { isDialogOnAtom, openSideAtom } from '../../atom';
import { mainGray, mainBlack, responsive } from '../../styles/theme';
import styled from 'styled-components';

const Login = () => {
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
        />
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

    .login-btn {
      height: 40px;
      width: 100%;
      margin-top: 25px;
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
