import styled from "styled-components";

export const Info = styled.div`
  padding: 5px;
  display: grid;
  grid-template-columns: auto 1fr;
  font-size: 12px;
  color: ${({ theme }) => theme.color.gray};
  font-family: 'Roboto Mono', monospace;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    grid-template-columns: 1fr;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.teal};
  font-weight: 700;
  font-family: 'Roboto Mono', monospace;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    padding-top: 5px;
  }
`;

export const DateInfo = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.color.teal};
  font-family: 'Roboto Mono', monospace;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    padding-top: 5px;
  }
`;