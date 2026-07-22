import LogoLoop from "@/components/LogoLoop"
import { Chip } from "@/components/ui/chip"

import ReactLogo from "@/assets/react-logo.svg"
import TSLogo from "@/assets/ts-logo-512.svg"
import MobxLogo from "@/assets/mobx.svg"
import ReduxLogo from "@/assets/redux.svg"
import ReactQueryLogo from "@/assets/react-query.svg"
import AxiosLogo from "@/assets/axios.svg"
import ViteLogo from "@/assets/vite.svg"
import JestLogo from "@/assets/jest.svg"
import CypressLogo from "@/assets/cypress.svg"
import MUILogo from "@/assets/material-ui.svg"
import AntDLogo from "@/assets/ant-design.svg"
import ShadCNLogo from "@/assets/shadcn-ui.svg"
import HTMLLogo from "@/assets/html5.svg"
import CSS3Logo from "@/assets/css3.svg"
import TailwindCSSLogo from "@/assets/tailwindcss.svg"
import GitLogo from "@/assets/git.svg"
import GithubLogo from "@/assets/github.svg"
import GithubDarkLogo from "@/assets/github-dark.svg"
import BitbucketLogo from "@/assets/bitbucket.svg"
import JiraLogo from "@/assets/jira.svg"
import NodeJSLogo from "@/assets/nodejs.svg"
import FastifyLogo from "@/assets/fastify.svg"
import FastifyDarkLogo from "@/assets/fastify-dark.svg"
import ZustandLogo from "@/assets/zustand.svg"
import PrismaLogo from "@/assets/prisma.svg"
import PrismaDarkLogo from "@/assets/prisma-dark.svg"
import VercelLogo from "@/assets/vercel.svg"
import VercelDarkLogo from "@/assets/vercel-dark.svg"
import SupabaseLogo from "@/assets/supabase.svg"
import RenderLogo from "@/assets/render.svg"
import RenderDarkLogo from "@/assets/render-dark.svg"
import { useTheme } from "@/components/theme-provider"
import { useLayoutEffect, useMemo } from "react"
import React from "react"

const TECH_STACK = [
  "TypeScript",
  "ReactJS",
  "MobX",
  "Redux",
  "Tanstack Query",
  "Axios",
  "Vite",
  "Vitest",
  "Jest",
  "Cypress",
  "MUI",
  "AntD",
  "ShadcnUI",
  "HTML",
  "TailwindCSS",
  "CSS",
  "Git",
  "Github",
  "Bitbucket",
  "Jira",
  "React Native",
  "NodeJS",
  "Fastify",
  "Zustand",
  "Prisma",
  "Vercel",
  "Supabase",
]

const getTechLogos = (isDarkMode: boolean) => [
  { node: <ReactLogo />, title: "React", href: "https://react.dev" },
  {
    node: <TSLogo />,
    title: "Typescript",
    href: "https://www.typescriptlang.org/",
  },
  {
    node: <MobxLogo />,
    title: "MobX",
    href: "https://mobx.js.org/README.html",
  },
  {
    node: <ReduxLogo />,
    title: "Redux",
    href: "https://redux.js.org/",
  },
  {
    node: <ReactQueryLogo />,
    title: "Tanstack Query",
    href: "https://tanstack.com/query/latest",
  },
  {
    node: <AxiosLogo />,
    title: "Axios",
    href: "https://axios-http.com/",
  },
  {
    node: <ViteLogo />,
    title: "Vite",
    href: "https://vitejs.dev/",
  },
  {
    node: <JestLogo />,
    title: "Jest",
    href: "https://jestjs.io/",
  },
  {
    node: <CypressLogo />,
    title: "Cypress",
    href: "https://www.cypress.io/",
  },
  {
    node: <MUILogo />,
    title: "MUI",
    href: "https://mui.com/",
  },
  {
    node: <AntDLogo />,
    title: "AntD",
    href: "https://ant.design/",
  },
  {
    node: <ShadCNLogo />,
    title: "ShadcnUI",
    href: "https://ui.shadcn.com/",
  },
  {
    node: <HTMLLogo />,
    title: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    node: <CSS3Logo />,
    title: "CSS",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    node: <TailwindCSSLogo />,
    title: "TailwindCSS",
    href: "https://tailwindcss.com/",
  },
  {
    node: <GitLogo />,
    title: "Git",
    href: "https://git-scm.com/",
  },
  {
    node: isDarkMode ? <GithubDarkLogo /> : <GithubLogo />,
    title: "Github",
    href: "https://github.com/",
  },
  {
    node: <BitbucketLogo />,
    title: "Bitbucket",
    href: "https://bitbucket.org/",
  },
  {
    node: <JiraLogo />,
    title: "Jira",
    href: "https://www.atlassian.com/software/jira",
  },
  {
    node: <NodeJSLogo />,
    title: "NodeJS",
    href: "https://nodejs.org/",
  },
  {
    node: isDarkMode ? <FastifyDarkLogo /> : <FastifyLogo />,
    title: "Fastify",
    href: "https://www.fastify.io/",
  },
  {
    node: <SupabaseLogo />,
    title: "Supabase",
    href: "https://supabase.com/",
  },
  {
    node: <ZustandLogo />,
    title: "Zustand",
    href: "https://zustand-demo.pmnd.rs/",
  },
  {
    node: isDarkMode ? <PrismaDarkLogo /> : <PrismaLogo />,
    title: "Prisma",
    href: "https://www.prisma.io/",
  },
  {
    node: isDarkMode ? <VercelDarkLogo /> : <VercelLogo />,
    title: "Vercel",
    href: "https://vercel.com/",
  },
  {
    node: isDarkMode ? <RenderDarkLogo /> : <RenderLogo />,
    title: "Render",
    href: "https://render.com/",
  },
]

export const TechStackSection = () => {
  const [carouselWidth, setCarouselWidth] = React.useState(window.innerWidth)
  const { theme } = useTheme()
  const techLogos = useMemo(() => {
    return getTechLogos(theme === "dark" || theme === "system")
  }, [theme])

  useLayoutEffect(() => {
    const handleResize = () => {
      const logoLoopContainer = document.getElementById("logo-loop-container")
      if (logoLoopContainer) {
        console.log("logoLoopContainer width:", logoLoopContainer.offsetWidth)
        setCarouselWidth(logoLoopContainer.offsetWidth)
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize() // Initial call to set the width

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="flex w-full flex-col gap-8 pt-18" id="logo-loop-container">
      <h1 className="text-2xl font-bold">Tech Stack</h1>
      <div className="flex flex-row flex-wrap gap-2">
        {TECH_STACK.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </div>
      <div>
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={40}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor={
            theme === "dark" || theme === "system" ? "#121212" : "#ffffff"
          }
          ariaLabel="Technology Stack"
          width={carouselWidth - 30}
        />
      </div>
    </div>
  )
}
