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
  const baseStyles = "px-8 py-3 uppercase tracking-[0.2em] text-xs font-bold transition-all duration-300 ease-out font-sans";
  
  const variants = {
    primary: "bg-roopantor-gold text-roopantor-black hover:bg-roopantor-goldDark hover:scale-105",
    secondary: "bg-roopantor-green text-roopantor-black hover:bg-roopantor-greenDark hover:scale-105",
    outline: "border border-roopantor-gold text-roopantor-gold hover:bg-roopantor-gold hover:text-roopantor-black"
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