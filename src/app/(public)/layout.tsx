import { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return <main className="container mx-auto py-6">{children}</main>;
}
