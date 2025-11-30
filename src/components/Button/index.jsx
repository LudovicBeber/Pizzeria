import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({
  type,
  disabled,
  onClick,
  children,
  link,
  openOnSamePage = true,
  className,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link?.length) {
      navigate(link, { replace: true });
      return;
    }

    onClick();
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={`px-4 py-2 font-bold text-white bg-blue-400 rounded-md hover:bg-blue-600 hover:cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
