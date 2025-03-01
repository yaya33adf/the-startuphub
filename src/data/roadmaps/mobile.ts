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
          description: "Master core programming concepts for mobile development",
          status: "required",
          skills: [
            "Object-Oriented Programming",
            "Data Structures",
            "Algorithms",
            "Version Control (Git)",
            "Mobile UI/UX Principles"
          ],
          resources: [
            {
              name: "Complete iOS App Development Bootcamp",
              url: "https://www.udemy.com/course/ios-13-app-development-bootcamp/"
            },
            {
              name: "Android App Development Masterclass using Kotlin",
              url: "https://www.udemy.com/course/android-oreo-kotlin-app-masterclass/"
            },
            {
              name: "Flutter & Dart - The Complete Guide",
              url: "https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/"
            },
            {
              name: "React Native - The Practical Guide",
              url: "https://www.udemy.com/course/react-native-the-practical-guide/"
            }
          ]
        },
        {
          id: "cross-platform",
          title: "Cross-Platform Development",
          description: "Learn cross-platform mobile development",
          status: "required",
          skills: [
            "React Native",
            "Flutter",
            "JavaScript/TypeScript",
            "Dart",
            "Mobile State Management"
          ],
          resources: [
            {
              name: "React Native Documentation",
              url: "https://reactnative.dev/docs/getting-started"
            }
          ]
        }
      ]
    },
    {
      title: "2. Platform-Specific Development",
      steps: [
        {
          id: "ios-development",
          title: "iOS Development",
          description: "Learn iOS app development",
          status: "recommended",
          skills: [
            "Swift",
            "SwiftUI",
            "iOS SDK",
            "Xcode",
            "App Store Guidelines"
          ],
          resources: [
            {
              name: "iOS Development",
              url: "https://developer.apple.com/documentation/"
            }
          ]
        },
        {
          id: "android-development",
          title: "Android Development",
          description: "Master Android app development",
          status: "recommended",
          skills: [
            "Kotlin",
            "Android SDK",
            "Android Studio",
            "Material Design",
            "Google Play Guidelines"
          ],
          resources: [
            {
              name: "Android Development",
              url: "https://developer.android.com/docs"
            }
          ]
        }
      ]
    }
  ]
};
