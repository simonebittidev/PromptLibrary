import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/PromptLibrary/__docusaurus/debug',
    component: ComponentCreator('/PromptLibrary/__docusaurus/debug', '463'),
    exact: true
  },
  {
    path: '/PromptLibrary/__docusaurus/debug/config',
    component: ComponentCreator('/PromptLibrary/__docusaurus/debug/config', '8c5'),
    exact: true
  },
  {
    path: '/PromptLibrary/__docusaurus/debug/content',
    component: ComponentCreator('/PromptLibrary/__docusaurus/debug/content', '736'),
    exact: true
  },
  {
    path: '/PromptLibrary/__docusaurus/debug/globalData',
    component: ComponentCreator('/PromptLibrary/__docusaurus/debug/globalData', '495'),
    exact: true
  },
  {
    path: '/PromptLibrary/__docusaurus/debug/metadata',
    component: ComponentCreator('/PromptLibrary/__docusaurus/debug/metadata', 'e15'),
    exact: true
  },
  {
    path: '/PromptLibrary/__docusaurus/debug/registry',
    component: ComponentCreator('/PromptLibrary/__docusaurus/debug/registry', '43a'),
    exact: true
  },
  {
    path: '/PromptLibrary/__docusaurus/debug/routes',
    component: ComponentCreator('/PromptLibrary/__docusaurus/debug/routes', 'bcb'),
    exact: true
  },
  {
    path: '/PromptLibrary/markdown-page',
    component: ComponentCreator('/PromptLibrary/markdown-page', '9c2'),
    exact: true
  },
  {
    path: '/PromptLibrary/docs',
    component: ComponentCreator('/PromptLibrary/docs', 'afe'),
    routes: [
      {
        path: '/PromptLibrary/docs',
        component: ComponentCreator('/PromptLibrary/docs', 'c0d'),
        routes: [
          {
            path: '/PromptLibrary/docs',
            component: ComponentCreator('/PromptLibrary/docs', '724'),
            routes: [
              {
                path: '/PromptLibrary/docs/anthropic/claude-3-haiku/',
                component: ComponentCreator('/PromptLibrary/docs/anthropic/claude-3-haiku/', 'd43'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/PromptLibrary/docs/anthropic/claude-3-opus/',
                component: ComponentCreator('/PromptLibrary/docs/anthropic/claude-3-opus/', 'cd9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/PromptLibrary/docs/anthropic/claude-3-sonnet/',
                component: ComponentCreator('/PromptLibrary/docs/anthropic/claude-3-sonnet/', '6a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/PromptLibrary/docs/cohere/command-r-plus/',
                component: ComponentCreator('/PromptLibrary/docs/cohere/command-r-plus/', 'd0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/PromptLibrary/docs/cohere/command-r/',
                component: ComponentCreator('/PromptLibrary/docs/cohere/command-r/', 'ed5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/PromptLibrary/docs/google/gemini-1.5-flash/',
                component: ComponentCreator('/PromptLibrary/docs/google/gemini-1.5-flash/', 'c4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/PromptLibrary/docs/google/gemini-1.5-pro/',
                component: ComponentCreator('/PromptLibrary/docs/google/gemini-1.5-pro/', 'db8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/PromptLibrary/docs/grok/grok-1.5/',
                component: ComponentCreator('/PromptLibrary/docs/grok/grok-1.5/', '031'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/PromptLibrary/docs/grok/grok-1.5v/',
                component: ComponentCreator('/PromptLibrary/docs/grok/grok-1.5v/', '9f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/PromptLibrary/docs/meta/llama-3-70b-instruct/',
                component: ComponentCreator('/PromptLibrary/docs/meta/llama-3-70b-instruct/', '0a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/PromptLibrary/docs/meta/llama-3-8b-instruct/',
                component: ComponentCreator('/PromptLibrary/docs/meta/llama-3-8b-instruct/', 'a67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/PromptLibrary/docs/mistral/mistral-large/',
                component: ComponentCreator('/PromptLibrary/docs/mistral/mistral-large/', 'cf6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/PromptLibrary/docs/mistral/mixtral-8x7b-instruct/',
                component: ComponentCreator('/PromptLibrary/docs/mistral/mixtral-8x7b-instruct/', 'e08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/PromptLibrary/docs/openai/',
                component: ComponentCreator('/PromptLibrary/docs/openai/', '5bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/PromptLibrary/docs/openai/gpt-4.1-mini/',
                component: ComponentCreator('/PromptLibrary/docs/openai/gpt-4.1-mini/', 'd72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/PromptLibrary/docs/openai/gpt-4.1/',
                component: ComponentCreator('/PromptLibrary/docs/openai/gpt-4.1/', 'dba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/PromptLibrary/docs/openai/gpt-4o',
                component: ComponentCreator('/PromptLibrary/docs/openai/gpt-4o', '0a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/PromptLibrary/docs/openai/gpt-4o-mini/',
                component: ComponentCreator('/PromptLibrary/docs/openai/gpt-4o-mini/', 'ef3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/PromptLibrary/docs/openai/gpt-4o/',
                component: ComponentCreator('/PromptLibrary/docs/openai/gpt-4o/', '55b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/PromptLibrary/',
    component: ComponentCreator('/PromptLibrary/', '5c6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
