import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
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
import { CertificatesInput } from "@/components/profile-settings/CertificatesInput";
import { CoursesInput } from "@/components/profile-settings/CoursesInput";
import { SkillsLanguagesInput } from "@/components/profile-settings/SkillsLanguagesInput";
import { Label } from "@/components/ui/label";
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

interface Profile {
  id: string;
  email: string | null;
  name: string | null;
  user_type: string | null;
  avatar_url: string | null;
  bio: string | null;
  certificates: Json;
  courses: Json;
  languages: string[];
  skills: string[];
}

export default function ProfileSettings() {
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

          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Tell us about yourself..."
              className="min-h-[100px]"
            />
          </div>

          <SkillsLanguagesInput
            title="Skills"
            items={skills}
            onItemsChange={setSkills}
            placeholder="Add a skill (e.g., JavaScript, Project Management)"
          />

          <SkillsLanguagesInput
            title="Languages"
            items={languages}
            onItemsChange={setLanguages}
            placeholder="Add a language (e.g., English, Spanish)"
          />

          <CertificatesInput
            certificates={certificates}
            onCertificatesChange={setCertificates}
          />

          <CoursesInput
            courses={courses}
            onCoursesChange={setCourses}
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