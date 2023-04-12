import Header from "../molecules/header";
import SideMenu from "../molecules/sideMenu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <>
      <Header />
      <SideMenu />
      <div className="flex items-center justify-center h-screen 
      w-screen bg-gray-100 box-border scrollbar-hide overflow-auto">
        {children}
      </div>
    </>
  );
}