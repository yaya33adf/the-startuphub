import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

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
      <Card>
        <CardHeader>
          <CardTitle>Generated Persona: {persona.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] pr-4">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Basic Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Age Range</p>
                    <p>{persona.age}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Gender</p>
                    <p>{persona.gender}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Occupation</p>
                    <p>{persona.occupation}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Income Range</p>
                    <p>{persona.income}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p>{persona.location}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Interests & Hobbies</h3>
                <p className="whitespace-pre-wrap">{persona.interests}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Pain Points & Challenges</h3>
                <p className="whitespace-pre-wrap">{persona.painPoints}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Goals & Aspirations</h3>
                <p className="whitespace-pre-wrap">{persona.goals}</p>
              </div>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      <Button onClick={onReset} className="w-full">
        Create New Persona
      </Button>
    </div>
  );
};