'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = `
      inline-flex items-center justify-center font-medium
      transition-all duration-300 ease-out
      transform hover:scale-[1.02] active:scale-[0.98]
      focus:outline-none focus:ring-2 focus:ring-offset-2
      disabled:opacity-50 disabled:pointer-events-none
      relative overflow-hidden
    `;

    const variants = {
      primary: `
        bg-[#CF2020] text-white
        hover:bg-[#B01B1B] hover:shadow-lg hover:shadow-[#CF2020]/25
        focus:ring-[#CF2020]
        after:absolute after:inset-0 after:bg-white/20 after:translate-x-[-100%]
        hover:after:translate-x-[100%] after:transition-transform after:duration-500
      `,
      secondary: `
        bg-[#4F2D7F] text-white
        hover:bg-[#3d2262] hover:shadow-lg hover:shadow-[#4F2D7F]/25
        focus:ring-[#4F2D7F]
      `,
      outline: `
        border-2 border-[#4F2D7F] text-[#4F2D7F] bg-transparent
        hover:bg-[#4F2D7F] hover:text-white hover:shadow-lg
        focus:ring-[#4F2D7F]
      `,
      ghost: `
        text-[#4F2D7F] bg-transparent
        hover:bg-[#4F2D7F]/10
        focus:ring-[#4F2D7F]
      `,
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm rounded',
      md: 'px-6 py-3 text-base rounded-md',
      lg: 'px-8 py-4 text-lg rounded-lg',
      icon: 'p-2 rounded',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
