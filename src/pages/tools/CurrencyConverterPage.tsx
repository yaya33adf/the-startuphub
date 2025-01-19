import { CurrencyConverter } from "@/components/tools/CurrencyConverter";
import { PageSEO } from "@/components/seo/PageSEO";

const CurrencyConverterPage = () => {
  return (
    <>
      <PageSEO 
        title="Currency Converter | Business Tools"
        description="Convert currencies with real-time exchange rates."
      />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Currency Converter</h1>
        <CurrencyConverter />
      </div>
    </>
  );
};

export default CurrencyConverterPage;