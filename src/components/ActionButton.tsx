
import React from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ActionButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  className?: string;
}

const ActionButton = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className 
}: ActionButtonProps) => {
  const baseStyles = "px-6 py-2.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none";
  
  const variantStyles = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md",
    secondary: "bg-slate-100 text-slate-800 hover:bg-slate-200 shadow-sm",
    outline: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50"
  };

  return (
    <button 
      className={cn(baseStyles, variantStyles[variant], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ActionButton;
