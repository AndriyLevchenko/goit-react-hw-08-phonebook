import styled from '@emotion/styled';

import { Form, Field, ErrorMessage } from 'formik';

export const FormWrap = styled(Form)`
  padding: 30px;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(10)};
  background-color: ${({ theme }) => theme.colors.light};
  // border-radius: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.gray};
  box-shadow: ${({ theme }) => theme.shadows.regular};
  position: relative;
  width: 400px;
  height: 100%;
`;

export const Input = styled(Field)`
  box-sizing: border-box;
  border: 2px solid #00ca90;
  // border-radius: 50px;
  outline: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.17;

  &:hover,
  &:focus {
    border-color: red;
  }
  padding: 5px;
`;

export const Label = styled.label`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.17;
  letter-spacing: 0.01em;
  color: #4e34b5;
  margin-top: 10px;
`;

export const Error = styled(ErrorMessage)`
  color: #df4f06;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.6;
  letter-spacing: 0.06em;
  margin-left: 120px;
`;

export const Button = styled.button`
  margin-top: 30px;
  padding: 5px 20px 5px 20px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  letter-spacing: 0.06em;
  background-color: #53cda6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  // border-radius: 50px;

  &:hover,
  &:focus {
    background-color: df4f06;
  }
  cursor: pointer;
  width: 160px;
  margin-left: 90px;
`;
