import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import Input from './Input';
import Button from './Button';

const Navbar = () => {
    return (
        <header className="h-16 px-6 flex items-center justify-between sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-surfaceHighlight/30">

            {/* Search Bar - Centered-ish */}
            <div className="flex-1 max-w-xl mx-4">
                <Input
                    placeholder="Search for streams, games, or creators..."
                    icon={Search}
                    className="bg-surface/50 border-transparent focus:bg-surface"
                />
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-background" />
                </Button>

                <div className="h-6 w-px bg-surfaceHighlight mx-1" />

                <Button variant="secondary" size="md" className="rounded-full pl-2 pr-4 py-1.5 gap-3 border-surfaceHighlight">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
                    <span className="text-sm font-medium">Guest User</span>
                </Button>
            </div>
        </header>
    );
};

export default Navbar;
