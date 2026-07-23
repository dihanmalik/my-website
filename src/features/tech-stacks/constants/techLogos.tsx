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
import StorybookLogo from "@/assets/storybook.svg"
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
import NextJSLogo from "@/assets/nextjs.svg"
import PostgreSQLLogo from "@/assets/postgre.svg"
import MySQLLogo from "@/assets/mysql.svg"
import RedisLogo from "@/assets/redis.svg"
import MongoDBLogo from "@/assets/mongodb.svg"
import DockerLogo from "@/assets/docker.svg"

export const getTechLogos = (isDarkMode: boolean) => [
  { node: <ReactLogo />, title: "React", href: "https://react.dev" },

  { node: <NextJSLogo />, title: "NextJS", href: "https://nextjs.org/" },
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
    node: <StorybookLogo />,
    title: "Storybook",
    href: "https://storybook.js.org/",
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
  { node: <RedisLogo />, title: "Redis", href: "https://redis.io/" },
  { node: <DockerLogo />, title: "Docker", href: "https://www.docker.com/" },
  { node: <MongoDBLogo />, title: "MongoDB", href: "https://www.mongodb.com/" },
  { node: <MySQLLogo />, title: "MySQL", href: "https://www.mysql.com/" },
  {
    node: <PostgreSQLLogo />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
  },
]
