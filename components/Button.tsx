import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold transition-all duration-300 ease-out font-sans border";
  
  const variants = {
    // Primary: Black bg, White text -> Hover: Dark Gray bg
    primary: "bg-roopantor-black text-white border-roopantor-black hover:bg-roopantor-textLight hover:border-roopantor-textLight hover:scale-105",
    
    // Secondary: White bg, Black text, Black border -> Hover: Black bg, White text
    secondary: "bg-white text-roopantor-black border-roopantor-black hover:bg-roopantor-black hover:text-white hover:scale-105",
    
    // Outline: Black border, Black text -> Hover: Black bg, White text
    outline: "bg-transparent border-roopantor-black text-roopantor-black hover:bg-roopantor-black hover:text-white"
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};