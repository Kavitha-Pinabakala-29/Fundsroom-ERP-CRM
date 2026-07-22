import { ReactNode } from "react";

import Sidebar from "../components/ui/Sidebar";
import Navbar from "../components/ui/Navbar";
import PageContainer from "../components/ui/PageContainer";

interface Props {
  children: ReactNode;
}

function MainLayout({ children }: Props) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <PageContainer>{children}</PageContainer>
      </div>
    </div>
  );
}

export default MainLayout;