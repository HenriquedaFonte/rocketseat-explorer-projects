import styled from "styled-components";

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  height: 100vh;

  display: grid;
  grid-template-rows: 115px auto;
  grid-template-areas:
    'header'
    'content';

  main {
    grid-area: content;
    overflow-y: auto;
    padding: 5px 0;
  }

`;


export const Form = styled.form`
  max-width: 1100px;
  margin: 38px auto;
  padding: 0 125px;

  .top {
    margin-top: 16px;
    margin-bottom: 30px;
  }

  .input {
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
  }

  .textArea {
    width: 100%;
    height: 150px;
    

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    resize: none;

    margin-bottom: 8px;
    border-radius: 10px;
    padding: 16px;

    &::placeholder {
      align-items: flex-start;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  h3{
    margin-top: 20px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 20px;
  }

  .bookmarks {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 40px;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    border-radius: 10px;
    padding: 16px 10px;
    gap: 24px;
  }
  
  footer {
    display: flex;
    gap: 40px;

    button:nth-child(1) {         
      background-color: ${({ theme }) => theme.COLORS.BLACK};
      color: ${({ theme }) => theme.COLORS.ORANGE}; 
    }
  }
  


`;