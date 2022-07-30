import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 56px;
  margin-top: 8px;

  border: none;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border-radius: 10px;
  display: flex;
  align-items: center;
  

  > input {
    width: 100%;
    height: 56px;

    padding: 20px 25px 20px 10px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

  }

  > svg {
    margin-left: 24px;
  }

`;

