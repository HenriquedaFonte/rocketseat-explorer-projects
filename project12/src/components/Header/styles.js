import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 115px;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 125px;

  > h1 {
    margin-right: 64px;
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.ORANGE}; 
    } 

`;

export const Profile = styled.div`
  
  display: flex;
  align-items: center;
  margin-left: 64px;

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-left: 10px;
  }

  > div {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    strong {
      white-space: nowrap;
    }

    a {
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

`;