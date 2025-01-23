import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { supabase } from "@/integrations/supabase/client"

export function GoogleSignInButton() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true)
      console.log("Attempting Google sign in")
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      })

      if (error) {
        console.error("Google sign in error:", error)
        toast({
          variant: "destructive",
          title: "Error signing in with Google",
          description: error.message,
        })
      } else {
        console.log("Google sign in initiated:", data)
      }
    } catch (error) {
      console.error("Unexpected error during Google sign in:", error)
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred",
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
      <Mail className="mr-2 h-4 w-4" />
      Sign in with Google
    </Button>
  )
}