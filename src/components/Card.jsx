import React from 'react';
import { cn } from '../utils';
import { motion } from 'framer-motion';

const Card = ({ children, className, hover = true, ...props }) => {
    return (
        <motion.div
            whileHover={hover ? { y: -2 } : {}}
            className={cn(
                'bg-surface border border-surfaceHighlight/50 rounded-2xl p-4 overflow-hidden shadow-lg backdrop-blur-sm',
                hover && 'hover:border-primary/30 hover:shadow-glow-sm transition-colors duration-300',
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const CardHeader = ({ children, className }) => (
    <div className={cn('mb-3 flex items-center justify-between', className)}>{children}</div>
);

export const CardTitle = ({ children, className }) => (
    <h3 className={cn('text-lg font-semibold text-textMain', className)}>{children}</h3>
);

export const CardContent = ({ children, className }) => (
    <div className={cn('', className)}>{children}</div>
);

export default Card;
