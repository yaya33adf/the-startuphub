import { JobRoadmap } from "@/types/roadmap";

export const qaTesterRoadmap: JobRoadmap = {
  title: "QA Tester Roadmap",
  description: "A comprehensive guide to becoming a QA Tester",
  sections: [
    {
      title: "1. Testing Fundamentals",
      steps: [
        {
          id: "testing-basics",
          title: "Testing Basics",
          description: "Learn core testing concepts and methodologies",
          status: "required",
          skills: [
            "Test Planning",
            "Test Cases",
            "Bug Reporting",
            "Test Types",
            "Testing Lifecycle"
          ],
          resources: [
            {
              name: "ISTQB Foundation Level",
              url: "https://www.istqb.org/"
            }
          ]
        },
        {
          id: "manual-testing",
          title: "Manual Testing",
          description: "Master manual testing techniques",
          status: "required",
          skills: [
            "Functional Testing",
            "UI Testing",
            "Regression Testing",
            "Exploratory Testing",
            "User Acceptance Testing"
          ],
          resources: [
            {
              name: "Manual Testing Tutorial",
              url: "https://www.guru99.com/manual-testing.html"
            }
          ]
        }
      ]
    },
    {
      title: "2. Automation Testing",
      steps: [
        {
          id: "automation-basics",
          title: "Automation Fundamentals",
          description: "Learn test automation basics",
          status: "recommended",
          skills: [
            "Selenium",
            "TestNG",
            "JUnit",
            "Cypress",
            "Playwright"
          ],
          resources: [
            {
              name: "Selenium Documentation",
              url: "https://www.selenium.dev/documentation/en/"
            }
          ]
        }
      ]
    }
  ]
};