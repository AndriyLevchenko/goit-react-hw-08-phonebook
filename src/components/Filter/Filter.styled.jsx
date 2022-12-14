import styled from '@emotion/styled';

export const Box = styled.div`
  width: ${({ theme }) => theme.spacing(100)};
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

export const Label = styled.label`
  display: flex;
  align-items: baseline;
`;

export const InputSearch = styled.input`
  width: 100%;
  height: ${({ theme }) => theme.spacing(14)};
  border-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
  background-color: transparent;
  padding: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(10)};
  outline: none;
  transition: ${({ theme }) => theme.animation.cubicBezier};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 300;
  letter-spacing: 0.03em;

  &::placeholder {
    font-weight: 200;
    text-align: center;
  }

  &:hover,
  &:focus {
    border-color: red;
  }
`;
