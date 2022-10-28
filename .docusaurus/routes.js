import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/cdlab-docs/__docusaurus/debug',
    component: ComponentCreator('/cdlab-docs/__docusaurus/debug', 'ec0'),
    exact: true
  },
  {
    path: '/cdlab-docs/__docusaurus/debug/config',
    component: ComponentCreator('/cdlab-docs/__docusaurus/debug/config', '551'),
    exact: true
  },
  {
    path: '/cdlab-docs/__docusaurus/debug/content',
    component: ComponentCreator('/cdlab-docs/__docusaurus/debug/content', '97b'),
    exact: true
  },
  {
    path: '/cdlab-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/cdlab-docs/__docusaurus/debug/globalData', '300'),
    exact: true
  },
  {
    path: '/cdlab-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/cdlab-docs/__docusaurus/debug/metadata', '068'),
    exact: true
  },
  {
    path: '/cdlab-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/cdlab-docs/__docusaurus/debug/registry', '35e'),
    exact: true
  },
  {
    path: '/cdlab-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/cdlab-docs/__docusaurus/debug/routes', '888'),
    exact: true
  },
  {
    path: '/cdlab-docs/blog',
    component: ComponentCreator('/cdlab-docs/blog', 'fd7'),
    exact: true
  },
  {
    path: '/cdlab-docs/blog/archive',
    component: ComponentCreator('/cdlab-docs/blog/archive', '7a9'),
    exact: true
  },
  {
    path: '/cdlab-docs/blog/first-blog-post',
    component: ComponentCreator('/cdlab-docs/blog/first-blog-post', '7fa'),
    exact: true
  },
  {
    path: '/cdlab-docs/blog/long-blog-post',
    component: ComponentCreator('/cdlab-docs/blog/long-blog-post', 'e30'),
    exact: true
  },
  {
    path: '/cdlab-docs/blog/mdx-blog-post',
    component: ComponentCreator('/cdlab-docs/blog/mdx-blog-post', '935'),
    exact: true
  },
  {
    path: '/cdlab-docs/blog/tags',
    component: ComponentCreator('/cdlab-docs/blog/tags', '285'),
    exact: true
  },
  {
    path: '/cdlab-docs/blog/tags/docusaurus',
    component: ComponentCreator('/cdlab-docs/blog/tags/docusaurus', '53a'),
    exact: true
  },
  {
    path: '/cdlab-docs/blog/tags/facebook',
    component: ComponentCreator('/cdlab-docs/blog/tags/facebook', '46a'),
    exact: true
  },
  {
    path: '/cdlab-docs/blog/tags/hello',
    component: ComponentCreator('/cdlab-docs/blog/tags/hello', 'fd2'),
    exact: true
  },
  {
    path: '/cdlab-docs/blog/tags/hola',
    component: ComponentCreator('/cdlab-docs/blog/tags/hola', 'b0d'),
    exact: true
  },
  {
    path: '/cdlab-docs/blog/welcome',
    component: ComponentCreator('/cdlab-docs/blog/welcome', '27b'),
    exact: true
  },
  {
    path: '/cdlab-docs/docs/tags',
    component: ComponentCreator('/cdlab-docs/docs/tags', '169'),
    exact: true
  },
  {
    path: '/cdlab-docs/docs/tags/benchmark',
    component: ComponentCreator('/cdlab-docs/docs/tags/benchmark', 'c8e'),
    exact: true
  },
  {
    path: '/cdlab-docs/docs/tags/datasets',
    component: ComponentCreator('/cdlab-docs/docs/tags/datasets', '25e'),
    exact: true
  },
  {
    path: '/cdlab-docs/docs/tags/open-source',
    component: ComponentCreator('/cdlab-docs/docs/tags/open-source', 'f2c'),
    exact: true
  },
  {
    path: '/cdlab-docs/docs/tags/temporal-graph',
    component: ComponentCreator('/cdlab-docs/docs/tags/temporal-graph', '4a6'),
    exact: true
  },
  {
    path: '/cdlab-docs/markdown-page',
    component: ComponentCreator('/cdlab-docs/markdown-page', '41f'),
    exact: true
  },
  {
    path: '/cdlab-docs/docs',
    component: ComponentCreator('/cdlab-docs/docs', 'f79'),
    routes: [
      {
        path: '/cdlab-docs/docs/category/adversarial-ner',
        component: ComponentCreator('/cdlab-docs/docs/category/adversarial-ner', 'eb8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/compute-canada-cloud',
        component: ComponentCreator('/cdlab-docs/docs/category/compute-canada-cloud', 'e4f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/compute-canada-hpc',
        component: ComponentCreator('/cdlab-docs/docs/category/compute-canada-hpc', 'd97'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/compute-resources',
        component: ComponentCreator('/cdlab-docs/docs/category/compute-resources', '06b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/covid-polarization',
        component: ComponentCreator('/cdlab-docs/docs/category/covid-polarization', 'b6f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/dynamic-graph-benchmark',
        component: ComponentCreator('/cdlab-docs/docs/category/dynamic-graph-benchmark', '36c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/google-cloud-platform',
        component: ComponentCreator('/cdlab-docs/docs/category/google-cloud-platform', '438'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/human-trafficking-detection',
        component: ComponentCreator('/cdlab-docs/docs/category/human-trafficking-detection', '1ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/image-linking',
        component: ComponentCreator('/cdlab-docs/docs/category/image-linking', '08f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/inductive-link-prediction',
        component: ComponentCreator('/cdlab-docs/docs/category/inductive-link-prediction', 'b7c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/lab-resources',
        component: ComponentCreator('/cdlab-docs/docs/category/lab-resources', 'f9c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/mila',
        component: ComponentCreator('/cdlab-docs/docs/category/mila', '6d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/misinformation-detection',
        component: ComponentCreator('/cdlab-docs/docs/category/misinformation-detection', 'ee6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/online-politics',
        component: ComponentCreator('/cdlab-docs/docs/category/online-politics', '6a3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/party-prediction',
        component: ComponentCreator('/cdlab-docs/docs/category/party-prediction', '074'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/polarization',
        component: ComponentCreator('/cdlab-docs/docs/category/polarization', '841'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/reading-group',
        component: ComponentCreator('/cdlab-docs/docs/category/reading-group', '434'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/rl-lab',
        component: ComponentCreator('/cdlab-docs/docs/category/rl-lab', 'ece'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/temporal-graph-learning',
        component: ComponentCreator('/cdlab-docs/docs/category/temporal-graph-learning', '546'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/intro',
        component: ComponentCreator('/cdlab-docs/docs/intro', '507'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/proj-dgb/overview',
        component: ComponentCreator('/cdlab-docs/docs/proj-dgb/overview', 'b76'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/proj-ht/ilp/overview',
        component: ComponentCreator('/cdlab-docs/docs/proj-ht/ilp/overview', 'ebc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/proj-ht/image-linking/overview',
        component: ComponentCreator('/cdlab-docs/docs/proj-ht/image-linking/overview', '7ca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/proj-ht/ner/overview',
        component: ComponentCreator('/cdlab-docs/docs/proj-ht/ner/overview', '131'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/proj-ht/overview',
        component: ComponentCreator('/cdlab-docs/docs/proj-ht/overview', 'c28'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/proj-ps/covid/overview',
        component: ComponentCreator('/cdlab-docs/docs/proj-ps/covid/overview', 'ee5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/proj-ps/misinfo-baselines/overview',
        component: ComponentCreator('/cdlab-docs/docs/proj-ps/misinfo-baselines/overview', 'b02'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/proj-ps/overview',
        component: ComponentCreator('/cdlab-docs/docs/proj-ps/overview', '4d1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/proj-ps/party-prediction/overview',
        component: ComponentCreator('/cdlab-docs/docs/proj-ps/party-prediction/overview', 'b5f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/proj-ps/polarization/overview',
        component: ComponentCreator('/cdlab-docs/docs/proj-ps/polarization/overview', '537'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/proj-tg/overview',
        component: ComponentCreator('/cdlab-docs/docs/proj-tg/overview', 'c86'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/resources/compute/cc-cloud/overview',
        component: ComponentCreator('/cdlab-docs/docs/resources/compute/cc-cloud/overview', 'a23'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/resources/compute/cc-hpc/overview',
        component: ComponentCreator('/cdlab-docs/docs/resources/compute/cc-hpc/overview', '3a3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/resources/compute/gcp/overview',
        component: ComponentCreator('/cdlab-docs/docs/resources/compute/gcp/overview', '9b9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/resources/compute/mila/overview',
        component: ComponentCreator('/cdlab-docs/docs/resources/compute/mila/overview', '05f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/resources/compute/overview',
        component: ComponentCreator('/cdlab-docs/docs/resources/compute/overview', 'b1b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/resources/compute/rl/overview',
        component: ComponentCreator('/cdlab-docs/docs/resources/compute/rl/overview', '8be'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/resources/meetings',
        component: ComponentCreator('/cdlab-docs/docs/resources/meetings', 'ff4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/resources/overview',
        component: ComponentCreator('/cdlab-docs/docs/resources/overview', '596'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/resources/rg/overview',
        component: ComponentCreator('/cdlab-docs/docs/resources/rg/overview', '5b9'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/cdlab-docs/',
    component: ComponentCreator('/cdlab-docs/', '50c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
