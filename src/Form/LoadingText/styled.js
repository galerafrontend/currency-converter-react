import styled, { keyframes } from "styled-components";
import { ReactComponent as LoadingIcon } from "./loading_icon.svg";

export const LoadingInfo = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 10px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.teal};
  padding-bottom: 15px;
`;

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(LoadingIcon)`
  height: auto;
  margin-top: 48px;
  color:  ${({theme}) => theme.color.teal};
  animation: ${rotate} 1s linear infinite;

  @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
    width: 60px;
    margin-top: 32px;
  }
`;