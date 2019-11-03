import React from 'react';
import styled from 'styled-components';

import Logout from './Logout';

const StyledHeader = styled.header`
  padding: 2rem 1rem;
  display: flex;
  justify-content: flex-end;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logout />
    </StyledHeader>
  );
}
