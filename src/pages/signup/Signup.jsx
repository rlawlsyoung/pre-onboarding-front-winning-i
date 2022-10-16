import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { openSideAtom } from '../../atom';
import { TextField, Checkbox } from '@mui/material';
import { mainGreen, clickedGreen } from '../../styles/theme';
import styled from 'styled-components';

const SignUp = () => {
  const [emailValue, setEmailValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const handleEmail = e => setEmailValue(e.target.value);
  const handlePw = e => setPwValue(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <StyledSignUp>
      <form className='sign-up-form flex-center' onSubmit={handleSubmit}>
        <h2 className='title'>간편 회원가입</h2>
        <p className='sign flex-center'>
          아이디는 영문으로 12자 이내, 비밀번호는 특수문자를 포함해서 14자
          이내로 작성해주세요.
        </p>
        <TextField
          sx={{ m: 1.5 }}
          type='email'
          label='이메일'
          color='success'
          size='small'
          autoComplete='off'
          className='input'
          onChange={handleEmail}
        />
        <p className='alert'>아이디 조건에 맞지 않습니다.</p>
        <TextField
          sx={{ m: 1.5 }}
          type='password'
          label='패스워드'
          color='success'
          size='small'
          autoComplete='off'
          className='input'
          onChange={handlePw}
        />
        <p className='alert'>패스워드 조건에 맞지 않습니다.</p>
        <div className='provision'>
          <Checkbox color='success' />
          <a href='https://velog.io/@jinyoung985' target='_blank'>
            개인정보 이용 약관
          </a>{' '}
          에 동의합니다.
        </div>

        <button className='sign-up-btn'>회원가입</button>
      </form>
    </StyledSignUp>
  );
};

const StyledSignUp = styled.div`
  padding-top: 70.35px;
  margin-top: 3.5vw;

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sign-up-form {
    flex-direction: column;
    .title {
      font-size: 28px;
      font-weight: 700;
    }

    .sign {
      margin: 20px 0;
    }

    .input {
      width: 480px;
    }

    .alert {
      height: 16px;
      width: 480px;
      color: ${mainGreen};
      font-weight: 700;
    }

    .provision {
      margin-top: 30px;
      a {
        border-bottom: 1px solid ${mainGreen};
        color: ${mainGreen};
        cursor: pointer;
      }
    }

    .sign-up-btn {
      height: 40px;
      width: 480px;
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
  }
`;

export default SignUp;
