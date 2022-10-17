import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { openSideAtom } from '../../atom';
import { TextField, Checkbox } from '@mui/material';
import { mainGray, mainBlack, responsive } from '../../styles/theme';
import styled from 'styled-components';

const SignUp = () => {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPwValid, setIsPwValid] = useState(false);
  const [checkboxOn, setCheckboxOn] = useState(false);
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  const passwordRegEx = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
  const btnDisabled = !nameValue || !isEmailValid || !isPwValid || !checkboxOn;

  const handleName = e => setNameValue(e.target.value);
  const handleEmail = e => {
    setEmailValue(e.target.value);
    setIsEmailValid(emailRegEx.test(e.target.value));
  };
  const handlePw = e => {
    setPwValue(e.target.value);
    setIsPwValid(passwordRegEx.test(e.target.value));
  };

  const handleCheckbox = () => setCheckboxOn(!checkboxOn);

  const handleSubmit = e => {
    e.preventDefault();

    alert(123);
  };
  return (
    <StyledSignUp>
      <form className='sign-up-form flex-center' onSubmit={handleSubmit}>
        <h2 className='title'>간편 회원가입</h2>
        <p className='sign flex-center'>
          이메일은 @를 포함, 패스워드는 영문, 숫자 조합 8~16자로 작성해주세요.
        </p>
        <TextField
          className='input'
          sx={{ m: 1.5 }}
          type='text'
          label='이름'
          color='success'
          size='small'
          autoComplete='off'
          inputProps={{
            maxLength: 8,
          }}
          onChange={handleName}
        />
        <p className='alert'>
          {nameValue ? '사용 가능한 이름입니다.' : '이름을 입력해주세요.'}
        </p>
        <TextField
          className='input'
          sx={{ m: 1.5 }}
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
        <p className='alert'>
          {isEmailValid
            ? '사용 가능한 이메일입니다.'
            : '이메일 조건에 맞지 않습니다.'}
        </p>
        <TextField
          sx={{ m: 1.5 }}
          type='password'
          label='패스워드'
          color='success'
          size='small'
          autoComplete='off'
          className='input'
          inputProps={{
            maxLength: 16,
          }}
          onChange={handlePw}
        />
        <p className='alert'>
          {isPwValid
            ? '사용 가능한 패스워드입니다.'
            : '패스워드 조건에 맞지 않습니다.'}
        </p>
        <div className='provision'>
          <Checkbox color='success' onClick={handleCheckbox} />
          <a href='https://velog.io/@jinyoung985' target='_blank'>
            개인정보 이용 약관
          </a>{' '}
          에 동의합니다.
        </div>

        <button className='sign-up-btn' disabled={btnDisabled}>
          회원가입
        </button>
      </form>
    </StyledSignUp>
  );
};

const StyledSignUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 70.35px;
  margin-top: 3.5vw;

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sign-up-form {
    flex-direction: column;
    width: 480px;

    .title {
      font-size: 28px;
      font-weight: 700;
    }

    .sign {
      margin: 20px 0;
      text-align: center;
    }

    .input {
      width: 100%;
    }

    .alert {
      height: 16px;
      width: 100%;
      color: ${mainBlack};
      font-weight: 700;
    }

    .provision {
      margin-top: 30px;
      a {
        border-bottom: 1px solid ${mainGray};
        color: ${mainGray};
        cursor: pointer;
      }
    }

    .sign-up-btn {
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
  }

  @media ${responsive.mobile} {
    .sign-up-form {
      width: 80vw;
    }
  }
`;

export default SignUp;
