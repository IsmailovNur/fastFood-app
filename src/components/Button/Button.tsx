import type { FC } from "react";
import React from "react";
import "./Button.css";

interface ButtonProps extends React.PropsWithChildren {
  children: React.ReactNode;
  className?: string;
  clickHandler?: () => void;
}

const Button: FC<ButtonProps> = (props) => {
  const {children, className, clickHandler} = props;

  return (
    <button
      className={`btn ${className}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;