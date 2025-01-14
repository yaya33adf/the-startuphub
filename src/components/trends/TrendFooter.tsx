import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Github, Twitter, Linkedin } from "lucide-react";

export const TrendFooter = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement subscribe functionality
    console.log("Subscribing to newsletter...");
  };

  return (
    <footer className="border-t mt-12 py-8">
      <div className="container mx-auto grid gap-8 md:grid-cols-3">
        <div className="space-y-4">
          <h3 className="font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">API Documentation</a></li>
            <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Help Center</a></li>
            <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</a></li>
            <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</a></li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-semibold">Subscribe for Updates</h3>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <Input type="email" placeholder="Enter your email" className="max-w-[220px]" />
            <Button type="submit" size="sm">
              <Mail className="h-4 w-4 mr-2" />
              Subscribe
            </Button>
          </form>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-semibold">Connect With Us</h3>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};