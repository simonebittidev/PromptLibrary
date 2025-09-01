// app/layout.tsx
import React from 'react'
import type { Metadata } from 'next'
import { Layout, Navbar, Footer } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import './globals.css' // Importa gli stili globali

export const metadata: Metadata = {
  title: 'Prompt Library',
  description: 'Thousands of ready-to-use prompts for every GenAI model.'
}

const navbar = (
  <Navbar
    logo={<b>Prompt Library</b>}
    projectLink="https://github.com/simonebittidev/PromptLibrary"
    // puoi aggiungere altri link/slot se vuoi
  />
)

const footer = <Footer>© {new Date().getFullYear()} PromptLibrary</Footer>

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/simonebittidev/PromptLibrary/tree/main"
          // altre opzioni del Layout: https://nextra.site/docs/docs-theme/start
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}