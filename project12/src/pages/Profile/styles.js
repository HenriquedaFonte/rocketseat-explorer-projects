import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > header {
    height: 144px;
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    display: flex;
    align-items: center;

    padding: 0 150px;

    svg {
      color: ${({ theme }) => theme.COLORS.ORANGE};
      font-size: 24px;     
      }
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  > div:nth-child(4){
    margin-top: 24px;
  }

  button {
    margin-top: 24px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 32px;
  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme })=> theme.COLORS.ORANGE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;
    
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;

      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;
