import styled from "styled-components";
import Link from "next/link";

const Header = styled.header`
  position: fixed;
  display: block;
  overflow: hidden;
  top: 0;
  padding: ${({ theme }) => theme.spacing["4xs"]};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 1;
  @media (min-width: 1024px) {
    padding: ${({ theme }) => theme.spacing["3xs"]};
  }
`;
const Logo = styled(Link)`
  display: block;
  max-width: max-content;
  text-decoration: none;
  * {
    overflow: visible;
  }
`;

export default { Header, Logo };
