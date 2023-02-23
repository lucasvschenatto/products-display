import styled from "styled-components";

const BackButton = styled.button`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing["2xs"]};
  right: ${({ theme }) => theme.spacing["3xs"]};
  background-color: ${({ theme }) => theme.colors.lighterBlack};
  border-radius: ${({ theme }) => theme.radius.s};
  border: 1px solid ${({ theme }) => theme.colors.gold};
  padding: ${({ theme }) => theme.spacing["3xs"]}
    ${({ theme }) => theme.spacing.xs};
  cursor: pointer;
  transition: transform 0.1s ease-in-out, filter 250ms;
  :hover {
    filter: brightness(210%);
  }
  :active {
    transform: scale(0.98);
  }
`;
export default { BackButton };
