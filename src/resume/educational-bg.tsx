import { Timeline2 } from "@/components/examples/c-timeline-2"
import { IconLink } from "@tabler/icons-react"

const roadmap = [
  {
    id: 1,
    date: "2012 - 2016",
    title: (
      <a
        href="https://www.firstasia.edu.ph/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500"
      >
        First Asia Institute of Technology and Humanities{" "}
        <IconLink size={15} className="inline-block" />
      </a>
    ),
    description:
      "Graduated in Bachelor of Scinence in Computer Science. Participated in a 2days hackathon (PLDT Hackathon 2015) providing system solutions to an LGU.",
    tags: [
      "Dean's Lister 2x",
      "John Von Neumann Medal (Best Thesis of SY 2016 Nominee)",
    ],
  },
  {
    id: 2,
    date: "2015 - 2016",
    title: (
      <a
        href="http://pcci-bats.tk/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500"
      >
        Thesis - PCCI-Batangas: A Corporate Sponsored Content Management System
        Employing Wieghted Page Rank Algorithm{" "}
        <IconLink size={15} className="inline-block" />
      </a>
    ),
    description:
      "Web application for the Philippine Chamber of Commerce in Batangas which guide the users to locate the nearest desire services based on current location within Batangas.",
    tags: [
      "Vanilla JS",
      "JQuery",
      "HTML",
      "CSS",
      "Semantic UI",
      "Laravel as BE",
      "MySQL",
    ],
  },
  {
    id: 3,
    date: "SY 2015",
    title: "Summer Internship",
    description:
      "Collaborated with a team of four to develop the Pre-Jordan System, an electronic baptismal management system for the church in Brgy. Balele, Tanauan City, Batangas, and the E-Museum, a virtual museum showcasing the cultural heritage and historical pride of Batangas.",
    tags: ["C#", "VB.NET", "Unity 3D", "Blender"],
  },
]

export const EducationSection = () => {
  return (
    <div className="flex w-full flex-col gap-10 pt-18">
      <h1 className="text-2xl font-bold">Education</h1>
      <div>
        <Timeline2 roadmap={roadmap} />
      </div>
    </div>
  )
}
