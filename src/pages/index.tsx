import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

// NB: sei su GitHub Pages project pages, quindi baseUrl = /PromptLibrary/
// per sicurezza costruiamo gli href con quel prefisso:
const base = "/PromptLibrary";

const providers = [
  { name: "OpenAI", href: `${base}/docs/openai`, desc: "GPT-4o, GPT-4o mini, etc." },
  { name: "Google", href: `${base}/docs/google`, desc: "Gemini 1.5 Pro, etc." },
  { name: "Anthropic", href: `${base}/docs/anthropic`, desc: "Claude 3.5 Sonnet, etc." },
  { name: "Meta", href: `${base}/docs/meta`, desc: "Llama 3.1, etc." },
  { name: "Mistral", href: `${base}/docs/mistral`, desc: "Mistral Large, etc." },
];

const Home: React.FC = () => {
  return (
    <Layout
      title="PromptLibrary"
      description="Ready-to-use prompts for every GenAI model."
    >
      <main className="tw-bg-bg tw-text-black dark:tw-bg-bg-dark dark:tw-text-white">
        {/* HERO */}
        <section className="tw-border-b tw-border-border dark:tw-border-border-dark">
          <div className="tw-container tw-mx-auto tw-px-6 tw-py-16">
            <h1 className="tw-text-4xl md:tw-text-6xl tw-font-semibold tw-tracking-tight">
              PromptLibrary
            </h1>
            <p className="tw-mt-3 tw-max-w-2xl tw-text-lg tw-text-muted dark:tw-text-muted-dark">
              Thousands of ready-to-use prompts. Clean, organized, and searchable — for every model.
            </p>
            <div className="tw-mt-6 tw-flex tw-gap-3">
              <Link className="pl-btn-primary" to={`${base}/docs`}>
                Browse prompts
              </Link>
              <Link className="pl-btn-ghost" to="https://github.com/simonebittidev/PromptLibrary">
                GitHub
              </Link>
            </div>
          </div>
        </section>

        <div className="tw-container tw-mx-auto tw-px-6 tw-pt-6">
          <div className="debug-tailwind">
            If you can read this in a teal rounded box, Tailwind is working.
          </div>
        </div>

        {/* PROVIDERS GRID */}
        <section>
          <div className="tw-container tw-mx-auto tw-px-6 tw-py-10">
            <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4">
              {providers.map((p) => (
                <Link key={p.name} to={p.href} className="pl-card tw-block hover:tw-underline">
                  <div className="pl-chip tw-mb-2">Provider</div>
                  <h3 className="tw-text-xl tw-font-semibold">{p.name}</h3>
                  <p className="tw-text-muted dark:tw-text-muted-dark tw-mt-1">{p.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;