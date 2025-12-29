import React, { useState } from 'react';
import {
    Heart,
    Share2,
    MoreVertical,
    Send,
    Smile,
    Gift,
    Settings as SettingsIcon,
    Monitor,
    Volume2,
    Maximize,
    Users
} from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';
import { cn } from '../utils';

const StreamView = () => {
    const [chatMessage, setChatMessage] = useState("");

    const chatMessages = [
        { user: "NeonNinja", color: "text-red-400", text: "This layout is insane! 🔥" },
        { user: "CodeWizard", color: "text-blue-400", text: "Is this built with Tailwind?" },
        { user: "DesignGuru", color: "text-green-400", text: "Love the dark mode aesthetic." },
        { user: "Bot_01", color: "text-gray-400", text: "Welcome to the stream everybody!" },
        { user: "GamerGirl", color: "text-pink-400", text: "PogChamp" },
        { user: "DevDev", color: "text-yellow-400", text: "Can you show the code again?" },
    ];

    return (
        <div className="h-[calc(100vh-8rem)] flex gap-4 overflow-hidden">
            {/* LEFT: Video Player & Stream Info */}
            <div className="flex-1 flex flex-col min-w-0 gap-4 overflow-y-auto pr-2">
                {/* Video Player Placeholder */}
                <div className="w-full aspect-video bg-black rounded-2xl relative group overflow-hidden shadow-2xl shadow-black/50 border border-surfaceHighlight/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-textMuted/20 font-bold text-4xl">Stream Offline</span>
                    </div>

                    {/* Overlay Controls */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-4">
                            <Button size="icon" variant="ghost" className="text-white hover:bg-white/10"><Monitor className="w-5 h-5" /></Button>
                            <Button size="icon" variant="ghost" className="text-white hover:bg-white/10"><Volume2 className="w-5 h-5" /></Button>
                        </div>
                        <div className="flex items-center gap-4">
                            <Button size="icon" variant="ghost" className="text-white hover:bg-white/10"><SettingsIcon className="w-5 h-5" /></Button>
                            <Button size="icon" variant="ghost" className="text-white hover:bg-white/10"><Maximize className="w-5 h-5" /></Button>
                        </div>
                    </div>
                </div>

                {/* Stream Info */}
                <div className="flex items-start justify-between pb-8">
                    <div className="flex gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-purple-500 p-0.5">
                            <div className="w-full h-full bg-surface rounded-[14px] flex items-center justify-center p-1">
                                <div className="w-full h-full bg-surfaceHighlight rounded-xl" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-textMain mb-1">Building the Future of Streaming UI</h1>
                            <div className="flex items-center gap-2 text-sm text-textMuted">
                                <span className="text-primary font-medium">AntigravityDev</span>
                                <span>•</span>
                                <span>Just Chatting</span>
                                <span>•</span>
                                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> 10.4k Viewers</span>
                            </div>
                            <div className="mt-3 flex gap-2">
                                {["Design", "React", "Coding", "Chill"].map(tag => (
                                    <span key={tag} className="px-2 py-1 rounded-md bg-surfaceHighlight/30 border border-surfaceHighlight/50 text-xs text-textMuted hover:border-primary/50 transition-colors cursor-default">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="primary" className="shadow-none rounded-xl">
                            <Heart className="w-4 h-4 fill-current" /> Follow
                        </Button>
                        <Button variant="secondary" className="rounded-xl">
                            <Share2 className="w-4 h-4" /> Share
                        </Button>
                        <Button size="icon" variant="ghost" className="rounded-xl">
                            <MoreVertical className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                {/* Placeholder for Channel Panels/Description */}
                <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="bg-surface/50 border border-surfaceHighlight/30 rounded-xl h-48 flex items-center justify-center text-textMuted/30 font-medium">
                            About Panel {i}
                        </div>
                    ))}
                </div>
            </div>


            {/* RIGHT: Chat (The "Tools" Panel vibe) */}
            <div className="w-80 flex flex-col bg-surface border border-surfaceHighlight/50 rounded-2xl overflow-hidden shadow-xl shrink-0">
                <div className="h-12 border-b border-surfaceHighlight/50 flex items-center justify-between px-4 bg-surfaceHighlight/10 backdrop-blur-sm">
                    <span className="font-semibold text-sm">Stream Chat</span>
                    <Button size="icon" variant="ghost" className="h-8 w-8"><Users className="w-4 h-4" /></Button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-surfaceHighlight scrollbar-track-transparent">
                    {chatMessages.map((msg, idx) => (
                        <div key={idx} className="text-sm">
                            <span className={cn("font-bold mr-2 cursor-pointer hover:underline", msg.color)}>{msg.user}:</span>
                            <span className="text-textMain/90">{msg.text}</span>
                        </div>
                    ))}
                    {/* Faux scroll history */}
                    <div className="h-4" />
                </div>

                {/* Chat Input */}
                <div className="p-3 bg-surfaceHighlight/10 border-t border-surfaceHighlight/50">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Send a message..."
                            className="w-full bg-background/50 border border-surfaceHighlight rounded-xl pl-3 pr-10 py-2.5 text-sm outline-none focus:border-primary focus:bg-background transition-all"
                            value={chatMessage}
                            onChange={(e) => setChatMessage(e.target.value)}
                        />
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                            <Button size="icon" variant="ghost" className="h-7 w-7 text-textMuted hover:text-primary">
                                <Smile className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-2 px-1">
                        <div className="flex gap-1">
                            <div className="flex items-center gap-1 text-primary text-xs font-bold px-2 py-1 rounded bg-primary/10 cursor-pointer hover:bg-primary/20">
                                <Gift className="w-3 h-3" /> 100 Bits
                            </div>
                        </div>
                        <Button size="sm" className="px-3 h-8 text-xs rounded-lg">Chat</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StreamView;
