import styled from "styled-components";

export const Time = styled.div`
  display: flex;
  justify-content: end;
  font-family: 'Roboto Mono', monospace;
  font-size: 15px;
  color: ${({ theme }) => theme.color.gray};
  padding-top: 10px;
`;