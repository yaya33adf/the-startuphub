import { PageSEO } from "@/components/seo/PageSEO";

const PrivacyPolicy = () => {
  return (
    <>
      <PageSEO
        title="Privacy Policy - The Startup Hub"
        description="Read our privacy policy to understand how we collect, use, and protect your personal information at The Startup Hub."
      />
      <div className="container mx-auto px-4 py-12 prose prose-gray max-w-4xl">
        <h1>Privacy Policy</h1>
        
        <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Information We Collect</h2>
        <p>
          We collect information that you provide directly to us, including when you:
          create an account, use our services, communicate with us, or subscribe to
          our newsletter.
        </p>
        
        <h2>2. How We Use Your Information</h2>
        <p>
          We use the information we collect to provide, maintain, and improve our
          services, communicate with you, and develop new services.
        </p>
        
        <h2>3. Information Sharing</h2>
        <p>
          We do not sell or rent your personal information to third parties. We may
          share your information in limited circumstances, such as to comply with
          legal obligations.
        </p>
        
        <h2>4. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect
          your personal information against unauthorized access or disclosure.
        </p>
        
        <h2>5. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information.
          Contact us to exercise these rights.
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;