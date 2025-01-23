import { User, Building2, Briefcase, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { forwardRef } from "react";

interface UserDisplayProps {
  displayName: string;
  avatarUrl?: string | null;
  userType?: string | null;
}

export const UserDisplay = forwardRef<HTMLButtonElement, UserDisplayProps>(
  ({ displayName, avatarUrl, userType }, ref) => {
    const UserTypeIcon = userType === 'startup' ? Building2 : 
                        userType === 'investor' ? Briefcase :
                        userType === 'freelancer' ? Code2 :
                        null;

    return (
      <Button 
        ref={ref}
        variant="ghost" 
        className="h-10 px-3"
      >
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={displayName}
            className="h-6 w-6 rounded-full mr-2"
          />
        ) : (
          <User className="h-4 w-4 mr-2" />
        )}
        <span>{displayName}</span>
        {UserTypeIcon && (
          <UserTypeIcon className="h-4 w-4 ml-2 text-muted-foreground" />
        )}
      </Button>
    );
  }
);

UserDisplay.displayName = "UserDisplay";