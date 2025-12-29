import React from 'react';
import { Play, Heart, MessageSquare, Share2 } from 'lucide-react';
import Card, { CardTitle, CardContent } from '../components/Card';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const Home = () => {
    const featuredStream = {
        title: "Late Night Coding & Chill Lo-Fi Beats",
        streamer: "DevStreamer",
        category: "Software Development",
        viewers: "12.5k",
        thumbnail: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2600&auto=format&fit=crop",
    };

    const trendingStreams = [
        { id: 1, title: "Grand Final: T1 vs GEN.G", streamer: "LCK_Global", game: "League of Legends", viewers: "245k", color: "from-blue-500 to-indigo-600" },
        { id: 2, title: "Speedrunning Mario 64", streamer: "SpeedRunnerZ", game: "Super Mario 64", viewers: "4.2k", color: "from-red-500 to-orange-600" },
        { id: 3, title: "Just Chatting / AMA", streamer: "LifeWithSam", game: "Just Chatting", viewers: "15k", color: "from-purple-500 to-pink-600" },
        { id: 4, title: "Valorant Ranked Grind", streamer: "FPS_Pro", game: "VALORANT", viewers: "32k", color: "from-emerald-500 to-teal-600" },
        { id: 5, title: "Cooking with spices!", streamer: "ChefMike", game: "Food & Drink", viewers: "8.1k", color: "from-yellow-500 to-orange-500" },
        { id: 6, title: "Building a React App", streamer: "CodeMaster", game: "Tech", viewers: "2.5k", color: "from-cyan-500 to-blue-500" },
    ];

    return (
        <div className="space-y-8 max-w-7xl mx-auto">
            {/* Featured Hero Section */}
            <section className="relative h-[500px] rounded-3xl overflow-hidden group">
                <div className="absolute inset-0">
                    <img
                        src={featuredStream.thumbnail}
                        alt="Featured"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 p-12 w-full max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 mb-4"
                    >
                        <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">LIVE</span>
                        <span className="text-primary font-medium">{featuredStream.category}</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl font-bold text-white mb-4 leading-tight"
                    >
                        {featuredStream.title}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <div className="w-10 h-10 rounded-full bg-surfaceHighlight" />
                        <div>
                            <p className="font-semibold text-white">{featuredStream.streamer}</p>
                            <p className="text-sm text-textMuted">{featuredStream.viewers} watching</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex gap-4"
                    >
                        <Button size="lg" className="rounded-2xl px-8 shadow-glow-sm">
                            <Play className="w-5 h-5 fill-current" />
                            Watch Stream
                        </Button>
                        <Button variant="secondary" size="lg" className="rounded-2xl backdrop-blur-md bg-white/5 border-white/10 hover:bg-white/10">
                            <Heart className="w-5 h-5" />
                            Follow
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Categories / Trending */}
            <section>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <span className="w-1 h-6 bg-primary rounded-full" />
                        Live Channels We Think You'll Like
                    </h2>
                    <Button variant="ghost" size="sm">View All</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {trendingStreams.map((stream) => (
                        <Card key={stream.id} className="group p-3 border-transparent bg-surface/30 hover:bg-surface">
                            {/* Thumbnail Area */}
                            <div className="relative aspect-video rounded-xl overflow-hidden mb-3 bg-surfaceHighlight">
                                <div className={`absolute inset-0 bg-gradient-to-br ${stream.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                                <div className="absolute top-2 left-2 px-2 py-0.5 bg-red-600/90 text-white text-[10px] font-bold rounded uppercase tracking-wider backdrop-blur-sm">
                                    Live
                                </div>
                                <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/60 text-white text-xs rounded backdrop-blur-sm">
                                    {stream.viewers} viewers
                                </div>
                            </div>

                            {/* Info */}
                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-full bg-surfaceHighlight shrink-0" />
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-textMain truncate leading-tight mb-1 group-hover:text-primary transition-colors">
                                        {stream.title}
                                    </h3>
                                    <p className="text-xs text-textMuted mb-0.5">{stream.streamer}</p>
                                    <p className="text-xs text-primary/80 hover:underline cursor-pointer">{stream.game}</p>
                                </div>
                            </div>

                            {/* Tags (Optional) */}
                            <div className="mt-3 flex gap-2">
                                <span className="px-2 py-0.5 rounded-full bg-surfaceHighlight/50 text-[10px] text-textMuted">English</span>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
