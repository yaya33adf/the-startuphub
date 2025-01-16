import { PageSEO } from "@/components/seo/PageSEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const ScheduleCall = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    toast({
      title: "Request submitted",
      description: "We'll contact you shortly to schedule the call.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <PageSEO 
        title="Schedule a Call"
        description="Schedule an introduction call with our investment team."
      />
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Schedule a Call</h1>
          <p className="text-lg text-muted-foreground">
            Please fill out this form to schedule an introduction call with our investment team.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input id="firstName" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input id="lastName" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input type="email" id="email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input type="tel" id="phone" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input id="company" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="investorType">Investor Type *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select investor type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="angel">Angel Investor</SelectItem>
                  <SelectItem value="vc">Venture Capital</SelectItem>
                  <SelectItem value="corporate">Corporate Investor</SelectItem>
                  <SelectItem value="individual">Individual Investor</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <Label>Investment Preferences</Label>
            <div className="grid grid-cols-2 gap-4">
              {[
                { id: "ai", label: "Artificial Intelligence" },
                { id: "fintech", label: "Fintech" },
                { id: "healthtech", label: "Healthtech" },
                { id: "sustainability", label: "Sustainability" }
              ].map((preference) => (
                <div key={preference.id} className="flex items-center space-x-2">
                  <Checkbox id={preference.id} />
                  <Label htmlFor={preference.id}>{preference.label}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="investmentRange">Investment Range *</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select investment range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="50k-250k">$50,000 - $250,000</SelectItem>
                <SelectItem value="250k-1m">$250,000 - $1,000,000</SelectItem>
                <SelectItem value="1m-5m">$1,000,000 - $5,000,000</SelectItem>
                <SelectItem value="5m+">$5,000,000+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Information</Label>
            <Textarea 
              id="message" 
              placeholder="Tell us about your investment experience and what you're looking for..."
            />
          </div>

          <Button type="submit" className="w-full">Schedule Call</Button>
        </form>
      </div>
    </div>
  );
};

export default ScheduleCall;