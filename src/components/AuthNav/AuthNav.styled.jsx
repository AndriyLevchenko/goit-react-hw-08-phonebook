import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  color: 00000;
  font-size: ${props => props.theme.fontSizes.medium};
  text-align: ${({ textAlign }) => (!textAlign ? 'left' : textAlign)};
  margin-bottom: ${({ marginBottom }) => (!marginBottom ? 0 : marginBottom)};
  padding: 12px;
  font-weight: 700;

  &.active {
    color: #8806df;
  }
`;
