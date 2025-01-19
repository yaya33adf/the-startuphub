import { QRCodeGenerator } from "@/components/tools/QRCodeGenerator";
import { PageSEO } from "@/components/seo/PageSEO";

const QRCodeGeneratorPage = () => {
  return (
    <>
      <PageSEO 
        title="QR Code Generator | Utility Tools"
        description="Generate QR codes for your business needs."
      />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">QR Code Generator</h1>
        <QRCodeGenerator />
      </div>
    </>
  );
};

export default QRCodeGeneratorPage;