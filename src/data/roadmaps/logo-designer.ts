import { JobRoadmap } from "@/types/roadmap";

export const logoDesignerRoadmap: JobRoadmap = {
  title: "Logo Designer",
  description: "Master the art and science of creating memorable and effective brand identities through logo design",
  sections: [
    {
      title: "Design Fundamentals",
      steps: [
        {
          id: "ld-1",
          title: "Color Theory",
          description: "Master color psychology, color harmonies, and their application in logo design",
          status: "required",
          skills: ["Color Theory", "Color Psychology", "Color Harmonies"],
          resources: [
            {
              name: "Color Theory for Designers",
              url: "https://www.smashingmagazine.com/2010/01/color-theory-for-designers-part-1-the-meaning-of-color/"
            },
            {
              name: "Adobe Color Wheel",
              url: "https://color.adobe.com/create/color-wheel"
            }
          ]
        },
        {
          id: "ld-2",
          title: "Typography Fundamentals",
          description: "Learn type anatomy, classification, and how to pair fonts effectively",
          status: "required",
          skills: ["Typography", "Font Pairing", "Type Anatomy"],
          resources: [
            {
              name: "Typography Handbook",
              url: "https://typographyhandbook.com"
            },
            {
              name: "Google Fonts",
              url: "https://fonts.google.com"
            }
          ]
        },
        {
          id: "ld-3",
          title: "Composition & Layout",
          description: "Understanding balance, hierarchy, and visual weight in logo design",
          status: "required",
          skills: ["Composition", "Visual Hierarchy", "Balance"],
          resources: [
            {
              name: "Principles of Design",
              url: "https://www.canva.com/learn/design-elements-principles/"
            }
          ]
        }
      ]
    },
    {
      title: "Technical Skills",
      steps: [
        {
          id: "ld-4",
          title: "Vector Graphics",
          description: "Master Adobe Illustrator or other vector-based design tools",
          status: "required",
          skills: ["Adobe Illustrator", "Vector Graphics", "Pen Tool"],
          resources: [
            {
              name: "Adobe Illustrator Tutorials",
              url: "https://helpx.adobe.com/illustrator/tutorials.html"
            },
            {
              name: "Vector Logo Design",
              url: "https://www.vectorlogo.zone"
            }
          ]
        },
        {
          id: "ld-5",
          title: "Grid Systems",
          description: "Learn to use grids for creating balanced and scalable logos",
          status: "recommended",
          skills: ["Grid Systems", "Geometric Construction", "Logo Scaling"],
          resources: [
            {
              name: "Logo Grid Systems",
              url: "https://www.logodesignlove.com/logo-grid-system"
            }
          ]
        },
        {
          id: "ld-6",
          title: "File Formats & Export",
          description: "Understanding different file formats and preparing logos for various uses",
          status: "required",
          skills: ["File Formats", "Logo Export", "Resolution"],
          resources: [
            {
              name: "Logo File Formats Guide",
              url: "https://www.logodesignlove.com/logo-file-formats"
            }
          ]
        }
      ]
    },
    {
      title: "Professional Practice",
      steps: [
        {
          id: "ld-7",
          title: "Brand Guidelines",
          description: "Learn to create comprehensive brand guidelines for logo usage",
          status: "recommended",
          skills: ["Brand Guidelines", "Logo Usage", "Documentation"],
          resources: [
            {
              name: "Brand Guidelines Examples",
              url: "https://www.behance.net/search/projects?search=brand%20guidelines"
            }
          ]
        },
        {
          id: "ld-8",
          title: "Client Communication",
          description: "Develop skills for effective client communication and presentation",
          status: "recommended",
          skills: ["Client Communication", "Presentation Skills", "Feedback Management"],
          resources: [
            {
              name: "Working with Design Clients",
              url: "https://www.aiga.org/working-with-clients"
            }
          ]
        },
        {
          id: "ld-9",
          title: "Portfolio Development",
          description: "Build and maintain a professional logo design portfolio",
          status: "required",
          skills: ["Portfolio Curation", "Case Studies", "Self Promotion"],
          resources: [
            {
              name: "Behance",
              url: "https://www.behance.net"
            },
            {
              name: "Dribbble",
              url: "https://dribbble.com"
            }
          ]
        }
      ]
    }
  ]
};