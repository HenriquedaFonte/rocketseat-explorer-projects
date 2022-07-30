import { Link } from 'react-router-dom';

import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  text-decoration: none;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.COLORS.ORANGE};
`;