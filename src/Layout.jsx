import React from "react";
import Header from "./header/header";
import { Link, Outlet } from "react-router-dom";
import Footer from "./pages/footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;