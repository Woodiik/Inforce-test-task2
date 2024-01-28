import styled from 'styled-components';
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 20px;
  width: 400px;

  border-radius: 4px;

  background-color: #ebe6fc;
`;

export const TopContainer = styled.div``;

export const Title = styled.h3`
  margin: 0;
`;

export const Owner = styled.p`
  margin: 10px 0 0;
`;
export const Date = styled.p`
  margin-top: 4px;
  opacity: 0.5;
`;

export const Content = styled.p`
  margin-top: 10px;
`;

export const Tags = styled.div``;
export const Tag = styled.a`
  &:not(:first-child) {
    margin-left: 5px;
  }
`;
