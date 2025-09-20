import Contents from "./Contents";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

const Layout = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <Sidebar />
      <Contents />
    </div>
  );
};

export default Layout;
