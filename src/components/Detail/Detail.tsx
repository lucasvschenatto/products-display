import { ReactNode, useId } from "react";
import { Info } from "@/components/Info";
import Styled from "./Detail.styled";

export function Detail({
  children,
  label,
  highlight,
  noText,
}: {
  children?: ReactNode;
  label: string;
  highlight?: boolean;
  noText?: boolean;
}) {
  const id = useId();
  return (
    <Styled.Detail>
      <Styled.Label>{label}</Styled.Label>
      {noText ? (
        children
      ) : (
        <Info id={id} highlight={highlight}>
          {children}
        </Info>
      )}
    </Styled.Detail>
  );
}
