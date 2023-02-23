import Image from "next/image";
import Styled from "./Rating.styled";

export function Rating({ value, max = 5 }: { value: number; max?: number }) {
  const stars = new Array(max);
  for (
    let i = 0, remaining = value;
    i < stars.length;
    i++, remaining = remaining - 1
  ) {
    const imageSrc =
      remaining > 1
        ? "/star.svg"
        : remaining >= 0.5
        ? "/star-half-dark.svg"
        : "/star-empty-dark.svg";
    stars[i] = (
      <Styled.ImageContainer key={i}>
        <Image src={imageSrc} alt={"icon star"} fill />
      </Styled.ImageContainer>
    );
  }
  return <Styled.Container>{stars}</Styled.Container>;
}
