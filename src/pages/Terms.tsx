import { PageSEO } from "@/components/seo/PageSEO";

const Terms = () => {
  return (
    <>
      <PageSEO
        title="Terms of Service - The Startup Hub"
        description="Read our terms of service to understand the rules and guidelines for using The Startup Hub platform."
      />
      <div className="container mx-auto px-4 py-12 prose prose-gray max-w-4xl">
        <h1>Terms of Service</h1>
        
        <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using The Startup Hub, you agree to be bound by these Terms
          of Service and all applicable laws and regulations.
        </p>
        
        <h2>2. Use License</h2>
        <p>
          We grant you a limited, non-exclusive, non-transferable license to access
          and use our services for your personal or business purposes.
        </p>
        
        <h2>3. User Obligations</h2>
        <p>
          You agree to use our services responsibly and in compliance with all
          applicable laws. You must not misuse or attempt to harm our services.
        </p>
        
        <h2>4. Intellectual Property</h2>
        <p>
          All content, features, and functionality of our services are owned by
          The Startup Hub and are protected by copyright and other intellectual
          property laws.
        </p>
        
        <h2>5. Limitation of Liability</h2>
        <p>
          We shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages resulting from your use of our services.
        </p>
      </div>
    </>
  );
};

export default Terms;