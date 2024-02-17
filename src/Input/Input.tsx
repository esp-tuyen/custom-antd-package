import { Input as InputAntd, InputProps } from "antd";
import React from "react";

const Input: React.FC<InputProps> = (props) => {
  return <InputAntd {...props} />;
};

export default Input;
