import styled from '@emotion/styled';

export const Header = styled.header`
  padding-top: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: ${({ theme }) => theme.shadows.medium};
  border-bottom: 1px solid #9e9e9e;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
