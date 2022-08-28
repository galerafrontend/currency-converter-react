import styled from "styled-components";

export const Container = styled.div`
  flex-basis: 700px;
  margin: 20px;
  padding: 20px 40px 20px 40px;
  background: ${({ theme }) => theme.color.white};
  border-radius: 25px;
  box-shadow: 0 0 2px 2px ${({ theme }) => theme.color.silverChalice};
`;