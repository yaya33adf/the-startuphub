import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageSEO } from "@/components/seo/PageSEO";
import { useNavigate } from "react-router-dom";

const Investors = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <PageSEO 
        title="Investors - Join Our Network"
        description="Join our network of visionary investors backing the next generation of groundbreaking startups."
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Invest in Tomorrow's Innovation</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Join our network of visionary investors backing the next generation of groundbreaking startups. 
          Access exclusive opportunities and shape the future of technology.
        </p>
      </div>

      {/* Investment Opportunities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Investment Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Early Stage Startups",
                description: "Access pre-seed and seed-stage opportunities in emerging technology sectors with high growth potential."
              },
              {
                title: "Scale-ups",
                description: "Invest in proven business models ready for expansion and significant market penetration."
              },
              {
                title: "Strategic Partnerships",
                description: "Connect with innovative startups for strategic collaborations and market advantages."
              }
            ].map((opportunity, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-secondary mb-4">{opportunity.title}</h3>
                <p className="text-muted-foreground">{opportunity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Track Record</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Startups Funded" },
              { number: "$500M+", label: "Capital Raised" },
              { number: "12", label: "Successful Exits" },
              { number: "85%", label: "Portfolio Success Rate" }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-3xl font-bold text-secondary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Investment Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Initial Contact",
                description: "Complete our investor profile and schedule an introduction call."
              },
              {
                step: 2,
                title: "Due Diligence",
                description: "Access detailed startup information and conduct thorough evaluation."
              },
              {
                step: 3,
                title: "Investment",
                description: "Choose your investment level and complete documentation."
              },
              {
                step: 4,
                title: "Ongoing Support",
                description: "Receive regular updates and participate in growth initiatives."
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Invest?</h2>
          <p className="text-lg mb-8">Join our network of investors and get access to exclusive startup opportunities.</p>
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
            onClick={() => navigate('/schedule-call')}
          >
            Schedule a Call
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Investors;