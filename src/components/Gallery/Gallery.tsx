import { ReactNode } from "react";
import Styled from "./Gallery.styled";

export function Gallery({ children }: { children: ReactNode }) {
  return <Styled.Grid>{children}</Styled.Grid>;
}
