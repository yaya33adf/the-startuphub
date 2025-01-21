import { RouteObject } from "react-router-dom";
import Dashboard from "@/pages/admin/Dashboard";
import RoadmapManager from "@/pages/admin/RoadmapManager";
import { ProtectedAdminRoute } from "@/components/auth/ProtectedAdminRoute";

export const adminRoutes: RouteObject[] = [
  {
    path: "/admin",
    element: (
      <ProtectedAdminRoute>
        <Dashboard />
      </ProtectedAdminRoute>
    ),
  },
  {
    path: "/admin/roadmaps",
    element: (
      <ProtectedAdminRoute>
        <RoadmapManager />
      </ProtectedAdminRoute>
    ),
  },
];