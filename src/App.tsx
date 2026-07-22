import ClickSpark from "./components/ClickSpark"
import { useTheme, getSystemTheme } from "./components/theme-provider"
import { MyNavigation } from "./components/ui/custom/MyNavs"
import { EducationSection } from "./resume/educational-bg"
import { IntroSection } from "./resume/intro-section"
import { TechStackSection } from "./resume/tech-stacks"
import { WorkExperienceSection } from "./resume/work-experience"

export default function App() {
  const { theme } = useTheme()

  return (
    <ClickSpark
      sparkColor={
        theme === "dark" || (theme === "system" && getSystemTheme() === "dark")
          ? "#ffffff"
          : "#000000"
      }
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="flex min-h-screen w-full flex-col items-center justify-start select-none">
        <MyNavigation />
        <div className="row flex items-center gap-4">
          <div className="flex w-full flex-col items-center gap-4 px-10 pt-5 pb-10 md:w-4xl md:p-15">
            <IntroSection />
            <WorkExperienceSection />
            <EducationSection />
            <TechStackSection />
          </div>
        </div>
      </div>
    </ClickSpark>
  )
}
