import { MessageSquare, Users, TrendingUp } from "lucide-react";

export const CommunityHeader = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-4xl font-bold">Community Hub</h2>
        <p className="text-muted-foreground text-lg">
          Connect with fellow entrepreneurs, share insights, and grow together
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center space-x-4 bg-accent/30 p-4 rounded-lg">
          <MessageSquare className="w-8 h-8 text-primary" />
          <div>
            <h3 className="font-semibold">Discussions</h3>
            <p className="text-muted-foreground">Share your thoughts</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 bg-accent/30 p-4 rounded-lg">
          <Users className="w-8 h-8 text-primary" />
          <div>
            <h3 className="font-semibold">Network</h3>
            <p className="text-muted-foreground">Connect with peers</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 bg-accent/30 p-4 rounded-lg">
          <TrendingUp className="w-8 h-8 text-primary" />
          <div>
            <h3 className="font-semibold">Trending Topics</h3>
            <p className="text-muted-foreground">Stay updated</p>
          </div>
        </div>
      </div>
    </div>
  );
};