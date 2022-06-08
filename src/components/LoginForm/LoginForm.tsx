import authAPI from 'apis/auth';
import { Button, Form, Input, Link } from 'components/@shared';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userActions } from 'redux/actions';
import styled from 'styled-components';
import { createInputValueGetter } from 'utils/dom';

import { USER_MESSAGE } from 'constants/message';
import PATH from 'constants/path';

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(e.target instanceof HTMLFormElement)) return;

    const formElement = e.target.elements;
    const getInputValue = createInputValueGetter(formElement);
    const user = {
      username: getInputValue('username'),
      password: getInputValue('password'),
    };

    try {
      const userInfo = await authAPI.login(user);

      dispatch(userActions.setUser(userInfo));
      navigate(PATH.BASE);
    } catch (error) {
      if (error instanceof Error) {
        alert(USER_MESSAGE.FAIL_LOGIN);
      }
    }
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <Input
        id="username"
        type="text"
        placeholder="아이디를 입력해주세요"
        required
      >
        아이디
      </Input>
      <Input
        id="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        required
      >
        비밀번호
      </Input>
      <StyledLoginHelper>
        <StyledFindLoginInfo>
          <Link to="#">아이디 찾기</Link>
          <Link to="#">비밀번호 찾기</Link>
        </StyledFindLoginInfo>
      </StyledLoginHelper>
      <Button type="submit" marginTop="20px">
        로그인
      </Button>
    </Form>
  );
}

const StyledLoginHelper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 4px;
  width: 100%;
`;

const StyledFindLoginInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  color: ${({ theme: { colors } }) => colors.gray};

  font-size: 10px;

  a:hover {
    font-weight: 900;
  }
`;

export default LoginForm;
