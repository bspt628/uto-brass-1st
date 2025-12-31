'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: ButtonVariant;
  href?: string;
  external?: boolean;
}

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-dark active:bg-primary-dark focus:ring-primary',
  secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white focus:ring-primary',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', href, external, className = '', children, ...props }, ref) => {
    const baseStyles = `
      inline-flex items-center justify-center px-6 py-3
      font-medium rounded-lg transition-all duration-200 ease-out
      focus:outline-none focus:ring-2 focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
    `;

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
      return (
        <motion.a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className={combinedClassName}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={combinedClassName}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
