import React from "react";

import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <main className="app-layout-content">{children}</main>
    </div>
  );
};

export default Layout;
