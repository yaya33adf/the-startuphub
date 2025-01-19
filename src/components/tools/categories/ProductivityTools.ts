import { Target, Users, CalendarDays, StickyNote } from "lucide-react";
import { Tool } from "../types/ToolTypes";
import { GoalTracker } from "../GoalTracker";
import { TeamManagement } from "../TeamManagement";
import { AppointmentScheduler } from "../AppointmentScheduler";
import { NotesWidget } from "../NotesWidget";

export const productivityTools: Tool[] = [
  {
    title: "Goal Tracker",
    description: "Set and track business goals and KPIs",
    icon: Target,
    component: GoalTracker,
    active: true,
  },
  {
    title: "Team Management",
    description: "Manage team members and assignments",
    icon: Users,
    component: TeamManagement,
    active: true,
  },
  {
    title: "Appointment Scheduler",
    description: "Schedule and manage business appointments",
    icon: CalendarDays,
    component: AppointmentScheduler,
    active: true,
    fullWidth: true,
  },
  {
    title: "Notes Widget",
    description: "Create and manage your notes easily",
    icon: StickyNote,
    component: NotesWidget,
    active: true,
  },
];