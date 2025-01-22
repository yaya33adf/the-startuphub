import { Tool } from "../types/ToolTypes";
import { MessageSquare, Headset, Heart } from "lucide-react";

export const customerExperienceTools: Tool[] = [
  {
    title: "Customer Feedback System",
    description: "Collect and analyze customer feedback",
    icon: MessageSquare,
    path: "/tools/customer-feedback",
    active: true
  },
  {
    title: "Support Ticket Manager",
    description: "Manage customer support tickets efficiently",
    icon: Headset,
    path: "/tools/support-tickets",
    active: true
  },
  {
    title: "Customer Satisfaction Survey",
    description: "Create and manage customer satisfaction surveys",
    icon: Heart,
    path: "/tools/satisfaction-survey",
    active: true
  }
];