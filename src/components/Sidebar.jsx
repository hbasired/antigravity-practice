import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Home,
    Compass,
    Users,
    Clock,
    Settings,
    LogOut,
    Menu,
    X,
    Zap
} from 'lucide-react';
import { cn } from '../utils';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const navItems = [
        { icon: Home, label: 'Home', path: '/' },
        { icon: Compass, label: 'Browse', path: '/browse' },
        { icon: Users, label: 'Following', path: '/following' },
        { icon: Clock, label: 'History', path: '/history' },
    ];

    const bottomItems = [
        { icon: Settings, label: 'Settings', path: '/settings' },
        { icon: LogOut, label: 'Logout', path: '/logout' },
    ];

    return (
        <motion.aside
            initial={false}
            animate={{ width: collapsed ? 80 : 240 }}
            className="h-screen sticky top-0 bg-surface/50 backdrop-blur-xl border-r border-surfaceHighlight flex flex-col z-50 transition-all duration-300"
        >
            {/* Logo Area */}
            <div className="h-16 flex items-center justify-between px-4 border-b border-surfaceHighlight/50">
                {!collapsed && (
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-purple-400 flex items-center justify-center shadow-glow-sm">
                            <Zap className="w-5 h-5 text-white fill-white" />
                        </div>
                        <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            StreamFlow
                        </span>
                    </div>
                )}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="p-1.5 rounded-lg hover:bg-surfaceHighlight text-textMuted hover:text-white transition-colors ml-auto"
                >
                    {collapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-6 px-3 flex flex-col gap-2 overflow-y-auto">
                {navItems.map((item) => (
                    <NavItem key={item.path} item={item} collapsed={collapsed} />
                ))}

                <div className="my-4 border-t border-surfaceHighlight/50 mx-2" />

                <div className={cn("px-3 mb-2 text-xs font-semibold text-textMuted uppercase", collapsed && "hidden")}>
                    Your Library
                </div>
                {/* Placeholder for favorites/playlists */}
                {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surfaceHighlight/30 text-textMuted cursor-pointer group">
                        <div className="w-8 h-8 rounded bg-surfaceHighlight group-hover:bg-surfaceHighlight/80 transition-colors" />
                        {!collapsed && <div className="h-3 w-20 bg-surfaceHighlight rounded group-hover:bg-surfaceHighlight/80 transition-colors" />}
                    </div>
                ))}
            </nav>

            {/* User Profile / Bottom Actions */}
            <div className="p-3 border-t border-surfaceHighlight/50 flex flex-col gap-1">
                {bottomItems.map((item) => (
                    <NavItem key={item.path} item={item} collapsed={collapsed} />
                ))}
            </div>
        </motion.aside>
    );
};

const NavItem = ({ item, collapsed }) => (
    <NavLink
        to={item.path}
        className={({ isActive }) => cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative overflow-hidden",
            isActive
                ? "bg-primary/10 text-primary"
                : "text-textMuted hover:text-textMain hover:bg-surfaceHighlight/30"
        )}
    >
        <item.icon className={cn("w-5 h-5 shrink-0", collapsed ? "mx-auto" : "")} />
        {!collapsed && (
            <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
        )}
        {/* Active Indicator Glow */}
        {({ isActive }) => isActive && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full shadow-glow-sm" />
        )}
    </NavLink>
);

export default Sidebar;
