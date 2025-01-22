import { useEffect, useState } from "react";
import { PageSEO } from "@/components/seo/PageSEO";
import { EventForm } from "@/components/events/EventForm";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { Card } from "@/components/ui/card";
import { CalendarDays, MapPin } from "lucide-react";

interface Event {
  id: string;
  title: string;
  description: string | null;
  date: string;
  location: string | null;
  organizer_id: string;
}

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      console.log("Fetching events...");
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("date", { ascending: true });

      if (error) throw error;

      console.log("Fetched events:", data);
      setEvents(data || []);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  return (
    <div className="container py-8">
      <PageSEO
        title="Startup Events | Connect and Learn"
        description="Discover upcoming startup events, workshops, and networking opportunities in the entrepreneurial community."
      />
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Startup Events</h1>
        <EventForm />
      </div>

      <div className="prose max-w-none mb-8">
        <p className="text-lg text-muted-foreground">
          Stay updated with the latest startup events, workshops, and networking opportunities. 
          Connect with fellow entrepreneurs and industry experts.
        </p>
      </div>

      <div className="grid gap-6 mt-8">
        {events.map((event) => (
          <Card key={event.id} className="p-6">
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            {event.description && (
              <p className="text-muted-foreground mb-4">{event.description}</p>
            )}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                {format(new Date(event.date), "PPP 'at' p")}
              </div>
              {event.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {event.location}
                </div>
              )}
            </div>
          </Card>
        ))}
        {events.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No events scheduled yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;