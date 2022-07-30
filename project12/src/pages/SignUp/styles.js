import styled from "styled-components";
import backgroundImg from "../../assets/backgroundImg.jpg";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 55% 45%;
  grid-template-areas: "background content";

`;

export const Form = styled.form`
  grid-area: content;
  max-width: 350px;
  display: flex;
  align-self: center;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;  
  text-align: center;
  

> h1 {
  font-size: 48px;
  color: ${({ theme }) => theme.COLORS.ORANGE};
}

> h3 {
  font-size: 24px;
  text-align: left;
  margin: 48px 0;  
}

> p {
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
}

button:nth-of-type(1) {
    margin-top: 24px;
    margin-bottom: 42px;
} 

  
`;

export const Background = styled.div`
  grid-area: background;
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;