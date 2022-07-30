import styled from 'styled-components'

export const Container = styled.span`
  font-size: 12px;
  font-weight: 400;
  padding: 5px 14px;
  border-radius: 5px;
  margin-top: 15px;
  margin-right: 6px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`
