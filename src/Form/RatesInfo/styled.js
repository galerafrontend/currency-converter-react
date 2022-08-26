import styled from "styled-components";

export const Info = styled.div`
  padding: 5px;
  display: grid;
  grid-template-columns: auto 1fr;
  font-size: 12px;
  color: hsl(0, 0%, 50%);
  font-family: 'Roboto Mono', monospace;

  @media(max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: teal;
  font-weight: 700;
  font-family: 'Roboto Mono', monospace;
`;

export const DateInfo = styled.span`
  font-weight: 700;
  color: teal;
  font-family: 'Roboto Mono', monospace;
`;