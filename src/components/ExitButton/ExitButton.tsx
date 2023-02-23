import Image from "next/image";
import { useRouter } from "next/router";
import Styled from "./Exit.styled";

export function ExitButton() {
  const router = useRouter();
  return (
    <Styled.Exit onClick={() => router.push("/")}>
      <Image src="/x.svg" alt="X logo" fill />
    </Styled.Exit>
  );
}
