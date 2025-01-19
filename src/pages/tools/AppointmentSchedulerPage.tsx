import { AppointmentScheduler } from "@/components/tools/AppointmentScheduler";
import { PageSEO } from "@/components/seo/PageSEO";

const AppointmentSchedulerPage = () => {
  return (
    <>
      <PageSEO 
        title="Appointment Scheduler | Business Tools"
        description="Schedule and manage your appointments efficiently."
      />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Appointment Scheduler</h1>
        <AppointmentScheduler />
      </div>
    </>
  );
};

export default AppointmentSchedulerPage;