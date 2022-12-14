import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  margin-top: 20px;
  display: block;
  padding: 2px 5px 2px 5px;
  font-weight: 600;
  font-size: 12px;
  line-height: 17px;
  color: #ffffff;
  letter-spacing: 0.06em;
  background-color: #df4f06;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 50px;

  &:hover,
  &:focus {
    background-color: df4f06;
  }

  cursor: pointer;
  width: 60px;
`;

export const Accost = styled.p`
  margin-bottom: 0px;
  font-weight: 500;
  font-size: 20px;
  line-height: 17px;
  color: #4e34b5;
`;
