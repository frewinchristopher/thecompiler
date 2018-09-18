import styled from 'styled-components';

export const Div = styled.div`
  a {
    color: black;
    text-decoration: none;

    &:hover {
      color: ${p => p.theme.Blue300};

      p {
        text-decoration: underline;
      }
    }
  }

  p {
    display: inline-block;
    margin-right: 5px;
  }
`;
