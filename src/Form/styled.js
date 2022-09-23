import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  border-radius: 5px;
  border: none;
  background: ${({ theme }) => theme.color.teal};
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
  padding: 10px;
  margin: 20px 0 10px 0;
  transition: filter 0.5s;

  &:hover {
    filter: brightness(120%);
    transform: scaleY(1.05) scaleX(1.05);
    cursor: pointer;
  }

  &:active {
    filter: brightness(140%);
  }
`;

export const ResultText = styled.span`
  font-size: 25px;
  color: ${({ theme }) => theme.color.teal};
  border-bottom: 2px solid ${({ theme }) => theme.color.teal};
  font-weight: 700;
`;

export const ResultTitle = styled.span`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 15px;
`;