import styled from "styled-components";

export const LoadingInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: ${({ theme }) => theme.color.teal};
  padding-bottom: 15px;
`;