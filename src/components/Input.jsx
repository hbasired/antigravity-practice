import React from 'react';
import { cn } from '../utils';

const Input = ({ label, error, className, icon: Icon, ...props }) => {
    return (
        <div className="flex flex-col gap-1.5 w-full">
            {label && <label className="text-xs font-medium text-textMuted ml-1">{label}</label>}
            <div className="relative group">
                {Icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-textMuted group-focus-within:text-primary transition-colors">
                        <Icon className="w-4 h-4" />
                    </div>
                )}
                <input
                    className={cn(
                        'w-full bg-background border border-surfaceHighlight rounded-xl px-4 py-2.5 text-sm text-textMain placeholder:text-textMuted/50 outline-none transition-all duration-200',
                        'focus:border-primary focus:shadow-glow-sm',
                        Icon && 'pl-9',
                        error && 'border-red-500/50 focus:border-red-500',
                        className
                    )}
                    {...props}
                />
            </div>
            {error && <span className="text-xs text-red-500 ml-1">{error}</span>}
        </div>
    );
};

export default Input;
