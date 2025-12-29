import React from 'react';
import { cn } from '../utils';
import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    icon: Icon,
    ...props
}) => {
    const variants = {
        primary: 'bg-primary text-white hover:bg-primaryHover shadow-glow border border-transparent',
        secondary: 'bg-transparent border border-surfaceHighlight text-textMain hover:bg-surfaceHighlight/50 hover:border-primary/50',
        ghost: 'bg-transparent text-textMuted hover:text-textMain hover:bg-surfaceHighlight/30',
        danger: 'bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2.5 text-sm',
        lg: 'px-6 py-3 text-base',
        icon: 'p-2',
    };

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            className={cn(
                'relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {Icon && <Icon className="w-4 h-4" />}
            {children}
        </motion.button>
    );
};

export default Button;
