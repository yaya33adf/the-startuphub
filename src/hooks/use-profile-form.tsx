import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Json } from "@/integrations/supabase/types";

interface Certificate {
  name: string;
  issuer: string;
  date: string;
}

interface Course {
  name: string;
  platform: string;
  completionDate: string;
}

export function useProfileForm() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [userType, setUserType] = useState<string | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [bio, setBio] = useState("");
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  
  const navigate = useNavigate();
  const { toast } = useToast();

  const getProfile = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth/signin");
        return;
      }

      console.log("Fetching profile for user:", session.user.id);
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
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
        setBio(data.bio || "");
        setCertificates(data.certificates ? (JSON.parse(JSON.stringify(data.certificates)) as Certificate[]) : []);
        setCourses(data.courses ? (JSON.parse(JSON.stringify(data.courses)) as Course[]) : []);
        setLanguages(data.languages || []);
        setSkills(data.skills || []);
      }
    } catch (error) {
      console.error("Error loading profile:", error);
      toast({
        title: "Error",
        description: "Error loading profile",
        variant: "destructive",
      });
    }
  };

  const updateProfile = async () => {
    try {
      setLoading(true);
      console.log("Starting profile update...");
      
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth/signin");
        return;
      }

      const updates = {
        id: session.user.id,
        email,
        user_type: userType,
        name,
        avatar_url: avatarUrl,
        bio,
        certificates: JSON.parse(JSON.stringify(certificates)) as Json,
        courses: JSON.parse(JSON.stringify(courses)) as Json,
        languages,
        skills,
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
  };

  return {
    loading,
    email,
    name,
    userType,
    avatarUrl,
    bio,
    certificates,
    courses,
    languages,
    skills,
    setEmail,
    setName,
    setUserType,
    setAvatarUrl,
    setBio,
    setCertificates,
    setCourses,
    setLanguages,
    setSkills,
    getProfile,
    updateProfile
  };
}