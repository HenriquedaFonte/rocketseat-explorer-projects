import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 56px;
  border: 0;
  padding: 0 16px;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800}; 

`;