import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Briefcase, MapPin, Heart, Target, XCircle } from "lucide-react";

interface PersonaResultProps {
  persona: {
    name: string;
    age: string;
    gender: string;
    occupation: string;
    income: string;
    location: string;
    interests: string;
    painPoints: string;
    goals: string;
  };
  onReset: () => void;
}

export const PersonaResult = ({ persona, onReset }: PersonaResultProps) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Buyer Persona Profile</h2>
        <Button variant="outline" onClick={onReset}>Create New Persona</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Demographics
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-semibold">Name:</p>
            <p>{persona.name}</p>
          </div>
          <div>
            <p className="font-semibold">Age Range:</p>
            <p>{persona.age}</p>
          </div>
          <div>
            <p className="font-semibold">Gender:</p>
            <p className="capitalize">{persona.gender}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            Professional
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-semibold">Occupation:</p>
            <p>{persona.occupation}</p>
          </div>
          <div>
            <p className="font-semibold">Income Range:</p>
            <p>{persona.income}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Location
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{persona.location}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5" />
            Interests & Hobbies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{persona.interests}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <XCircle className="h-5 w-5" />
            Pain Points & Challenges
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{persona.painPoints}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Goals & Aspirations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{persona.goals}</p>
        </CardContent>
      </Card>
    </div>
  );
};