import { RouteObject } from "react-router-dom";
import SignIn from "@/pages/auth/SignIn";
import SignUp from "@/pages/auth/SignUp";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import ProfileSettings from "@/pages/auth/ProfileSettings";

export const authRoutes: RouteObject[] = [
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/profile", element: <ProfileSettings /> },
];