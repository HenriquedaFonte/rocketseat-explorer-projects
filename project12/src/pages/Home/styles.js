import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  height: 100vh;

  display: grid;
  grid-template-rows: 115px auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 64px 0;
  }
`

export const Content = styled.div`
  width: 100%;
  margin: 50px auto;
  padding: 0 125px;

  > div {
    display: flex;
    margin-bottom: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 32px;
      font-weight: 400;
      white-space: nowrap;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    button {
      width: 200px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      border: 0;
      padding: 0 16px;
      border-radius: 10px;

      background-color: ${({ theme }) => theme.COLORS.ORANGE};
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

      > svg {
        width: 16px;
        height: 16px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      }
    }
  }
`

export const Card = styled.div`
  width: 100%;
  height: 220px;
  margin-top: 24px;

  border: 0;
  border-radius: 16px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  a {
    padding: 32px;
    width: 100%;
    height: 100%;
    transition: 0.5s;

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      border-radius: 15px;
      box-shadow: 0px 10px 13px -7px #000000;
    }
  }

  .description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`
