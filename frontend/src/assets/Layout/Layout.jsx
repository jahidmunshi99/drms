import AppRoute from "../Routes/AppRoute";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

const Layout = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <Sidebar />
      <main className="mx-5 md:px-5 md:ml-70 pt-23 mb-15 rounded">
        <AppRoute />
      </main>
    </div>
  );
};

export default Layout;
