import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
// import 'react-pro-sidebar/dist/css/styles.css';
import {
  StyleRounded,
  LocalShippingRounded,
  TrendingUpRounded,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Products, Orders, Analytics } from "../components/Admin";

const Admin = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("Products");

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div className="admin-page">
      <Sidebar style={{ height: "90vh" }}>
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "5px",
            backgroundColor: "#fad07cc9",
            color: "#15141573",
          }}
        >
          Admin Panel
        </h3>
        <Menu
          iconShape="square"
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  color: disabled ? '#f5d9ff' : '#9005db',
                  backgroundColor: active ? '#0555b77a' : undefined,
                };
            },
          }}
        >
          <MenuItem
            icon={<StyleRounded color="primary" />}
            active={activeMenuItem === "Products"}
            onClick={() => handleMenuItemClick("Products")}
          >
            Products
          </MenuItem>
          <MenuItem
            icon={<LocalShippingRounded color="secondary" />}
            active={activeMenuItem === "Orders"}
            onClick={() => handleMenuItemClick("Orders")}
          >
            Orders
          </MenuItem>
          <MenuItem
            icon={<TrendingUpRounded color="action" />}
            active={activeMenuItem === "Analytics"}
            onClick={() => handleMenuItemClick("Analytics")}
          >
            Data Analytics
          </MenuItem>
        </Menu>
      </Sidebar>
      <div className="admin-body">
        {/* Your body content goes here */}
        {activeMenuItem === "Products" && <Products />}
        {activeMenuItem === "Orders" && <Orders />}
        {activeMenuItem === "Analytics" && <Analytics />}
      </div>
    </div>
  );
};

export default Admin;
