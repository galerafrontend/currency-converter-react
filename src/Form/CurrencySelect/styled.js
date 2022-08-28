import styled from "styled-components";

export const Text = styled.span`
  display: inline-block;
  width: 180px;
  margin-right: 20px;
  padding: 10px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
  }
`;

export const Select = styled.select`
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 2px;
  width: 100%;
  max-width: 400px;
  padding: 10px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-width: 100%;
  }
`;