import styled from "styled-components";

const Detail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Label = styled.p<{ area?: string }>`
  grid-area: ${({ area }) => area};
  color: ${({ theme }) => theme.colors.gold};
  width: 6rem;
`;
export default { Detail, Label };
