import { Helmet } from "react-helmet-async";
import { FAQSchema } from "@/components/seo/schemas/FAQSchema";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is The Startup Hub?",
    answer: "The Startup Hub is a comprehensive platform designed to help entrepreneurs track market trends, discover opportunities, and access tools for business growth."
  },
  {
    question: "How can I track market trends?",
    answer: "Our platform provides real-time trend analysis using data from multiple sources including Google Trends, social media, and industry reports. You can search for specific trends or browse our curated trend insights."
  },
  {
    question: "What tools are available?",
    answer: "We offer a variety of tools including business name generators, team management solutions, expense trackers, and appointment schedulers to help streamline your business operations."
  },
  {
    question: "How can I join the community?",
    answer: "You can join our community by signing up for an account. This gives you access to discussion forums, networking opportunities, and the ability to share your own insights and experiences."
  },
  {
    question: "Is there support for crowdfunding?",
    answer: "Yes, we provide crowdfunding resources and connections to help startups raise capital. You can explore active campaigns and learn about best practices for launching your own."
  }
];

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ - The Startup Hub</title>
        <meta
          name="description"
          content="Frequently asked questions about The Startup Hub platform, features, and services."
        />
      </Helmet>
      <FAQSchema data={faqData} />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h1>
        <Card className="max-w-3xl mx-auto p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </>
  );
};

export default FAQ;