import PageHeader from "@/components/pageHeader/pageHeader";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <PageHeader className={"mt-8"} />
      <main>{children}</main>
      <footer className="mt-auto text-center py-8">Footer</footer>
    </div>
  );
};

export default Layout;
