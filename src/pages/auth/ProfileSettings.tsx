import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AvatarUpload } from "@/components/profile-settings/AvatarUpload";
import { ProfileForm } from "@/components/profile-settings/ProfileForm";
import { PasswordUpdate } from "@/components/profile-settings/PasswordUpdate";

interface Profile {
  id: string;
  email: string | null;
  name: string | null;
  user_type: string | null;
  avatar_url: string | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export default function ProfileSettings() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [userType, setUserType] = useState<string | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth/signin");
        return;
      }

      console.log("Fetching profile for user:", session.user.id);
      const { data, error } = await supabase
        .from("profiles")
        .select("email, user_type, name, avatar_url")
        .eq("id", session.user.id)
        .single();

      if (error) {
        console.error("Error loading profile:", error);
        throw error;
      }

      if (data) {
        console.log("Profile data loaded:", data);
        setEmail(data.email || "");
        setUserType(data.user_type || null);
        setName(data.name || "");
        setAvatarUrl(data.avatar_url || null);
      }
    } catch (error) {
      console.error("Error loading profile:", error);
      toast({
        title: "Error",
        description: "Error loading profile",
        variant: "destructive",
      });
    }
  }

  async function updateProfile() {
    try {
      setLoading(true);
      console.log("Starting profile update...");
      
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth/signin");
        return;
      }

      // Create updates object with required id field
      const updates = {
        id: session.user.id, // Ensure id is always included
        email,
        user_type: userType,
        name,
        avatar_url: avatarUrl,
        updated_at: new Date().toISOString()
      };

      console.log("Updating profile with data:", updates);
      const { error } = await supabase
        .from('profiles')
        .upsert(updates);

      if (error) {
        console.error("Error updating profile:", error);
        throw error;
      }

      console.log("Profile updated successfully");
      toast({
        title: "Success",
        description: "Profile updated successfully",
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      toast({
        title: "Error",
        description: "Error updating profile",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container max-w-2xl py-8">
      <Card>
        <CardHeader>
          <CardTitle>Profile Settings</CardTitle>
          <CardDescription>
            Update your profile information and preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <AvatarUpload 
            avatarUrl={avatarUrl} 
            onAvatarChange={setAvatarUrl} 
          />

          <ProfileForm
            name={name}
            email={email}
            userType={userType}
            onNameChange={setName}
            onEmailChange={setEmail}
            onUserTypeChange={setUserType}
          />

          <PasswordUpdate />

          <Button
            onClick={updateProfile}
            disabled={loading}
            className="w-full"
          >
            {loading ? "Updating..." : "Update Profile"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}