import React from 'react';

type ButtonProps = {
    variant: 'primary' | 'secondary';
    children: React.ReactNode;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'hover:cursor-pointer font-semibold py-3 px-12 rounded-full transition duration-300';
  const variantStyles = {
    primary: 'bg-red-600 hover:bg-red-700 text-white bg-gradient-to-br from-[#FF1E1E] via-[#FE0000] to-[#B30000] hover:from-[#FF3333] hover:via-[#FF1414] hover:to-[#CC0000] transition-all duration-300',
    secondary: 'border-2 border-white text-white hover:bg-white hover:text-black',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
