import styled from "styled-components";

export const ErrorText = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 20px;
  color: ${({ theme }) => theme.color.crimson};
  padding-bottom: 15px;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
`;