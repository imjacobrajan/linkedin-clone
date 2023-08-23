import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import "./common.scss";

const Loder = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  return (
    <div className="loader">
      <Spin indicator={antIcon} />
      <p>Loading...</p>
    </div>
  );
};

export default Loder;
