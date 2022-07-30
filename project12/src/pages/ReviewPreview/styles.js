import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 115px auto;
  grid-template-areas: 
  "header" 
  "content"
  ;

  main {
    grid-area: content;
    overflow-y: auto;
    padding: 64px 0;
  }

`;

export const Content = styled.div`
  width: 100%;
  margin: 5px auto;
  padding: 0 125px;
  
  div.titleReview {
    margin-top: 24px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;    
    gap: 20px;
  }

  div.bookmarks {
    display: flex;
    margin-top: 40px;
    margin-bottom: 40px;
    
    span {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
  }

`;

export const Author = styled.div`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  display: flex;
  gap: 10px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;


