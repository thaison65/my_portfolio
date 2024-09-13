import React from 'react';

import './Button.scss';

interface ButtonProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  // size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  width?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const {
    id,
    className,
    onClick,
    type = 'button',
    variant = 'primary',
    // size = 'medium',
    icon,
    width,
    disabled = false,
  } = props;

  const variantClasses: Record<string, string> = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
  };

  return (
    <button
      id={id && id}
      className={`
        base-button ${variantClasses[variant]} ${className ? className : ''} ${
        width ? `${width}` : ''
      }
      `}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
      {icon && icon}
    </button>
  );
};

export default Button;
