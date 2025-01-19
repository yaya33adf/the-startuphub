import { RouteObject } from "react-router-dom";
import Dashboard from "@/pages/admin/Dashboard";
import { ProtectedAdminRoute } from "@/components/auth/ProtectedAdminRoute";

export const adminRoutes: RouteObject[] = [
  {
    path: "/admin/*",
    element: (
      <ProtectedAdminRoute>
        <Dashboard />
      </ProtectedAdminRoute>
    ),
  },
];