import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SkillsLanguagesInput } from "./SkillsLanguagesInput";
import { CertificatesInput } from "./CertificatesInput";
import { CoursesInput } from "./CoursesInput";
import { PasswordUpdate } from "./PasswordUpdate";

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

interface ProfileSectionsProps {
  bio: string;
  onBioChange: (value: string) => void;
  skills: string[];
  onSkillsChange: (skills: string[]) => void;
  languages: string[];
  onLanguagesChange: (languages: string[]) => void;
  certificates: Certificate[];
  onCertificatesChange: (certificates: Certificate[]) => void;
  courses: Course[];
  onCoursesChange: (courses: Course[]) => void;
}

export function ProfileSections({
  bio,
  onBioChange,
  skills,
  onSkillsChange,
  languages,
  onLanguagesChange,
  certificates,
  onCertificatesChange,
  courses,
  onCoursesChange,
}: ProfileSectionsProps) {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          id="bio"
          value={bio}
          onChange={(e) => onBioChange(e.target.value)}
          placeholder="Tell us about yourself..."
          className="min-h-[100px]"
        />
      </div>

      <SkillsLanguagesInput
        title="Skills"
        items={skills}
        onItemsChange={onSkillsChange}
        placeholder="Add a skill (e.g., JavaScript, Project Management)"
      />

      <SkillsLanguagesInput
        title="Languages"
        items={languages}
        onItemsChange={onLanguagesChange}
        placeholder="Add a language (e.g., English, Spanish)"
      />

      <CertificatesInput
        certificates={certificates}
        onCertificatesChange={onCertificatesChange}
      />

      <CoursesInput
        courses={courses}
        onCoursesChange={onCoursesChange}
      />

      <PasswordUpdate />
    </>
  );
}