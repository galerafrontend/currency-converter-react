import styled from "styled-components";

export const ErrorText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.crimson};
  padding-bottom: 15px;
  font-weight: 700;
`;