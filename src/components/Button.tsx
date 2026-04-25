import {type ReactNode} from "react";

interface ButtonProps {
  className?: string;
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({
  className="",
  type = "button",
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button className={`button ${className}`.trim()} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
