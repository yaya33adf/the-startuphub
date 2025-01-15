import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ChartLine, 
  Globe, 
  Lightbulb, 
  Wrench, 
  BookOpen, 
  LogIn, 
  LogOut,
  MessageSquare, 
  Menu, 
  TrendingUp, 
  DollarSign,
  Briefcase,
  User
} from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";

export const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState<any>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  console.log("Current session:", session); // Debug log
  console.log("Current user profile:", userProfile); // Debug log

  useEffect(() => {
    // Set up the initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("Initial session check:", session); // Debug log
      setSession(session);
      if (session?.user?.id) {
        fetchUserProfile(session.user.id);
      }
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log("Auth state changed:", _event, session); // Debug log
      setSession(session);
      if (session?.user?.id) {
        fetchUserProfile(session.user.id);
      } else {
        setUserProfile(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchUserProfile = async (userId: string) => {
    try {
      console.log("Fetching profile for user:", userId); // Debug log
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching user profile:', error);
        throw error;
      }
      
      console.log("Fetched profile:", profile); // Debug log
      setUserProfile(profile);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      toast({
        title: "Signed out successfully",
        duration: 2000,
      });
      
      navigate('/');
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error signing out",
        description: error.message,
      });
    }
  };

  const businessInsightsItems = [
    { to: "/trends", icon: ChartLine, label: "Trends" },
    { to: "/markets", icon: Globe, label: "Markets" },
    { to: "/side-hustles", icon: Lightbulb, label: "Side Hustles" },
  ];

  const navItems = [
    { to: "/tools", icon: Wrench, label: "Tools" },
    { to: "/blog", icon: BookOpen, label: "Blog" },
    { to: "/community", icon: MessageSquare, label: "Community" },
    { to: "/crowdfunding", icon: DollarSign, label: "Crowdfunding" },
  ];

  const BusinessInsightsDropdown = ({ onClick = () => {} }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-10 px-3 py-2">
          <Briefcase className="w-4 h-4 mr-2" />
          <span>Business Insights</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {businessInsightsItems.map((item) => (
          <DropdownMenuItem key={item.to} asChild onClick={onClick}>
            <Link to={item.to} className="flex items-center gap-2 w-full">
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const UserMenu = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-10 px-3">
          <User className="w-4 h-4 mr-2" />
          <span>{session?.user?.email || 'Profile'}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {userProfile?.role === 'admin' && (
          <>
            <DropdownMenuItem asChild>
              <Link to="/admin" className="flex items-center gap-2">
                <Wrench className="w-4 h-4" />
                <span>Admin Dashboard</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </>
        )}
        <DropdownMenuItem onClick={handleSignOut} className="text-red-600">
          <LogOut className="w-4 h-4 mr-2" />
          <span>Sign Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const NavLinks = ({ onClick = () => {} }) => (
    <>
      <BusinessInsightsDropdown onClick={onClick} />
      {navItems.map((item) => (
        <Button 
          key={item.to} 
          variant="ghost" 
          asChild 
          onClick={onClick}
          className="h-10 px-3 py-2"
        >
          <Link to={item.to} className="flex items-center gap-2 min-w-[100px] justify-start">
            <item.icon className="w-4 h-4 flex-shrink-0" />
            <span className="whitespace-nowrap">{item.label}</span>
          </Link>
        </Button>
      ))}
    </>
  );

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity flex-shrink-0">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-secondary">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Startup Hub
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 overflow-x-auto flex-grow justify-end max-w-[calc(100%-200px)]">
            <NavLinks />
            {session ? (
              <UserMenu />
            ) : (
              <Button variant="outline" asChild className="ml-2 h-10 px-3 py-2">
                <Link to="/auth/signin" className="flex items-center gap-2 min-w-[100px] justify-center">
                  <LogIn className="w-4 h-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">Sign In</span>
                </Link>
              </Button>
            )}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2 mt-4">
                <NavLinks onClick={() => setIsOpen(false)} />
                {session ? (
                  <Button 
                    variant="outline" 
                    onClick={handleSignOut} 
                    className="mt-2 text-red-600"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                ) : (
                  <Button 
                    variant="outline" 
                    asChild 
                    onClick={() => setIsOpen(false)} 
                    className="mt-2"
                  >
                    <Link to="/auth/signin" className="flex items-center gap-2 justify-center">
                      <LogIn className="w-4 h-4 flex-shrink-0" />
                      <span>Sign In</span>
                    </Link>
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};