import styled from "styled-components";

export const Text = styled.span`
  display: inline-block;
  width: 180px;
  margin-right: 20px;
  margin-top: 15px;
  padding: 10px;

  @media(max-width: 768px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  border: 1px solid black;
  border-radius: 2px;
  width: 100%;
  max-width: 400px;
  padding: 10px;

  @media(max-width: 768px) {
    max-width: 100%;
  }
`;