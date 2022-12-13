import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const HomePageLink = styled(NavLink)`
-webkit-box-flex: 1;
    flex-grow: 1;
    text-decoration: none;
    color: rgb(236, 239, 241);
    font-size: 22px;
    font-weight: 500;
    margin-right: 20px;
`

export const ContactsLink = styled(NavLink)`
-webkit-box-flex: 1;
    flex-grow: 1;
    text-decoration: none;
    color: rgb(236, 239, 241);
    font-size: 22px;
    font-weight: 500;
`
export const Link = styled(NavLink)`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  color: #1976d2;
  -webkit-text-decoration: underline;
  text-decoration: underline;
  text-decoration-color: currentcolor;
  text-decoration-color: rgba(25, 118, 210, 0.4);
`;