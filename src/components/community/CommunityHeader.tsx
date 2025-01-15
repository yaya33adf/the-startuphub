import { MessageSquare } from "lucide-react";

export const CommunityHeader = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-2">
        <MessageSquare className="w-6 h-6" />
        <h1 className="text-2xl font-bold">Community</h1>
      </div>
    </div>
  );
};