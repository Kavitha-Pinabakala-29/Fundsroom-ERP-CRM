import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function PageContainer({ children }: Props) {
  return (
    <div
      style={{
        padding: 25,
        background: "#f8fafc",
        minHeight: "calc(100vh - 70px)",
      }}
    >
      {children}
    </div>
  );
}

export default PageContainer;