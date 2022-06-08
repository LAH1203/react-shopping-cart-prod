import styled from 'styled-components';

const NumberInput = styled.div`
  display: flex;
  position: relative;
  top: -90px;
  left: 20px;
  float: right;

  width: 90px;
  height: 40px;
  margin: 0;

  background: ${({ theme: { colors } }) => colors.white};
`;

const Input = styled.input`
  -moz-appearance: textfield;
  box-sizing: border-box;

  width: 70%;
  height: 100%;
  border: 1px solid ${({ theme: { colors } }) => colors.lightGray};
  padding: 10px;
  outline: none;

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const ControlButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 30%;
  height: 100%;

  button {
    width: 100%;
    height: 50%;
    border: 1px solid ${({ theme: { colors } }) => colors.lightGray};

    background: none;
    color: ${({ theme: { colors } }) => colors.redPink};

    font-size: 8px;
  }
`;

export { NumberInput, Input, ControlButton };
