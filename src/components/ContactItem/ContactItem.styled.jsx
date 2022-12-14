import styled from '@emotion/styled';

export const ContactWrap = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(5)};
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.regular};
  position: relative;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
`;

export const Contact = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  cursor: pointer;
  text-align: center;
  height: 20px;
  width: 50px;
  border-radius: 4px;

  &:hover,
  &:focus {
    background-color: red;
  }
  margin-left: 30px;
`;
