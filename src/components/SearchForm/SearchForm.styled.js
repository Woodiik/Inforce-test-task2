import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 120px;
  height: 56px;
  padding: 9px 0;
  margin-left: 8px;
  background-color: lightblue;
  border: none;
  border-radius: 4px;

  font-size: 22px;
  cursor: pointer;

  transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
  }
  &:active {
    transform: scale(0.9);
  }
`;
