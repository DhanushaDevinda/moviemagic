import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
const { Content } = Layout;

const MovieLayout = () => (
  <Layout style={{ minHeight: "100vh", background: "#262729" }}>
    <Header />

    <Content>
      <Outlet />
    </Content>

    <Footer />
  </Layout>
);

export default MovieLayout;
