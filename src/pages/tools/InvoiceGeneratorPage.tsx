import { PageSEO } from "@/components/seo/PageSEO";
import { InvoiceGenerator } from "@/components/tools/InvoiceGenerator";

const InvoiceGeneratorPage = () => {
  return (
    <>
      <PageSEO 
        title="Invoice Generator"
        description="Create professional invoices for your business quickly and easily."
      />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Invoice Generator</h1>
        <InvoiceGenerator />
      </div>
    </>
  );
};

export default InvoiceGeneratorPage;