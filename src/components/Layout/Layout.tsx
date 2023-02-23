import { ReactNode } from "react";
import { HeaderBar } from "@/components/HeaderBar";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeaderBar />
      <main>{children}</main>
    </>
  );
}
