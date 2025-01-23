import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

interface Course {
  name: string;
  platform: string;
  completionDate: string;
}

interface CoursesInputProps {
  courses: Course[];
  onCoursesChange: (courses: Course[]) => void;
}

export function CoursesInput({ courses, onCoursesChange }: CoursesInputProps) {
  const [newCourse, setNewCourse] = useState<Course>({ name: "", platform: "", completionDate: "" });

  const addCourse = () => {
    if (newCourse.name && newCourse.platform) {
      onCoursesChange([...courses, newCourse]);
      setNewCourse({ name: "", platform: "", completionDate: "" });
    }
  };

  const removeCourse = (index: number) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    onCoursesChange(updatedCourses);
  };

  return (
    <div className="space-y-4">
      <Label>Courses</Label>
      
      <div className="space-y-4">
        {courses.map((course, index) => (
          <div key={index} className="flex items-center gap-2 p-2 border rounded-md">
            <div className="flex-1">
              <p className="font-medium">{course.name}</p>
              <p className="text-sm text-muted-foreground">{course.platform} - {course.completionDate}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeCourse(index)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>

      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <Input
            placeholder="Course name"
            value={newCourse.name}
            onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
          />
          <Input
            placeholder="Platform (e.g., Coursera, Udemy)"
            value={newCourse.platform}
            onChange={(e) => setNewCourse({ ...newCourse, platform: e.target.value })}
          />
        </div>
        <Input
          type="date"
          value={newCourse.completionDate}
          onChange={(e) => setNewCourse({ ...newCourse, completionDate: e.target.value })}
        />
        <Button onClick={addCourse} type="button">Add Course</Button>
      </div>
    </div>
  );
}