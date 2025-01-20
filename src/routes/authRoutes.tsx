import SignIn from "@/pages/auth/SignIn";
import SignUp from "@/pages/auth/SignUp";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import ProfileSettings from "@/pages/auth/ProfileSettings";
import { RouteObject } from "react-router-dom";

export const authRoutes: RouteObject[] = [
  { path: "/auth/signin", element: <SignIn /> },
  { path: "/auth/signup", element: <SignUp /> },
  { path: "/auth/forgot-password", element: <ForgotPassword /> },
  { path: "/auth/profile", element: <ProfileSettings /> },
];