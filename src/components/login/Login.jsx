import { Dialog, TextField, createTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { mainGreen, clickedGreen } from '../../styles/theme';
import styled from 'styled-components';

const Login = ({ isLogin, setIsLogin }) => {
  const handleDialog = () => setIsLogin(false);
  const handleSubmit = e => {
    e.preventDefault();
  };

  const theme = createTheme({
    palette: {
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },
  });

  return (
    <LoginContainer open={isLogin} onClose={handleDialog}>
      <form className='login-form' onSubmit={handleSubmit}>
        <h2 className='title'>로그인</h2>
        <TextField
          sx={{ m: 1.5 }}
          label='아이디'
          color='success'
          size='small'
        />
        <TextField
          label='패스워드'
          type='password'
          color='success'
          size='small'
        />
        <button className='login-btn'>로그인</button>

        <p className='signup'>
          아이디가 없다면? <Link>회원가입</Link>
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
      font-size: 20px;
      font-weight: 700;
    }

    .login-btn {
      height: 35px;
      width: 222.67px;
      margin-top: 25px;
      border: none;
      border-radius: 3px;
      background-color: ${mainGreen};
      color: white;
      font-family: 'Pretendard', sans-serif;

      &:active {
        background-color: ${clickedGreen};
      }
    }

    .signup {
      margin-top: 20px;
      font-size: 14px;
    }
  }
`;

export default Login;
