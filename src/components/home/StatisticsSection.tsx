import { Users, TrendingUp, Briefcase, DollarSign } from "lucide-react";

export const StatisticsSection = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-background rounded-lg shadow-sm">
            <Users className="w-10 h-10 mx-auto text-primary mb-4" />
            <h3 className="text-3xl font-bold mb-2">10K+</h3>
            <p className="text-muted-foreground">Active Users</p>
          </div>
          <div className="text-center p-6 bg-background rounded-lg shadow-sm">
            <TrendingUp className="w-10 h-10 mx-auto text-primary mb-4" />
            <h3 className="text-3xl font-bold mb-2">50K+</h3>
            <p className="text-muted-foreground">Trends Analyzed</p>
          </div>
          <div className="text-center p-6 bg-background rounded-lg shadow-sm">
            <Briefcase className="w-10 h-10 mx-auto text-primary mb-4" />
            <h3 className="text-3xl font-bold mb-2">1000+</h3>
            <p className="text-muted-foreground">Side Hustles</p>
          </div>
          <div className="text-center p-6 bg-background rounded-lg shadow-sm">
            <DollarSign className="w-10 h-10 mx-auto text-primary mb-4" />
            <h3 className="text-3xl font-bold mb-2">$2M+</h3>
            <p className="text-muted-foreground">User Earnings</p>
          </div>
        </div>
      </div>
    </section>
  );
};