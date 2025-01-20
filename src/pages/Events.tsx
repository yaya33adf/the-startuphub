import { useEffect, useState } from "react";
import { PageSEO } from "@/components/seo/PageSEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { EventForm } from "@/components/events/EventForm";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  organizer_id: string;
}

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        console.log("Fetching events...");
        const { data, error } = await supabase
          .from("events")
          .select("*")
          .order("date", { ascending: true });

        if (error) {
          throw error;
        }

        // If no events exist, create a sample event
        if (!data || data.length === 0) {
          const sampleEvent = {
            title: "Startup Networking Mixer",
            description: "Join us for an evening of networking with fellow entrepreneurs and investors. Share ideas, make connections, and explore potential collaborations.",
            date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 1 week from now
            location: "Innovation Hub, 123 Startup Street",
          };

          const { error: insertError } = await supabase
            .from("events")
            .insert([sampleEvent]);

          if (insertError) throw insertError;

          // Fetch events again to include the sample
          const { data: refreshedData, error: refreshError } = await supabase
            .from("events")
            .select("*")
            .order("date", { ascending: true });

          if (refreshError) throw refreshError;
          console.log("Events fetched with sample:", refreshedData);
          setEvents(refreshedData || []);
        } else {
          console.log("Events fetched:", data);
          setEvents(data);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load events. Please try again later.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [toast]);

  return (
    <>
      <PageSEO
        title="Events - Business Opportunities & Networking"
        description="Join our upcoming events and connect with fellow entrepreneurs and business professionals."
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex justify-between items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">Upcoming Events</h1>
              <p className="text-muted-foreground text-lg">
                Connect with fellow entrepreneurs and discover new opportunities at our upcoming events.
              </p>
            </div>
            <EventForm />
          </div>

          {loading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader className="space-y-4">
                    <div className="h-6 bg-muted rounded w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="h-4 bg-muted rounded"></div>
                      <div className="h-4 bg-muted rounded w-5/6"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : events.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{format(new Date(event.date), "PPP")}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{event.description}</p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>Organizer ID: {event.organizer_id}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-8">
                <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-lg font-medium">No upcoming events</p>
                <p className="text-muted-foreground">Create an event to get started</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default Events;