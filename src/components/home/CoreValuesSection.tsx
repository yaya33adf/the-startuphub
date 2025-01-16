import { Sparkles, Lightbulb, Users, Globe, Heart } from "lucide-react";

export const CoreValuesSection = () => {
  const values = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Entrepreneurial Spirit",
      description: "We champion bold ideas and empower visionaries to turn their dreams into reality."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation First",
      description: "We embrace emerging technologies and pioneering approaches to solve tomorrow's challenges."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Growth",
      description: "We build powerful networks that connect founders, investors, and industry experts."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Impact",
      description: "We support startups that create meaningful change and drive progress across borders."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Inclusive Innovation",
      description: "We foster a diverse ecosystem where entrepreneurs from all backgrounds can thrive."
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          Our Core Values
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {values.map((value, index) => (
            <li
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-gradient-to-r from-primary to-secondary"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-primary">{value.icon}</div>
                <strong className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {value.title}
                </strong>
              </div>
              <p className="text-muted-foreground">{value.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};