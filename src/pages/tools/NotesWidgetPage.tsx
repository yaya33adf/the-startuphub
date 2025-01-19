import { NotesWidget } from "@/components/tools/NotesWidget";
import { PageSEO } from "@/components/seo/PageSEO";

const NotesWidgetPage = () => {
  return (
    <>
      <PageSEO 
        title="Notes | Business Tools"
        description="Take and manage your notes efficiently."
      />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Notes</h1>
        <NotesWidget />
      </div>
    </>
  );
};

export default NotesWidgetPage;