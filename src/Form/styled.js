import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  border-radius: 5px;
  border: none;
  background-color: teal;
  font-weight: 700;
  color: white;
  padding: 10px;
  margin: 20px 0 10px 0;
  transition: 0.3s;

  &:hover {
    background-color: hsl(180, 100%, 30%);
    transform: scaleY(1.05) scaleX(1.05);
    cursor: pointer;
  }

  &:active {
    background-color: hsl(180, 100%, 35%);
  }
`;

export const ResultText = styled.span`
  font-size: 25px;
  color: teal;
  text-decoration: underline;
  font-weight: 700;
`;

export const ResultTitle = styled.span`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 15px;
`;