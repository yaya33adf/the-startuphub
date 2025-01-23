import { useEffect } from "react";
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
import { ProfileSections } from "@/components/profile-settings/ProfileSections";
import { useProfileForm } from "@/hooks/use-profile-form";

export default function ProfileSettings() {
  const {
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
  } = useProfileForm();

  useEffect(() => {
    getProfile();
  }, []);

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

          <ProfileSections
            bio={bio}
            onBioChange={setBio}
            skills={skills}
            onSkillsChange={setSkills}
            languages={languages}
            onLanguagesChange={setLanguages}
            certificates={certificates}
            onCertificatesChange={setCertificates}
            courses={courses}
            onCoursesChange={setCourses}
          />

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