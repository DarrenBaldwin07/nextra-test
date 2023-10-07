import React from "react"
import { DocsThemeConfig } from "nextra-theme-docs"

const config: DocsThemeConfig = {
  logo: <img src="/title-logo.svg" width={150} alt="tembo" />,
  nextThemes: {
    defaultTheme: "light",
  },
  darkMode: false,
  project: {
    link: "https://tembo.io",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/tembo-io/website",
  footer: {
    text: "Tembo Docs (test)",
  },
}

export default config
