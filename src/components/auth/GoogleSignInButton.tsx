import { Button } from "@/components/ui/button"
import { Chrome } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { supabase } from "@/integrations/supabase/client"

export function GoogleSignInButton() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true)
      console.log("Starting Google sign in process")
      console.log("Current origin:", window.location.origin)
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
          redirectTo: `${window.location.origin}/auth/callback`
        }
      })

      if (error) {
        console.error("Google sign in error details:", {
          message: error.message,
          status: error.status,
          name: error.name
        })
        toast({
          variant: "destructive",
          title: "Error signing in with Google",
          description: `${error.message}. Please try again or contact support if the issue persists.`,
        })
      } else {
        console.log("Google sign in successful, redirecting...", {
          provider: data.provider,
          url: data.url
        })
      }
    } catch (error) {
      console.error("Unexpected error during Google sign in:", error)
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred while signing in with Google. Please try again.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button 
      variant="outline" 
      onClick={handleGoogleSignIn}
      disabled={loading}
      className="w-full"
    >
      <Chrome className="mr-2 h-4 w-4" />
      {loading ? "Signing in..." : "Sign in with Google"}
    </Button>
  )
}