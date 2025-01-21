import { JobRoadmap } from "@/types/roadmap";

export const mobileRoadmap: JobRoadmap = {
  title: "Mobile Developer Roadmap",
  description: "A comprehensive guide to becoming a Mobile Developer",
  sections: [
    {
      title: "1. Mobile Development Fundamentals",
      steps: [
        {
          id: "programming-basics",
          title: "Programming Fundamentals",
          description: "Master programming concepts for mobile development",
          status: "required",
          skills: [
            "Object-Oriented Programming",
            "Data Structures",
            "Algorithms",
            "Design Patterns",
            "Version Control"
          ],
          resources: [
            {
              name: "Swift Documentation",
              url: "https://swift.org/documentation"
            },
            {
              name: "Kotlin Documentation",
              url: "https://kotlinlang.org/docs"
            }
          ]
        },
        {
          id: "platform-specific",
          title: "Platform Development",
          description: "Learn platform-specific development",
          status: "required",
          skills: [
            "iOS Development",
            "Android Development",
            "Cross-platform Development",
            "Mobile Architecture"
          ],
          resources: [
            {
              name: "iOS Development",
              url: "https://developer.apple.com/tutorials"
            },
            {
              name: "Android Development",
              url: "https://developer.android.com/courses"
            }
          ]
        }
      ]
    },
    {
      title: "2. Advanced Mobile Development",
      steps: [
        {
          id: "ui-ux",
          title: "UI/UX Design",
          description: "Learn mobile UI/UX principles",
          status: "required",
          skills: [
            "Material Design",
            "iOS Design Guidelines",
            "Responsive Design",
            "Animation",
            "Accessibility"
          ],
          resources: [
            {
              name: "Material Design",
              url: "https://material.io"
            },
            {
              name: "Human Interface Guidelines",
              url: "https://developer.apple.com/design"
            }
          ]
        },
        {
          id: "mobile-features",
          title: "Mobile Features & APIs",
          description: "Master mobile-specific features and APIs",
          status: "required",
          skills: [
            "Location Services",
            "Push Notifications",
            "Data Storage",
            "Camera & Sensors",
            "App Security"
          ],
          resources: [
            {
              name: "Firebase Documentation",
              url: "https://firebase.google.com/docs"
            }
          ]
        }
      ]
    }
  ]
};