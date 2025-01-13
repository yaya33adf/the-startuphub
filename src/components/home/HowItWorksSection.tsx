import { ChartLine, Lightbulb, Wrench } from "lucide-react";

export const HowItWorksSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <ChartLine className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Analyze Trends</h3>
            <p className="text-muted-foreground">
              Use our advanced analytics to identify emerging market opportunities
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Discover Opportunities</h3>
            <p className="text-muted-foreground">
              Find profitable side hustles aligned with your skills and interests
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Wrench className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Build & Scale</h3>
            <p className="text-muted-foreground">
              Access tools and resources to grow your business effectively
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};