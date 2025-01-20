import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface AvatarUploadProps {
  avatarUrl: string | null;
  onAvatarChange: (url: string) => void;
}

export function AvatarUpload({ avatarUrl, onAvatarChange }: AvatarUploadProps) {
  const { toast } = useToast();

  const uploadAvatar = async (file: File) => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const fileExt = file.name.split('.').pop();
      const filePath = `${session.user.id}-${Math.random()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

      onAvatarChange(publicUrl);
      toast({
        title: "Success",
        description: "Profile picture updated successfully",
      });
    } catch (error) {
      console.error('Error updating avatar:', error);
      toast({
        title: "Error",
        description: "Failed to update profile picture",
        variant: "destructive",
      });
    }
  };

  const handleAvatarChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      await uploadAvatar(file);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <Avatar className="h-24 w-24">
        <AvatarImage src={avatarUrl || undefined} />
        <AvatarFallback>
          <User className="h-12 w-12" />
        </AvatarFallback>
      </Avatar>
      <div className="flex items-center space-x-4">
        <Input
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
          className="w-full max-w-xs"
        />
      </div>
    </div>
  );
}