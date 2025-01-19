import { BookNameGenerator } from "@/components/tools/BookNameGenerator";
import { PageSEO } from "@/components/seo/PageSEO";

const BookNameGeneratorPage = () => {
  return (
    <>
      <PageSEO 
        title="Book Name Generator | Creative Tools"
        description="Generate creative and catchy book names."
      />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Book Name Generator</h1>
        <BookNameGenerator />
      </div>
    </>
  );
};

export default BookNameGeneratorPage;