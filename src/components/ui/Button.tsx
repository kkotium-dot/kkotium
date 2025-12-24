import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  loading,
  disabled,
  children,
  onClick,
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${loading ? 'btn-loading' : ''} ${
        disabled ? 'btn-disabled' : ''
      }`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
      {loading && <Spinner />}
    </button>
  );
};

export default Button;
