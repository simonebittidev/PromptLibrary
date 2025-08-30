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
    component: ComponentCreator('/PromptLibrary/docs', 'f00'),
    routes: [
      {
        path: '/PromptLibrary/docs',
        component: ComponentCreator('/PromptLibrary/docs', 'cc3'),
        routes: [
          {
            path: '/PromptLibrary/docs',
            component: ComponentCreator('/PromptLibrary/docs', 'c7f'),
            routes: [
              {
                path: '/PromptLibrary/docs/anthropic/gpt-4o',
                component: ComponentCreator('/PromptLibrary/docs/anthropic/gpt-4o', '476'),
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
