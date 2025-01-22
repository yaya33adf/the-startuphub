import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { CategorySelect } from "./CategorySelect";
import { RoleSelect } from "./RoleSelect";

export const ProblemForm = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const session = await supabase.auth.getSession();
      if (!session.data.session) {
        toast({
          title: "Authentication required",
          description: "Please sign in to submit a problem",
          variant: "destructive",
        });
        navigate("/auth/signin");
        return;
      }

      const { error } = await supabase.from("problems").insert({
        title,
        description,
        role_category: selectedCategory,
        role: selectedRole,
        user_id: session.data.session.user.id,
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Your problem has been submitted successfully",
      });

      // Reset form
      setTitle("");
      setDescription("");
      setSelectedCategory("");
      setSelectedRole("");
    } catch (error) {
      console.error("Error submitting problem:", error);
      toast({
        title: "Error",
        description: "Failed to submit your problem. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Submit a Problem</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <CategorySelect
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <RoleSelect
            selectedCategory={selectedCategory}
            selectedRole={selectedRole}
            onRoleChange={setSelectedRole}
          />

          <div className="space-y-2">
            <label className="text-sm font-medium">Title</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the title of your problem"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your problem in detail"
              className="min-h-[150px]"
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Submit Problem
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};