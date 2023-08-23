import { useNavigate } from "react-router-dom";

import React from "react";

const useNavigate = (param) => {
  let instance = useNavigate();
  instance(param);
  return <div></div>;
};

export default useNavigate;
