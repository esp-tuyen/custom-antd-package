import { Button as ButtonAntd, ButtonProps } from "antd";
import React from "react";

const Button: React.FC<ButtonProps> = (props) => {
  return <ButtonAntd {...props} />;
};

export default Button;
