import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MUButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'white' | 'black' | 'white-outline' | 'black-outline' | 'white-blur' | 'black-blur' | 'white-gradient' | 'black-gradient' | 'link-white' | 'link-black';
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export const MUButton = ({ 
  variant = 'black', 
  children, 
  icon,
  iconPosition = 'right',
  className,
  ...props 
}: MUButtonProps) => {
  const baseClasses = "rounded-[54px] px-6 py-3.5 font-semibold text-base leading-[150%] inline-flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer";
  
  const variantClasses = {
    'white': 'bg-white text-primary border border-border hover:bg-secondary',
    'black': 'bg-primary text-white border border-primary hover:bg-primary/90',
    'white-outline': 'bg-transparent border border-white text-white hover:bg-white/10',
    'black-outline': 'bg-transparent border border-primary text-primary hover:bg-primary/5',
    'white-blur': 'bg-white/20 backdrop-blur-[2.5px] border border-white text-white hover:bg-white/30',
    'black-blur': 'bg-white/20 backdrop-blur-[2.5px] border border-primary text-primary hover:bg-primary/10',
    'white-gradient': 'bg-white text-primary border border-transparent [background-clip:padding-box,border-box] [background-origin:padding-box,border-box] [background-image:linear-gradient(white,white),linear-gradient(119deg,hsl(var(--gradient-start)),hsl(var(--gradient-mid)),hsl(var(--gradient-end)))]',
    'black-gradient': 'bg-primary text-white border border-transparent [background-clip:padding-box,border-box] [background-origin:padding-box,border-box] [background-image:linear-gradient(hsl(var(--primary)),hsl(var(--primary))),linear-gradient(119deg,hsl(var(--gradient-start)),hsl(var(--gradient-mid)),hsl(var(--gradient-end)))]',
    'link-white': 'bg-transparent border-none text-white p-0 hover:opacity-80',
    'link-black': 'bg-transparent border-none text-primary p-0 hover:opacity-80',
  };

  return (
    <button
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </button>
  );
};
