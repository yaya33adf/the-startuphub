import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TrendingItem {
  name: string;
  type: string;
  score: number;
  image: string;
  description: string;
}

interface TrendingItemsGridProps {
  items: TrendingItem[];
}

export const TrendingItemsGrid = ({ items }: TrendingItemsGridProps) => {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <Card key={index} className="overflow-hidden">
          <div className="relative h-48">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <Badge 
              className="absolute top-2 right-2" 
              variant={item.type === "Market" ? "default" : "secondary"}
            >
              {item.type}
            </Badge>
          </div>
          <CardHeader className="space-y-1">
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl">{item.name}</CardTitle>
              <span className="text-lg font-bold text-primary">
                {item.score}/100
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};