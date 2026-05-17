import AppRoute from "../Routes/AppRoute";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

const Layout = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <Sidebar />
      <main className="mx-3 md:px-3 md:ml-65 pt-23 rounded">
        <AppRoute />
      </main>
    </div>
  );
};

export default Layout;
