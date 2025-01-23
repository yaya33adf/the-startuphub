import { GoogleSignInButton } from "@/components/auth/GoogleSignInButton"
import { EmailPasswordForm } from "@/components/auth/EmailPasswordForm"

export default function SignIn() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your credentials to sign in
          </p>
        </div>

        <GoogleSignInButton />

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <EmailPasswordForm />

        <div className="text-center text-sm">
          <a
            href="/auth/forgot-password"
            className="text-primary underline-offset-4 hover:underline"
          >
            Forgot password?
          </a>
        </div>

        <div className="text-center text-sm">
          Don't have an account?{" "}
          <a
            href="/auth/signup"
            className="text-primary underline-offset-4 hover:underline"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  )
}