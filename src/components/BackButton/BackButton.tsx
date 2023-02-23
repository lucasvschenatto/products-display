import { useRouter } from "next/router";
import Styled from "./BackButton.styled";

export function BackButton() {
  const router = useRouter();
  return (
    <Styled.BackButton onClick={() => router.push("/")}>
      Go back
    </Styled.BackButton>
  );
}
