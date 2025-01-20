import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "@supabase/auth-helpers-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProfileForm } from "./components/ProfileForm";

export default function ProfileSettings() {
  const session = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) {
      navigate("/auth/signin");
    }
  }, [session, navigate]);

  if (!session) {
    return null;
  }

  return (
    <div className="container max-w-2xl py-10">
      <Card>
        <CardHeader>
          <CardTitle>Profile Settings</CardTitle>
          <CardDescription>
            Update your profile information and password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ProfileForm userId={session.user.id} />
        </CardContent>
      </Card>
    </div>
  );
}